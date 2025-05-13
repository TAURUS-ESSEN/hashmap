'use strict'

class Hashmap {
    constructor (name){
        this.mapname = name;
        this.loadfactor = 0.75;
        this.capacity = 16;
        this.backets = []; 
        this.counter = 0;
    }
    
    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }
        return hashCode;
    }

    set(mykey, myvalue) {
        let index = this.hash(mykey);
        if (index < 0 || index >= this.capacity) {
            throw new Error("Trying to access index out of bounds");
        }
        else {
            if (!this.backets[index]) {
                this.backets[index] = [];
                this.backets[index].push({ key: mykey, value: myvalue});
                this.counter++;
            }
            else if (this.backets[index].length > 0) {
                let result = this.backets[index].find(value => value.key === mykey);
                if (result) {
                    console.log("COLLISION!!!")
                    result.value = myvalue;
                }
                else {
                    this.backets[index].push({ key: mykey, value: myvalue});
                    this.counter++;
                }
            }
            this.checkCapacity();
        }
    }

    get(mykey) {
        let index = this.hash(mykey);
        return this.backets[index].find(value => value.key===mykey);
    }

    has(mykey) {
        let index = this.hash(mykey);
        if (!this.backets[index]) return false;
        return  this.backets[index].some(value => value.key===mykey)
    }

    checkCapacity() {
        let dangerNummer = Math.ceil(this.capacity * this.loadfactor) ;
        if (dangerNummer <= this.counter) {
            this.resize();
        }
        return this.capacity
    }

    resize() {
        this.capacity =  this.capacity * 2;
        console.log("новая вместиость?", this.capacity )
        let tempbackets = [];
            console.log("------------------------------------");
        console.log("ПЕРЕХЕШИРОВАНИЕ")
            console.log("------------------------------------");
        this.backets.forEach(arr => {
            if (arr.length > 0) {
                arr.forEach(obj => {
                    let index = this.hash(obj.key);
                if (!tempbackets[index]) {
                    tempbackets[index] = [];
                }
                    tempbackets[index].push({ key: obj.key, value: obj.value});
                })
            }
        })
        this.backets = tempbackets;
    }

    length() {
        return `Hashmap length: ${this.counter}`;
    }

    clear() {
        this.backets.length = 0;
        this.counter = 0;
    }

    keys() {
        const keysArray = [];
        this.backets.forEach(arr => {
            if (arr) {
                arr.forEach(obj => {
                    keysArray.push(obj.key)
                })
            }
        })
        return keysArray
    }

    values() {
        const valuesArray = [];
        this.backets.forEach(arr => {
            if (arr) {
                arr.forEach(obj => {
                    valuesArray.push(obj.value)
                })
            }
        })
        return valuesArray
    }

    entries() {
        const entriesArray = [];
        this.backets.forEach(arr => {
            if (arr) {
                arr.forEach(obj => {
                    let objArray = [obj.key, obj.value]
                    entriesArray.push(objArray)
            })
        }})
        return entriesArray
    }
}

const mymap = new Hashmap("mymap")
console.log(mymap)

 mymap.set('apple', 'red');
 mymap.set('apple', 'red2');
 mymap.set('banana', 'yellow')
 mymap.set('carrot', 'orange')
 mymap.set('dog', 'brown')
 mymap.set('elephant', 'gray')
 mymap.set('frog', 'green')
 mymap.set('grape', 'purple')
 mymap.set('hat', 'black')
 mymap.set('ice cream', 'white')
 mymap.set('jacket', 'blue')
 mymap.set('kite', 'pink')
 mymap.set('lion', 'golden')
 console.log(mymap.get('apple'));
 console.log(mymap.has('jacket'));
 mymap.set('lion', 'golden2')
 console.log(mymap.length());

mymap.backets.forEach(arr => {
    if (arr) {
        arr.forEach(obj => {
            console.log(obj)
        })
    }
})

console.log(mymap.keys())
console.log(mymap.values())
console.log(mymap.entries())
mymap.clear(); 
console.log(mymap.length());
console.log(mymap.backets)
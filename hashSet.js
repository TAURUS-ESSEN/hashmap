'use strict'

class Hashset {
    constructor (name){
        this.setname = name;
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

    set(mykey) {
        let index = this.hash(mykey);
        if (index < 0 || index >= this.capacity) {
            throw new Error("Trying to access index out of bounds");
        }
        else {
            if (!this.backets[index]) {
                this.backets[index] = [];
                this.backets[index].push({ key: mykey});
                this.counter++;
            }
            else {
                    this.backets[index].push({ key: mykey});
                    this.counter++;
                }
        }
            this.checkCapacity();
        
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
                    tempbackets[index].push({ key: obj.key});
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

}

const myset = new Hashset("myset")
console.log(myset)

 myset.set('apple', 'red');
 myset.set('apple', 'red2');
 myset.set('banana', 'yellow')
 myset.set('carrot', 'orange')
 myset.set('dog', 'brown')
 myset.set('elephant', 'gray')
 myset.set('frog', 'green')
 myset.set('grape', 'purple')
 myset.set('hat', 'black')
 myset.set('ice cream', 'white')
 myset.set('jacket', 'blue')
 myset.set('kite', 'pink')
 myset.set('lion', 'golden')
 console.log(myset.get('apple'));
 console.log(myset.has('jacket'));
 myset.set('lion', 'golden2')
 console.log(myset.length());

myset.backets.forEach(arr => {
    if (arr) {
        arr.forEach(obj => {
            console.log(obj)
        })
    }
})

console.log(myset.keys())
myset.clear(); 
console.log(myset.length());
console.log(myset.backets)
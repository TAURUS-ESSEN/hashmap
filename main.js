'use strict'

class Hashmap {
    constructor (name){
        this.mapname = name;
        this.loadfactor = 0.75;
        this.capacity = 16;
        this.backets = []; 
        this.counter = 0;
    }
    
    CreateObj (mykey, myvalue) {
        return {key: mykey, value: myvalue}
    }

    hash(key) {
        let hashCode = 0;
        console.log("ПОКАЖИ МНЕ ВМЕСТИМОСТЬ", this.capacity)
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }
    return hashCode;
    }

    set(mykey, myvalue) {
        let index = this.hash(mykey);
        console.log("хешированный индекс = ", index)
        if (index < 0 || index >= this.capacity) {
            throw new Error("Trying to access index out of bounds");
        }
        else {
            if (!this.backets[index]) {
                console.log("что в массиве по хэшированному индексу, жду undefined",this.backets[index]);
                this.backets[index] = [];
                console.log("значение индекса > создан пустой массив , жду (0) = ",this.backets[index]);
                this.backets[index].push({ key: mykey, value: myvalue});
                console.log("да что там вообще в этом значении?" , this.backets[index]);
                this.counter++;
            }
            else if (this.backets[index].length > 0) {
                let result = this.backets[index].find(value => value.key === mykey);
                if (result) {
                    console.log("совпадние=", result)
                    result.value = myvalue;
                    console.log("теперь вот так=", result)
                }
                else {
                    console.log("совпадений нет")
                    this.backets[index].push({ key: mykey, value: myvalue});
                    this.counter++;
                }
            }
            console.log("counter=", this.counter)
            this.checkCapacity();
        }
    }

    get(mykey) {
        let index = this.hash(mykey);
        console.log("index get", index)
        // return console.log(this.backets[index].find(value => value.key===mykey));
        return console.log(this.backets[index].find(value => value.key===mykey));
    }

    has(mykey) {
        let index = this.hash(mykey);
        console.log("index=", index)
        if (!this.backets[index]) return false;
              return console.log(this.backets[index].some(value => value.key===mykey));
 
    }

    checkCapacity() {
        let dangerNummer = Math.ceil(this.capacity * this.loadfactor) ;
        console.log("danger Nummer" , dangerNummer);
        // this.capacity = dangerNummer <= this.counter ? this.resize() : this.capacity;
        if (dangerNummer <= this.counter) {
             this.resize();
        }
        console.log("текущая вместимость", this.capacity);
        console.log("------------------------------------");
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
         console.log("------------------------------------");
         console.log("ПЕРЕХЕШИРОВАНИЕ ЗАВЕРШЕНО")
            console.log("------------------------------------");
        this.backets = tempbackets;
        console.log(this.backets[3][0]);
        console.log("так какая после перехеширования вместимость?", this.capacity);
        // return this.capacity
    }

    length() {
        return console.log(`Hashmap length: ${this.counter}`);
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
        console.log(entriesArray[5])
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
 mymap.get('apple')
 mymap.has('jacket')
 mymap.set('lion', 'golden2')
 mymap.length();

 let i=0;
 mymap.backets.forEach(arr => {
    if (arr) {
        arr.forEach(obj => {
            console.log(obj)
        })
    }
    i++;
 })
//  mymap.clear(); 
//  mymap.length();
//  console.log(mymap.backets)

 console.log(mymap.keys())
 console.log(mymap.values())
 console.log(mymap.entries())
//  console.log(entriesArray[0])

// console.log( mymap.backets[0] )
// console.log( mymap.backets[1] )
// console.log( mymap.backets[2] )
// console.log( mymap.backets[3][0] )
// console.log( mymap.backets[4][0] )
// console.log( mymap.backets[5][0] )
// console.log( mymap.backets[6] )
// console.log( mymap.backets[7] )
// console.log( mymap.backets[8] )
// console.log( mymap.backets[9] )
// console.log( mymap.backets[10] )
// console.log( mymap.backets[11][0] )
// console.log( mymap.backets[12] )
// console.log( mymap.backets[13][0] )
// console.log( mymap.backets[14][0] )
// console.log( mymap.backets[15][0] )
// console.log( mymap.backets[16] )
// console.log( mymap.backets[17][0] )
// console.log( mymap.backets[18] )
// console.log( mymap.backets[19] )
// console.log( mymap.backets[20] )
// console.log( mymap.backets[21] )
// console.log( mymap.backets[22] )
// console.log( mymap.backets[23] )
// console.log( mymap.backets[24] )
// console.log( mymap.backets[25] )
// console.log( mymap.backets[26][0] )
// console.log( mymap.backets[27][0] )
// console.log( mymap.backets[28][0] )
// console.log( mymap.backets[28][1] )
// console.log( mymap.backets[29] )
// console.log( mymap.backets[30] )
// console.log( mymap.backets[31] )
// console.log( mymap.backets[32] )
// console.log(mymap.set('apple', 'red'))

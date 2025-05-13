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
        console.log("ACHTUNG", this.capacity)
        let hashCode = 0;
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
            // return "Added"
        }
    }

    get(mykey) {
        let index = this.hash(mykey);
        console.log("index get", index)

        return console.log(this.backets[index].find(value => value.key===mykey));
    }

    has(mykey) {
        let index = this.hash(mykey);
        console.log("index=", index)
        let result = this.backets[index];
        if (result) {
            return "DA"
        }
        else {return "NET"}
        // let result2 = this.backets[index].key === mykey ? true : false
        // let result = this.backets[index].find(value => value.key===mykey)
        return console.log(result)
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
                console.log(arr)
                arr.forEach(obj => {
                    console.log(obj)
                    let index = this.hash(obj.key);
                    console.log("NEWINDEX=", index)
                if (!tempbackets[index]) {
                    console.log("что в массиве по хэшированному индексу, жду undefined", tempbackets[index]);
                    tempbackets[index] = [];
                    console.log("значение индекса > создан пустой массив , жду (0) = ", tempbackets[index]);
                    tempbackets[index].push({ key: obj.key, value: obj.value});
                    console.log("да что там вообще в этом значении?" , tempbackets[index]);
                }
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

    viewDaten() {
        return Hashmap.loadfactor;
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
//  mymap.has('jacket')

// console.log(mymap.set('apple', 'red'))

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
        return console.log(this.backets[index]);
    }

    has(mykey) {
        let index = this.hash(mykey);
        let result2 = this.backets[index].key === mykey ? true : false
        return console.log(result2)
    }

    checkCapacity() {
        let dangerNummer = Math.ceil(this.capacity * this.loadfactor) ;
        console.log("danger Nummer" , dangerNummer);
        this.capacity = dangerNummer <= this.counter ? this.capacity*2 : this.capacity;
        console.log("текущая вместимость", this.capacity);
        console.log("------------------------------------");
        return this.capacity
    }

    viewDaten() {
        return Hashmap.loadfactor;
    }
}

const mymap = new Hashmap("mymap")
console.log(mymap)

 mymap.set('apple', 'red');
 mymap.set('apple', 'red2');
//  mymap.set('banana', 'yellow')
//  mymap.set('carrot', 'orange')
//  mymap.set('dog', 'brown')
//  mymap.set('elephant', 'gray')
//  mymap.set('frog', 'green')
//  mymap.set('grape', 'purple')
//  mymap.set('hat', 'black')
//  mymap.set('ice cream', 'white')
//  mymap.set('jacket', 'blue')
//  mymap.set('kite', 'pink')
//  mymap.set('lion', 'golden')
//  mymap.get('hat')
//  mymap.has('jacket')

// console.log(mymap.set('apple', 'red'))

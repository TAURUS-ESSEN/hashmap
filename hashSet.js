'use strict'
export default class HashSet {
    constructor (name){
        this.setname = name;
        this.loadfactor = 0.75;
        this.capacity = 16;
        this.buckets = []; 
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

    if (!this.buckets[index]) {
        this.buckets[index] = [];
    }

    let exists = this.buckets[index].some(value => value.key === mykey);
    if (!exists) {
        this.buckets[index].push({ key: mykey });
        this.counter++;
    }

    this.checkCapacity();
}


    has(mykey) {
        let index = this.hash(mykey);
        if (!this.buckets[index]) return false;
        return  this.buckets[index].some(value => value.key===mykey)
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
        console.log("new capacity", this.capacity )
        let tempbuckets = [];
            console.log("------------------------------------");
        console.log("RESIZE")
        this.buckets.forEach(arr => {
            if (arr.length > 0) {
                arr.forEach(obj => {
                    let index = this.hash(obj.key);
                if (!tempbuckets[index]) {
                    tempbuckets[index] = [];
                }
                    tempbuckets[index].push({ key: obj.key});
                })
            }
        })
        this.buckets = tempbuckets;
    }

    length() {
        return `HashSet length: ${this.counter}`;
    }

    clear() {
        this.buckets.length = 0;
        this.buckets = [];
        this.counter = 0;
        this.capacity = 16;
    }

    keys() {
        const keysArray = [];
        this.buckets.forEach(arr => {
            if (arr) {
                arr.forEach(obj => {
                    keysArray.push(obj.key)
                })
            }
        })
        return keysArray
    }

}
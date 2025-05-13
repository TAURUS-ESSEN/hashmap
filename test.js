import HashMap from "./hashMap.js";
import HashSet from "./hashSet.js";


const mymap = new HashMap("mymap")
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

console.log(mymap.keys())
console.log(mymap.values())
console.log(mymap.entries())
mymap.clear(); 
console.log(mymap.length());
console.log(mymap.buckets)

/*                    hashSet test                */
console.log("--------------------------MY SET--------------------------------")
const myset = new HashSet("myset")
console.log(myset)

 myset.set('apple');
 myset.set('apple');
 myset.set('banana');
 myset.set('carrot');
 myset.set('dog');
 myset.set('elephant');
 myset.set('frog');
 myset.set('grape');
 myset.set('hat');
 myset.set('ice cream');
 myset.set('jacket');
 myset.set('kite');
 myset.set('lion');
 console.log(myset.has('jacket'));
 myset.set('lion');
 

console.log(myset.keys())
myset.clear(); 
console.log(myset.length());
console.log(myset.buckets)
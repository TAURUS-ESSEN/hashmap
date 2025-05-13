const users = [
   { name: 'Anna', age: 22 },
 { name: 'John', age: 35 },
 { name: 'Alex', age: 28 },
 { name: 'Lena', age: 35 }
 ];
let result = users.find(user => user.age === 35)
console.log(result.name);
result.name = "xx"
console.log(users[1])
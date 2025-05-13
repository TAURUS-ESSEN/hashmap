# 🧠 HashMap & HashSet Implementation in JavaScript

This repository contains a simple implementation of two fundamental data structures:

- `HashMap` – a key-value store with automatic resizing.
- `HashSet` – a collection of unique keys without associated values.

These implementations follow the assignment from [The Odin Project](https://www.theodinproject.com/lessons/javascript-hashmap) and were written in ES6+ JavaScript using class syntax and basic array-based hash buckets.

## 📦 Features

### HashMap
- Stores key-value pairs.
- Handles hash collisions using chaining (arrays of objects).
- Automatically resizes based on a load factor (default: 0.75).
- Methods:
  - `.set(key, value)`
  - `.get(key)`
  - `.has(key)`
  - `.keys()`
  - `.values()`
  - `.entries()`
  - `.length()`
  - `.clear()`

### HashSet
- Stores unique keys.
- Does not allow duplicate entries.
- Uses the same hashing and resizing logic as `HashMap`.
- Methods:
  - `.set(key)`
  - `.has(key)`
  - `.keys()`
  - `.length()`
  - `.clear()`
 

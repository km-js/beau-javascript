//Maps are data structure that store key value pair 
//In Javascript, objects are maps
//Maps provide rapid lookup of stored items based on key values

let map = new Map();
map.set('arms', 2);
map.set('fingers', 10);
map.set('eyes', 2);
map.set('belley button', 1);

console.log(map.get('fingers'));//10
console.log(map.values());//MapIterator {2, 10, 2, 1}

//difference between objects and maps
//The keys of objects can only be string or symbols. The keys of maps can be any value including functions, objects, numbers, boolean,NaN  

let map2 = new Map();
map2.set('apples', 2);
console.log(map2.has('hands'));//false
//returns keys
console.log(map2.entries());//MapIterator {'apples' => 2}

let keyObj = {},
keyFunc = function() {};

map2.set('hello', 'string value');
map2.set(keyObj,'obj value');
map2.set(keyFunc, 'func value');
map2.set(NaN, 'NaN value');

console.log(map2.size);

console.log(map2.get('hello'));
console.log(map2.get(keyObj));
console.log(map2.get(keyFunc));
console.log(map2.get(NaN));


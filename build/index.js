"use strict";
function setItem(key, value) {
    if (typeof key === 'string') {
        console.log(key);
        localStorage.setItem(key, JSON.stringify(value));
    }
    else {
        console.log('error');
    }
}
function getItem(item) {
    const key = localStorage.getItem(item);
    if (key !== null) {
        if (key.startsWith("{") && key.endsWith("}")) {
            console.log("it is an object", key);
        }
        else if (Boolean(key)) {
            console.log("it is a boolean");
        }
        else if (isNaN(Number(key))) {
            console.log("it is a number", key);
        }
        else {
            console.log("it is a string");
        }
    }
    else {
        console.log("it is a null");
    }
}
function removeItem(key) {
    localStorage.removeItem(key);
}
function clearAll() {
    localStorage.clear();
}
setItem('name', 'leyla');
setItem('boolean', true);
setItem('number', 66);
setItem('obj', { age: 23 });
setItem('null', null);
setItem('und', undefined);
removeItem('name');
console.log(getItem('name'));
removeItem('name');
console.log(getItem('name'));
setItem('name', 'leyla');
setItem('age', 22);

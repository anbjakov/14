'use strict'
const API_URL = 'https://jsonplaceholder.typicode.com/users/1';
const itemKey = 'userData';
if (isItemLocalStored(itemKey)) {
    console.log(getLocalStoredItem(itemKey));
} else {
    makeApiRequest(API_URL).then(resolve=>setItemToLocalStorage(itemKey,resolve));
}
async function makeApiRequest(API_URL){
    const response = await fetch(API_URL);
    const resolve = await response.json();
    try{
        if (!response.ok) {
            throw new Error('bad response')
        };
        return resolve
    }
    catch(error){
        console.error(`Error: ${error.message}`);
    }
}

function isItemLocalStored(key) {
    return isNaN(localStorage.getItem(key))
}
function getLocalStoredItem(itemKey){
    try {
        if (!itemKey) throw new Error('Achtung! Schlüssel nicht angegeben!!')
        return JSON.parse(localStorage.getItem(itemKey));
    }
    catch (e) {
        console.error(e.message)
    }
}
function setItemToLocalStorage(key,data){
    try{
        if (key && data){
        localStorage.setItem(key, JSON.stringify(data))
    }
        else {
            throw new Error('Expected local storage key and data ')
        }
    }
    catch (e) {
        console.error(e.message);
    }
}



console.log('-------task 2-------------');

console.log('isValidDateFormat() result:');
console.log(isValidDateFormat('2012/09/18 12:10'))
console.log(isValidDateFormat("12.02.2022 12:10"));

function isValidDateFormat(date) {
    const datePattern = /\d{4}\/\d{2}\/\d{2}\s\d{2}\:\d{2}/;
    return datePattern.test(date)
}
console.log('-------task 3-------------');
console.log('isAfter() result:');

let isAfter = (begin,end)=> {
    let startDate = +new Date(begin);
    let finishDate = +new Date(end);
    try{
        if (isNaN(startDate) || isNaN(startDate) ) {
        throw new Error('invalid date')
        }
        return startDate > finishDate
    }
    catch (error) {
        console.error(error);
    }
}
console.log(isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))); // true
console.log(isAfter(1648636135000, 1648549735000)); // true
console.log(isAfter(1648549735000, 1648636135000)); // false


const assertEqual = require('../assertEqual');
const tail = require('../tail');


const array = ["Yo Yo", "Lighthouse", "labs"];
tail(array);
assertEqual(array.length, 3);
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumberCollection_1 = require("./NumberCollection");
var numberCollection = new NumberCollection_1.NumberCollection([10000, 3, -5, 0]);
var sorter = new Sorter_1.Sorter(numberCollection);
sorter.sort();
console.log(sorter.collection);

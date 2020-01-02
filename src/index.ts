import {Sorter} from "./Sorter";
import {NumberCollection} from "./NumberCollection";
import {CharacterCollection} from "./CharacterCollection";

const numberCollection = new NumberCollection([10000,3,-5,0]);
const sorter = new Sorter(numberCollection);

sorter.sort();

console.log(sorter.collection);
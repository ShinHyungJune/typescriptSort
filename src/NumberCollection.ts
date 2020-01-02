import {Sorter} from './Sorter';

    export class NumberCollection extends Sorter {

    constructor(public data: number[]) {
        super();
    }

    get length(): number { // get을 붙이면 collection.length로 부를 수 있어, get 없으면 collection.length()로 불러야돼
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}
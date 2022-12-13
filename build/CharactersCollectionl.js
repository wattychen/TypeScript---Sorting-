"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
class CharactersCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(left, right) {
        return this.data[left].toLowerCase() > this.data[right].toLowerCase();
    }
    swap(left, right) {
        const characters = this.data.split('');
    }
}
exports.CharactersCollection = CharactersCollection;

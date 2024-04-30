class Storage {
    #items = [];
    constructor(items) {
        if (!Array.isArray(items)) {
            throw new TypeError("Expected an array");
        }
        this.#items = items;
    }

    getItems() {
        return [...this.#items];
    }

    addItem(newItem) {
        this.#items.push(newItem);
    }

    removeItem(itemToRemove) {
        const index = this.#items.indexOf(itemToRemove);
        if (index > -1) {
            this.#items.splice(index, 1);
            return `${itemToRemove} was deleted successfully`;
        }
        return `The item ${itemToRemove} was not found`;
    }
}

console.log("Outputs for task 2: \n");
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
console.log("");

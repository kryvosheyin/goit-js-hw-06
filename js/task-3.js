class StringBuilder {
    #value;

    constructor(initialValue = "") {
        this.#value = initialValue;
    }

    getValue() {
        return this.#value.slice();
    }

    validateInput(str) {
        if (typeof str !== "string") {
            throw new TypeError("Argument must be a string");
        }
    }

    padEnd(str) {
        this.validateInput(str);
        this.#value += str;
        return this;
    }

    padStart(str) {
        this.validateInput(str);
        this.#value = str + this.#value;
        return this;
    }

    padBoth(str) {
        return this.padStart(str).padEnd(str);
    }
}
console.log("Outputs for task 3: \n");
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

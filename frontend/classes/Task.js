export class Task {
    #creationDate;
    #title;
    #color;
    #resolved;
    constructor(title) {
        this.#creationDate = Date.now()
        this.#title = title;
        this.#color = yellow;
        this.#resolved = false;
    }
    switchStatus() {
        this.#resolved = !this.#resolved;
    }
    setTitle(newTitle) {
        this.#title = newTitle;
    }
    setColor(newColor) {
        this.#color = newColor;
    }
}
class Task {
    #creationDate;
    #title;
    #color;
    #resolved;
    constructor(title, Date) {
        this.#title = title;
        this.#creationDate = Date;
        this.#color = "yellow";
        this.#resolved = false;
    }
    switchStatus() {

        this.#resolved = !this.#resolved;
    }
    setTitle(newTitle) {

        this.#title = newTitle;
    }
    setColor(newColor) {

        this.#color = newColor;
    }
    getCreationDate() {
        return this.#creationDate
    }
}
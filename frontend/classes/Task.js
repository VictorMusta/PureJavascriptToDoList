export class Task {
    #title;
    #color;
    #resolved;
    constructor() {
        this.#title = "Default Title";
        this.#color = "rgb(255, 255, 130)";
        this.#resolved = false;
    }
    switchStatus() {
        this.#resolved = !this.#resolved;
    }
    setTitle(newTitle){
        this.#title = newTitle;
    }
    setColor(newColor){
        this.#color = newColor;
    }
}

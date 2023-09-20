

let idCount=0

class Task {
    id
    title;
    color;
    resolved;
    constructor(title) {
        this.id = idCount
        this.title = title;
        this.color = "yellow";
        this.resolved = false;
        idCount += 1
    }
    switchStatus() {
        this.resolved = !this.resolved;
    }
    setTitle(newTitle) {
        this.title = newTitle;
    }
    setColor(newColor) {
        this.color = newColor;
    }
}

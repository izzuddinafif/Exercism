// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

class Size {
    constructor(width = 80, height = 60) {
        this.width = width;
        this.height = height;
    }
    resize(width, height) {
        this.height = height;
        this.width = width;
    }
}

// const tes = new Size()

// console.log(tes.width, tes.height)
// tes.resize(720, 480)
// console.log(tes)

function Position(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

Position.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
}

// class Position {
//     constructor(x = 0, y = 0) {
//         this.x = x;
//         this.y = y;
//     }
//     move(x, y) {
//         this.x = x;
//         this.y = y;
//     }
// }

class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Position();
    }
    resize(newSize) {
        if (newSize.height < 1) newSize.height = 1;
        if (newSize.width < 1) newSize.width = 1;
        if (this.position.x + newSize.height > this.screenSize.height) newSize.height = this.screenSize.height - this.position.y;
        if (this.position.y + newSize.width > this.screenSize.width) newSize.width = this.screenSize.width - this.position.x;

        console.log("resizing to:", newSize.width, newSize.height)
        this.size.resize(newSize.width, newSize.height)
    }
    move(newPosition) {
        if (newPosition.y < 0) newPosition.x = 0;
        if (newPosition.y < 0) newPosition.y = 0;
        if (this.size.width + newPosition.x > this.screenSize.width) newPosition.x = this.screenSize.width - this.size.width;
        if (this.size.height + newPosition.y > this.screenSize.height) newPosition.y = this.screenSize.height - this.size.height;
        console.log("moving to:", newPosition.x, newPosition.y)
        this.position.move(newPosition.x, newPosition.y)
    }
}

function changeWindow(programWindow) {
    let size = new Size(400, 300);
    let position = new Position(100, 150);
    programWindow.resize(size)
    programWindow.move(position)
    return programWindow
}

const programWindow = new ProgramWindow();
console.log(programWindow)
const newPosition = new Position(710, 525);
programWindow.move(newPosition);
console.log(programWindow)
const newSize = new Size(1000, 1000);
programWindow.resize(newSize);

console.log(programWindow.size)


export { Size, Position, ProgramWindow, changeWindow }
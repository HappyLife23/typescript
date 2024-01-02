/*
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a', false];

const colorRed = 0;
const colorGreen = 1;
const colorBlue = 2;

enum Color { Red = 0, Green = 1, blue = 2, Purpel = 3};

let backgroundColor = Color.Green;
*/

class Point {
 
    constructor(public x: number, private y: number) {
      
    }

    draw() {
        console.log(`draw point X: ${this.x}, Y: ${this.y}`);
    }

    get X(){ 
        return this.x
    }
    set X(value) {
        if (value < 0)
            throw new Error('Value can not be less than 0.');
            
    }
}

let point = new Point(1, 2);

point.draw();

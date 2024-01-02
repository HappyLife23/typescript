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
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("draw point X: ".concat(this.x, ", Y: ").concat(this.y));
    };
    return Point;
}());
var point = new Point(1, 2);
point.draw();

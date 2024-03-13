class React{
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    calcArea() {
        console.log(`${this.w*this.h}`);
        return this.w*this.h;
    }
}

var react = new React(1,2,3,4);
console.log(react.calcArea());
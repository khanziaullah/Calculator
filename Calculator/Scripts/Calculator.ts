
class Calculator {

    x: HTMLInputElement;
    y: HTMLInputElement;
    result: HTMLSpanElement;

    constructor() {
        this.x = <HTMLInputElement>document.getElementById('x');
        this.y = <HTMLInputElement>document.getElementById('y');
        this.result = <HTMLSpanElement>document.getElementById('result');
        this.wireEvents();
    }

    wireEvents(): void {
        var btnAdd: HTMLButtonElement = <HTMLButtonElement>document.getElementById('btnAdd');
        btnAdd.addEventListener("click", event => {
            this.result.innerText = "Hello";
        });
    }
}

window.onload = function () {
    var c = new Calculator;
}
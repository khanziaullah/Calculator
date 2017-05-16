
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
            var xValue: number = parseInt(this.x.value);
            var yValue: number = parseInt(this.y.value);
            this.result.innerText = (xValue + yValue).toString();
        });

        var btnSubtract: HTMLButtonElement = <HTMLButtonElement>document.getElementById('btnSubtract');
        btnSubtract.addEventListener("click", event => {
            var xValue: number = parseInt(this.x.value);
            var yValue: number = parseInt(this.y.value);
            this.result.innerText = (xValue - yValue).toString();
        });
    }
}

window.onload = function () {
    var c = new Calculator;
}
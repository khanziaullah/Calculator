var Calculator = (function () {
    function Calculator() {
        this.x = document.getElementById('x');
        this.y = document.getElementById('y');
        this.result = document.getElementById('result');
        this.wireEvents();
    }
    Calculator.prototype.wireEvents = function () {
        var _this = this;
        var btnAdd = document.getElementById('btnAdd');
        btnAdd.addEventListener("click", function (event) {
            _this.result.innerText = "Hello";
        });
    };
    return Calculator;
}());
window.onload = function () {
    var c = new Calculator;
};
//# sourceMappingURL=Calculator.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(name, age) {
        this.name = name;
        this.age = age;
    }
    Human.prototype.showHuman = function () {
        return "This human's name is ".concat(this.name, " and he is ").concat(this.age, " years old");
    };
    return Human;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, registration) {
        var _this = _super.call(this, name, age) || this;
        _this.registration = registration;
        return _this;
    }
    Student.prototype.cryOnTestDay = function () {
        console.log("uaaahh uuaaahh uaaah help me teacher ");
    };
    return Student;
}(Human));
var ana = new Student('Ana Maria', 29, '102030');
console.log(ana);
console.log(ana.showHuman());
ana.cryOnTestDay();

/**
 * Created by suda on 16/3/14.
 */


function Constructor(arg1, arg2, arg3) {

    // force to use new
    if (!(this instanceof Constructor)) {
        return new Constructor(arg1, arg2, arg3);
    }

    this.property1 = arg1;
    this.property2 = arg2;
    this.property3 = arg3;
}

Constructor.prototype.methods = function () {
    return this.property1 + ',' + this.property2 + ',' + this.property3;
};

// test

var ConstructorTest = new Constructor(1, 2, 3);
console.log(ConstructorTest.methods());




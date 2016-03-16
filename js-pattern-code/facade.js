/**
 * Created by suda on 16/3/16.
 */

function Facade () {
    this.classA = new ClassA();
    this.classB = new ClassB();

    // api
    this.operate = function (caller) {

        if (!this.classB.checkSomething("notcheck")) {
            this.classA.doSomething("check again by " + caller);
        }
    }
};

function ClassA () {

    this.doSomething = function (what) {
        console.log("using classA doing " + what);
    }
};

function ClassB () {

    this.checkSomething = function (what) {
        return (what == "check") ? true: false;
    }
};


// test
var facade = new Facade();
facade.operate("me");
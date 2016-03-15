/**
 * Created by suda on 16/3/15.
 */

function ConcreteComponent() {

    this.operate = function () {
        this.preDo();
        console.log("do something.");
        this.postDo();
    };
}

function Decorator(component) {

    this.operate = function (){
        component.operate();
    };
}

function ConcreteDecorator(component) {

    this.base = Decorator;
    this.base(component);

    component.preDo = function () {
        console.log("pre-do...");
    };

    component.postDo = function () {
        console.log("post-do...");
    };
}

// test
var concreteComponentTest = new ConcreteComponent();
var concreteDecoratorA = new ConcreteDecorator(concreteComponentTest);
var concreteDecoratorB = new ConcreteDecorator(concreteDecoratorA);

concreteDecoratorB.operate();


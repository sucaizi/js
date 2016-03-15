/**
 * Created by suda on 16/3/15.
 */

var ProductFactory = {};

ProductFactory.createProductA = function () {
    console.log("new productA");
}

ProductFactory.createProductB = function () {
    console.log("new productB");
}

ProductFactory.factory = function (productType) {
    return new ProductFactory[productType];
}

// test
ProductFactory.factory("createProductB");
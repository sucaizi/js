/**
 * Created by suda on 16/3/14.
 */

var Singleton = (function () {

    var instantiated;

    function init(args) {

        return {

            methods: function () {
                console.log("Singleton Pattern Methods");
            },

            properties: "Singleton Pattern Proterties."

        };
    }

    return {

        getInstance: function (args) {

            if (!instantiated) {
                instantiated = init(args);
            }

            return instantiated;
        }
    };
})();

// test
var SingletonTest = Singleton.getInstance().methods();

/**
 * Created by suda on 15/10/18.
 */

// constructor of stack
function Stack(){
    this._size = 0; // size of stack
    this._storage = {}; // store data of stack
}

Stack.prototype.push = function(data) {
    var size = this._size++;
    this._storage[size] = data;
};

Stack.prototype.pop = function () {
    var size = this._size;
    var deletedData;

    if (size > 1) {
        deletedData = this._storage[size];

        delete  this._storage[size];
        this._size--;

        return deletedData;
    }
};
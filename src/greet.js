/**
 * Created by rich on 13/07/16.
 */
'use strict'

var greet = function(name){
    if (name === undefined){
        name = 'world';
    }
    return 'Hello ' + name + '!';
};

module.exports = greet;
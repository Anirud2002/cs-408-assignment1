import {greet, sayHello} from '../js/main.js';

QUnit.module('hello', function() {

    QUnit.test('make sure the hello function says hello', function(assert) {
        var result = sayHello();
        assert.equal(result, 'hello');
    });

    QUnit.test('make sure the greet function says hello to a person', function(assert) {
        var result = greet('Anirud');
        assert.equal(result, 'Hello Anirud');
    });

});

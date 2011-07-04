module('DOMNodeInsertedIntoDocument', $.config.module);

test('should dispatch DOMNodeInsertedIntoDocument event', 1, function() {
    QUnit.stop($.config.timeout);

    // The W3C spec does not state what type of elements can listen to this event.
    $.el.fixture.addEventListener('DOMNodeInsertedIntoDocument', $.fn.eventListenerCallback, false);

    $.fn.callback = function(e) {
        ok(true, 'DOMNodeInsertedIntoDocument was fired');
        QUnit.start();
    };

    var el = document.createElement('div');
    $.el.fixture.appendChild(el);
});

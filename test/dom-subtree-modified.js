module('DOMSubtreeModified', $.config.module);

test('should dispatch DOMSubtreeModified event', 1, function() {
    QUnit.stop($.config.timeout);

    $.el.fixture.addEventListener('DOMSubtreeModified', $.fn.eventListenerCallback, false);
    
    $.fn.callback = function(e) {
        ok(true, 'DOMSubtreeModified was fired');
        QUnit.start();
    };
    
    var el = document.createElement('div');
    $.el.fixture.appendChild(el);
});

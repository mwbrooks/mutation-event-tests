module('DOMSubtreeModified', $.config.module);

test('should dispatch DOMSubtreeModified event', 1, function() {
    stop($.config.timeout);

    $.el.fixture.addEventListener('DOMSubtreeModified', $.fn.eventListenerCallback, false);
    
    $.fn.callback = function(e) {
        ok(true, 'DOMSubtreeModified was fired');
        start();
    };
    
    var el = document.createElement('div');
    $.el.fixture.appendChild(el);
});

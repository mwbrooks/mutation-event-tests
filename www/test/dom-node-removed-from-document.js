module('DOMNodeRemovedFromDocument', $.config.module);

test('should dispatch DOMNodeRemovedFromDocument event', 1, function() {
    stop($.config.timeout);

    // W3C spec does not state the type of nodes that can listen to this event
    $.el.fixture.addEventListener('DOMNodeRemovedFromDocument', $.fn.eventListenerCallback, false);

    $.fn.callback = function(e) {
        ok(true, 'DOMNodeRemovedFromDocument was fired');
        start();
    };

    var el = document.createElement('div');
    $.el.fixture.appendChild(el);
    $.el.fixture.removeChild(el);
});

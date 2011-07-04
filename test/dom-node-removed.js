module('DOMNodeRemoved', $.config.module);

test('should dispatch DOMNodeRemoved event', 1, function() {
    stop($.config.timeout);

    $.el.fixture.addEventListener('DOMNodeRemoved', $.fn.eventListenerCallback, false);
    
    $.fn.callback = function(e) {
        ok(true, 'DOMNodeRemoved was fired');
        QUnit.start();
    };
    
    var el = document.createElement('div');
    $.el.fixture.appendChild(el);
    $.el.fixture.removeChild(el);
});

test('should have e.target as the removed element', 1, function() {
    stop($.config.timeout);

    $.el.fixture.addEventListener('DOMNodeRemoved', $.fn.eventListenerCallback, false);
    
    $.fn.callback = function(e) {
        equal(e.target, el, 'Target element is the same.');
        QUnit.start();
    };
    
    var el = document.createElement('div');
    $.el.fixture.appendChild(el);
    $.el.fixture.removeChild(el);
});

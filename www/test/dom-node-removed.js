module('DOMNodeRemoved', $.config.module);

asyncTest('should dispatch DOMNodeRemoved event', 1, function() {
    $.el.fixture.addEventListener('DOMNodeRemoved', $.fn.eventListenerCallback, false);
    
    $.fn.callback = function(e) {
        ok(true, 'DOMNodeRemoved was fired');
        start();
    };
    
    var el = document.createElement('div');
    $.el.fixture.appendChild(el);
    $.el.fixture.removeChild(el);
});

asyncTest('should have e.target as the removed element', 1, function() {
    $.el.fixture.addEventListener('DOMNodeRemoved', $.fn.eventListenerCallback, false);
    
    $.fn.callback = function(e) {
        equal(e.target, el, 'Target element is the same.');
        start();
    };
    
    var el = document.createElement('div');
    $.el.fixture.appendChild(el);
    $.el.fixture.removeChild(el);
});

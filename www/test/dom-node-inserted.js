module('DOMNodeInserted', $.config.module);

asyncTest('should dispatch DOMNodeInserted event', 1, function() {
    $.el.fixture.addEventListener('DOMNodeInserted', $.fn.eventListenerCallback, false);
    
    $.fn.callback = function(e) {
        ok(true, 'DOMNodeInserted was fired');
        start();
    };
    
    var el = document.createElement('div');
    $.el.fixture.appendChild(el);
});

asyncTest('should have e.target as the inserted element', 2, function() {
    $.el.fixture.addEventListener('DOMNodeInserted', $.fn.eventListenerCallback, false);
    
    $.fn.callback = function(e) {
        equal(e.target, el, 'Target element is the same.');
        equal(e.target.tagName, 'DIV', 'Target element uses uppercase tag name.');
        start();
    };
    
    var el = document.createElement('div');
    $.el.fixture.appendChild(el);
});

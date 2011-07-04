module('DOMNodeInserted', $.config.module);

test('should dispatch DOMNodeInserted event', 1, function() {
    stop($.config.timeout);

    $.el.fixture.addEventListener('DOMNodeInserted', $.fn.eventListenerCallback, false);
    
    $.fn.callback = function(e) {
        ok(true, 'DOMNodeInserted was fired');
        QUnit.start();
    };
    
    var el = document.createElement('div');
    $.el.fixture.appendChild(el);
});

test('should have e.target as the inserted element', 2, function() {
    stop($.config.timeout);

    $.el.fixture.addEventListener('DOMNodeInserted', $.fn.eventListenerCallback, false);
    
    $.fn.callback = function(e) {
        equal(e.target, el, 'Target element is the same.');
        equal(e.target.tagName, 'DIV', 'Target element uses uppercase tag name.');
        QUnit.start();
    };
    
    var el = document.createElement('div');
    $.el.fixture.appendChild(el);
});

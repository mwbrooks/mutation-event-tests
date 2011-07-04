module('DOMAttrModified', $.config.module);

test('should dispatch DOMAttrModified event', 1, function() {
    stop($.config.timeout);

    $.el.fixture.addEventListener('DOMAttrModified', $.fn.eventListenerCallback, false);

    $.fn.callback = function(e) {
        ok(true, 'DOMAttrModified was fired');
        QUnit.start();
    };

    var el = document.createElement('div');
    $.el.fixture.appendChild(el);
    el.setAttribute('id', 'attr-modified-node');
});

module('DOMCharacterDataModified', $.config.module);

test('should dispatch DOMCharacterDataModified event', 1, function() {
    stop($.config.timeout);

    $.el.fixture.addEventListener('DOMCharacterDataModified', $.fn.eventListenerCallback, false);

    $.fn.callback = function(e) {
        ok(true, 'DOMCharacterDataModified was fired');
        start();
    };

    var el = document.createElement('p');
    $.el.fixture.appendChild(el);
    el.innerHTML = 'Some data';
    el.childNodes[0].appendData('More data');
});

module('DOMCharacterDataModified', $.config.module);

test('should dispatch DOMCharacterDataModified event', 2, function() {
    stop($.config.timeout);

    $.el.fixture.addEventListener('DOMCharacterDataModified', $.fn.eventListenerCallback, false);

    $.fn.callback = function(e) {
        ok(true, 'DOMCharacterDataModified was fired');

        equal(e.target,      el.childNodes[0],     'e.target is the modified element');
        equal(e.relatedNode, $.el.fixture,         'e.relatedNode should be the parent of the modified element');
        equal(e.prevValue,   'Some data',          'e.prevValue should be correct');
        equal(e.newValue,    'Some dataMore data', 'e.newValue should be correct');

        QUnit.start();
    };

    var el = document.createElement('p');
    $.el.fixture.appendChild(el);
    el.innerHTML = 'Some data';
    el.childNodes[0].appendData('More data');
});

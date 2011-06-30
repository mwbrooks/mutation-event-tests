localStorage.clear();
sessionStorage.clear();
QUnit.config.autostart = false;

window.addEventListener('load', function() {
    $.el.fixture = document.getElementById('qunit-fixture');
    start();
}, false);

window.$ = {
    el: {
        fixture: null,
    },
    fn: {
        clean: function() {
            $.el.fixture.innerHTML = '';
        },
        eventCallback: function(e) {
            e.relatedNode.removeEventListener(e.type, $.fn.eventCallback);
            if (typeof $.fn.callback === 'function') $.fn.callback(e);
        }
    },
    config: {
        module: {
            setup: function() {
                $.fn.clean();
            },
            teardown: function() {
                $.fn.clean();
            }
        }
    }
};

module('DOMNodeInserted', $.config.module);

test('should dispatch DOMNodeInserted event', 1, function() {
    document.body.addEventListener('DOMNodeInserted', $.fn.eventCallback, false);
    
    $.fn.callback = function(e) {
        ok(true, 'DOMNodeInserted was fired');
        start();
    };
    
    var el = document.createElement('div');
    document.body.appendChild(el);
});

test('should have e.target as the inserted element', 1, function() {
    document.body.addEventListener('DOMNodeInserted', $.fn.eventCallback, false);
    
    $.fn.callback = function(e) {
        equal(e.target, el, 'Target element is the inserted element.');
        start();
    };
    
    var el = document.createElement('div');
    document.body.appendChild(el);
});
// QUnit Configuration
//
QUnit.config.autostart = false;

try {
    localStorage.clear();
    sessionStorage.clear();
} catch(e) {}

// Test Helper Object
//
// Useful object to store common configurations, fixture elements,
// and global functions
//
window.$ = {
    config: {
        module: {
            setup: function() {
                $.fn.clean();
            },
            teardown: function() {
                $.fn.clean();
            }
        },
        timeout: 300
    },
    el: {
        fixture: null,
    },
    fn: {
        clean: function() {
            $.el.fixture.innerHTML = '';
        },
        eventListenerCallback: function(e) {
            // Depending on the event type, the relatedNode or the target may
            // be broadcasting the event. For example, DOMSubtreeModified
            // uses e.target (e.relatedNode is null), DOMNodeInserted uses
            // e.relatedNode (e.target is the inserted node).
            var target = e.relatedNode || e.target;

            target.removeEventListener(e.type, $.fn.eventListenerCallback, false);
            if (typeof $.fn.callback === 'function') $.fn.callback(e);
        }
    }
};

// Once the document has loaded:
//   - Start running QUnit
//
window.addEventListener('load', function() {
    $.el.fixture = document.getElementById('qunit-fixture');

    // Run QUnit
    start();

}, false);


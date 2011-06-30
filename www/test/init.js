// QUnit Configuration
//
QUnit.config.autostart = false;

localStorage.clear();
sessionStorage.clear();

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
        }
    },
    el: {
        fixture: null,
    },
    fn: {
        clean: function() {
            $.el.fixture.innerHTML = '';
        },
        eventListenerCallback: function(e) {
            e.relatedNode.removeEventListener(e.type, $.fn.unregisteringCallback);
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


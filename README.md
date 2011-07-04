Mutation Event Test Suite
=========================

Mutation Events are defined in the [W3C DOM-Level 2 Event Model](http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-eventgroupings-mutationevents). They provide notification of any change to the HTML document structure.

Browser Results
---------------

                       | DOMSubtreeModified | DOMNodeInserted | DOMNodeRemoved | DOMNodeInsertedIntoDocument | DOMNodeRemovedFromDocument | DOMAttrModified | DOMCharacterDataModified
    -------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------
    Android    2.2     |         ✔                   ✔               ✔                        ✖                            ✖                       ✖                   ½
    BlackBerry 6.0.227 |         ✔                   ✔               ✔                        ✖                            ✖                       ✖                   ½
    Chrome     12.0    |         ✔                   ✔               ✔                        ✖                            ✖                       ✖                   ½
    FireFox    3.6     |         ✔                   ✔               ✔                        ✖                            ✖                       ✔                   ½
    iOS        4.3     |         ✔                   ✔               ✔                        ✖                            ✖                       ✖                   ½
    Opera      11.505  |         ✖                   ✔               ✔                        ✖                            ✖                       ✔                   ½
    Safari     5.0.5   |         ✔                   ✔               ✔                        ✖                            ✖                       ✖                   ½

Run Tests Online
----------------

Open [http://mwbrooks.github.com/mutation-event-tests](http://mwbrooks.github.com/mutation-event-tests).

Run Tests Yourself
------------------

Clone the repository:

    git clone git://github.com/mwbrooks/mutation-event-tests.git

Update the submodules:

    git submodule init
    git submodule update

Open `index.html` in a browser:

    # OS X
    open -a "Safari" index.html
    open -a "FireFox" index.html
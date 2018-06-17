export function addListenerMulti(element, eventNames, listener) {
    var events = eventNames.split(' ');
    for (var i = 0, iLen = events.length; i < iLen; i++) {
        element.addEventListener(events[i], listener, false);
    }
}

export function addSameListenerToMulti(elements, eventName, listener) {
    for (var i = 0, iLen = elements.length; i < iLen; i++) {
        elements[i].addEventListener(eventName, listener, false);
    }
}

export function appendClass(element, className) {
    element.className += ' ' + className;
}

export function removeClass(element, className) {
    let classes = element.className.split(' ');
    classes.splice(classes.indexOf(className), 1);
    element.className = classes.join(' ');
}
window.getOffset = function (el) {
    return [el.offsetLeft, el.offsetTop];
};

window.getOffsetWithSize = function (el) {
    return [el.offsetLeft, el.offsetTop, el.offsetWidth, el.offsetHeight];
}
module.exports = function reverse(n) {
    n = String(n).split("").reverse();
    return +n.join("");
}

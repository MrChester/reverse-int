module.exports = function reverse(n) {
    n = String(Math.abs(n)).split("").reverse();
    return +n.join("");
}

module.exports = function reverse (num) {
    const res = String(Math.abs(num));
    return +res.split('').reverse().join('');
}

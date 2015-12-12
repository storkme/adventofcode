//part1
(function f(o) {
    return Object.keys(o).reduce((a, n)=>a + (Number.isInteger(o[n]) ? o[n] : (typeof o == 'object' ? f(o[n]) : 0)), 0)
})(JSON.parse(document.body.innerText))

//part2
(function f(o) {
    if (!Array.isArray(o) && Object.keys(o).map(k=>o[k]).indexOf('red') >= 0) return 0
    return Object.keys(o).reduce((a, n)=>a + (Number.isInteger(o[n]) ? o[n] : (typeof o == 'object' ? f(o[n]) : 0)), 0)
})(JSON.parse(document.body.innerText))
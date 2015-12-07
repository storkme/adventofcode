/**
 * Created by stork on 07/12/2015.
 */
//part 1
(function e(c, s) {
    var i = parseInt(s);
    if (Array.isArray(s)) {
        return {
            L: (a, b) => a << b,
            R: (a, b) => a >> b,
            AND: (a, b) => a & b,
            OR: (a, b) => a | b,
            NOT: (a) => ~a
        }[s[0]](e(c, s[1]), s[2] ? e(c, s[2]) : null);
    } else if (i || i === 0) {
        return i;
    } else if (typeof s === 'string') {
        return c[s] = e(c, c[s]);
    }
})(document.body.innerText.trim().split("\n")
    .map(s => [
            ['([a-z]+) ([LR])SHIFT ([0-9]+) -> ([a-z]+)', m => [m[4], [m[2], m[1], m[3]]]],
            ['([a-z0-9]+) (AND|OR) ([a-z]+) -> ([a-z]+)', m => [m[4], [m[2], m[1], m[3]]]],
            ['NOT ([a-z]+) -> ([a-z]+)', m => [m[2], ['NOT', m[1]]]],
            ['^([a-z0-9]+) -> ([a-z]+)', m => [m[2], m[1]]],
            //enable part 2
            //['^[0-9]+ -> b$', m => ['b', 956]]
        ]
        .reduce((p, n, m) => (m = s.match(new RegExp(n[0]))) && m ? n[1](m) : p, 0)
    ).reduce((a, n) => (a[n[0]] = n[1]) && a, {}), 'a');
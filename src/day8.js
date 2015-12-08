//p1 easy way
document.body.innerText.trim().split('\n').reduce((a, s)=>[a[0] + s.length, a[1] + eval(s + '.length')], [0, 0]);

//p1 hard way..
document.body.innerText.trim().split("\n")
    .map(s => [s.length, [[/\\\\/g, -1], [/\\"/g, -1], [/\\x[0-9a-f]{2}/ig, -3]]
        .reduce((a, n)=>[a[0] + (a[1].match(n[0]) ? a[1].match(n[0]).length * n[1] : 0), a[1].replace(n[0], '_')], [s.length - 2, s])[0]])
    .reduce((a, n) => [a[0] + n[0], a[1] + n[1]], [0, 0]);

//part 2
document.body.innerText.trim().split("\n")
    .map(s => [s.length, [[/\\\\/g, 2], [/\\"/g, 2], [/\\x[0-9a-f]{2}/ig, 1]]
        .reduce((a, n)=>[a[0] + (a[1].match(n[0]) ? a[1].match(n[0]).length * n[1] : 0), a[1].replace(n[0], '_')], [s.length + 4, s])[0]])
    .reduce((a, n) => [a[0] + n[0], a[1] + n[1]], [0, 0]);
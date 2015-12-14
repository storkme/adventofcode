//p1
(i=>document.body.innerText.trim().split('\n')
    .map(s=>s.match(/(.+) can fly (\d+) km\/s for (\d+) seconds, but then must rest for (\d+) seconds./).slice(1))
    .map(n=>[n[0], parseInt(n[1]), parseInt(n[2]), parseInt(n[3])])
    .map(n=>(Math.floor(i / (n[2] + n[3])) * n[1] * n[2]) + (Math.min(i % (n[2] + n[3]), n[2]) * n[1])))(2503)

//p2
((a, i)=> {
    var r = a.map(n=>0);
    for (var j = 1; j <= i; j++) {
        var s = a.map(n=>(Math.floor(j / (n[2] + n[3])) * n[1] * n[2]) + (Math.min(j % (n[2] + n[3]), n[2]) * n[1]))
        var m = Math.max.apply(null, s)
        r = s.map((n, k)=>r[k] + (((n - m) >= 0) ? 1 : 0))
    }
    return r
})(document.body.innerText.trim().split('\n')
    .map(s=>s.match(/(.+) can fly (\d+) km\/s for (\d+) seconds, but then must rest for (\d+) seconds./).slice(1))
    .map(n=>[n[0], parseInt(n[1]), parseInt(n[2]), parseInt(n[3])]),
    2503)
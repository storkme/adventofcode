var g = document.body.innerText.trim().split('\n')
    .map(s=>s.match(/(.+) to (.+) = (.+)/).slice(1))
    .map(n=>[[n[0], n[1], parseInt(n[2])], [n[1], n[0], parseInt(n[2])]])
    .reduce((a, b)=>a.concat(b), [])
    .reduce((a, n)=>(a[n[0]] = a[n[0]] ? ((a[n[0]][n[1]] = n[2]) && a[n[0]]) : {[n[1]]: n[2]}) && a, {})

//part 1
Math.min.apply(null,(function r(g,s,d) {
    var p = s[s.length-1]
    var m=Object.keys(g).filter(n=>!~s.indexOf(n))
    return (m.length==0)?[d]:m.map(n=>Math.min.apply(null,r(g, s.concat([n]), d + (g[n][p] || 0))))
})(g,[],0))

//part 2
Math.max.apply(null,(function r(g,s,d) {
    var p = s[s.length-1]
    var m=Object.keys(g).filter(n=>!~s.indexOf(n))
    return (m.length==0)?[d]:m.map(n=>Math.max.apply(null,r(g, s.concat([n]), d + (g[n][p] || 0))))
})(g,[],0))


//wrote all this dijkstra code and realised i didn't need it :D

//function d(g, s, e) {
//    var q = new Set(Object.keys(g))
//    var d = Object.keys(g).reduce((a, n)=>(a[n] = 1e9) && a, {})
//    var p = {}
//    d[s] = 0
//    while (q.size > 0) {
//        var u = Array.from(q).map(n=>[n, d[n]]).sort((a, b)=>a[1] - b[1])[0][0];
//        q.delete(u);
//        if (d[u] == 1e9 || u == e)
//            break
//        Object.keys(g[u]).forEach(n=> {
//            var a = d[u] + (g[u][n] || g[n][u])
//            if (a < d[n]) {
//                d[n] = a
//                p[n] = u
//            }
//        })
//    }
//    for (var i = 0, u = e; p[u]; i++) {
//        u = p[u]
//    }
//    return i === Object.keys(g).length-1
//}
//var k = Object.keys(g)
//for (var i = 0; i < k.length; i++)
//    for (var j = 0; j < k.length; j++)
//        if(i!==j)console.log('from '+k[i]+' to '+k[j] +' = '+d(g,k[i],k[j]))

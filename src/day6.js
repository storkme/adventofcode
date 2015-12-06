//part 1
document.body.innerText.trim().split('\n')
    .map(s=>s.match(/(.*?) (\d+),(\d+) through (\d+),(\d+)/))
    .map(n=>[n[1], parseInt(n[2]), parseInt(n[3]), parseInt(n[4]), parseInt(n[5])])
    .reduce((a, n) => {
        for (var x = n[1]; x <= n[3]; x++)
            for (var y = n[2]; y <= n[4]; y++)
                ({
                    'turn on': (a, x, y)=>a[x * 1000 + y] = true,
                    'turn off': (a, x, y)=>a[x * 1000 + y] = false,
                    'toggle': (a, x, y)=>a[x * 1000 + y] = !a[x * 1000 + y]
                })[n[0]](a, x, y)
        return a;
    }, new Array(1000000).fill(false))
    .reduce((a, n) => a + (n ? 1 : 0), 0);

//part 2
document.body.innerText.trim().split('\n')
    .map(s=>s.match(/(.*?) (\d+),(\d+) through (\d+),(\d+)/))
    .map(n=>[n[1], parseInt(n[2]), parseInt(n[3]), parseInt(n[4]), parseInt(n[5])])
    .reduce((a, n) => {
        for (var x = n[1]; x <= n[3]; x++)
            for (var y = n[2]; y <= n[4]; y++)
                ({
                    'turn on': (a, x, y)=>a[x * 1000 + y] = a[x * 1000 + y] + 1,
                    'turn off': (a, x, y)=>a[x * 1000 + y] = a[x * 1000 + y] == 0 ? 0 : a[x * 1000 + y] - 1,
                    'toggle': (a, x, y)=>a[x * 1000 + y] = a[x * 1000 + y] + 2
                })[n[0]](a, x, y)
        return a;
    }, new Array(1000000).fill(0))
    .reduce((a, n) => a + n, 0);
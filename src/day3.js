// first part
var m = {v: [0, -1], '>': [1, 0], '^': [0, 1], '<': [-1, 0]};
document.body.innerText.split("").reduce((a, n)=>a.concat([[a[a.length - 1][0] + m[n][0], a[a.length - 1][1] + m[n][1]]]), [[0, 0]]).map(n=>(n[0] << 8) | n[1] & 0xff).reduce((a, n)=>a.add(n), new Set()).size

// second part
var m = {v: [0, -1], '>': [1, 0], '^': [0, 1], '<': [-1, 0]};
document.body.innerText.split('').reduce((a, n)=>a.concat([[a[a.length - 2][0] + m[n][0], a[a.length - 2][1] + m[n][1]]]), [[0, 0], [0, 0]]).map(n=>((n[0] << 16) | n[1] & 0xffff)).reduce((s, n)=>s.add(n), new Set()).size
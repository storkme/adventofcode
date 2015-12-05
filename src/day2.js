// second part
document.body.innerText.trim().split("\n").map(t=>t.split("x").map(t=>parseInt(t)).sort((a, b)=>a - b)).reduce((a, n)=>a + n[0] * 2 + n[1] * 2 + n[0] * n[1] * n[2], 0)
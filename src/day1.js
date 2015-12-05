//part1

document.body.innerText.trim().split('').reduce((a,n)=>a+(n=='('?1:-1),0)

//part2
//messy, just take the first result it prints
document.body.innerText.trim().split('').reduce((a,n,i)=>{if(a==-1){console.log(i)};return a+(n=='('?1:-1)},0)
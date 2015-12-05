//both parts, load the md5 script
var s=document.createElement('script');s.src='https://blueimp.github.io/JavaScript-MD5/js/md5.js';s.type='text/javascript';document.body.appendChild(s);

// part1
for(var i=0,s='';s.substring(0,5)!=='00000';i++)s=md5(document.body.innerText.trim()+i.toString());console.log(i-1);

//part2
for(var i=0,s='';s.substring(0,6)!=='000000';i++)s=md5(document.body.innerText.trim()+i.toString());console.log(i-1);
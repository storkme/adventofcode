//p1
document.body.innerText.trim().split("\n").filter(e=>e.match(/[aeiou].*[aeiou].*[aeiou]/)).filter(s=>{for(var i=1;i<s.length;i++){if(s[i]==s[i-1])return true}}).filter(s=>!s.match(/ab|cd|pq|xy/))

//p2
document.body.innerText.trim().split('\n').filter(s=>{for(var i=0;i<s.length;i++){for(var j=i+2;j<s.length;j++){if(s[i]==s[j]&&s[i+1]==s[j+1]){return true}}}}).filter(s=>{for(var i=0;i<s.length;i++){if(s[i]==s[i+2])return true}}).length
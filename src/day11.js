var f=(s=> {
    while (1) {
        for (var i = s.length - 1; i >= 0; i--) {
            var c = s.charCodeAt(i) < 122;
            s = s.substring(0, i) + (c ? String.fromCharCode(s.charCodeAt(i) + 1) : 'a') + s.substring(i + 1)
            if (c)break
        }
        if ([s=> {
                for (var i = 2; s[i]; i++)if (s.charCodeAt(i) == s.charCodeAt(i - 1) + 1 && s.charCodeAt(i) == s.charCodeAt(i - 2) + 2)return true
            },
                s=>!s.match(/iol/),
                s=> {
                    for (var i = 1; s[i]; i++)if (s[i] == s[i - 1])for (var j = i; s[j]; j++)if (s[j] == s[j - 1] && s[j] != s[i])return true
                }].reduce((a, b)=>b(s) && a, 1))return s
    }
})

//p1
f("vzbxkghb")

//p2, same function but with output from the last function
f("vzbxxyzz")
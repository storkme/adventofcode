//part 1 un golfed
(function f (s,k) {
    for (var r='',i=1,j=1;i<=s.length;i++) {
        if (s[i] == s[i - 1]) {
            j++
        } else {
            r += j + s[i - 1]
            j = 1
        }
    }
    return k==0?r.length:f(r,k-1);
})("1321131112",39)

//part 2 un golfed
(function f (s,k) {
    for (var r='',i=1,j=1;i<=s.length;i++) {
        if (s[i] == s[i - 1]) {
            j++
        } else {
            r += j + s[i - 1]
            j = 1
        }
    }
    return k==0?r.length:f(r,k-1);
})("1321131112",49)
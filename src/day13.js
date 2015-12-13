/**
 * Build our input data. Turn the document text into a graph g represented by Object<,Object<,Integer>>, where the integer
 * is the happiness score.
 * @type {Object}
 */
var g = document.body.innerText.trim().split('\n')
    .map(s=>s.match(/(.+) would (gain|lose) (\d+) happiness units by sitting next to (.+)./).slice(1))
    .map(n=>[n[0],n[3],(n[1]=='gain'?1:-1)*n[2]])
    .reduce((a, n)=>(a[n[0]] = a[n[0]] ? ((a[n[0]][n[1]] = n[2]) && a[n[0]]) : {[n[1]]: n[2]}) && a, {})

/**
 * **Comment out this line for part 1 answer only**
 *
 * Modify our input graph g to add in a new fully connected node, 'Moi', with a happiness score of 0
 */
g=((g,s)=>Object.keys(g).reduce((a,k)=>{a[k][s]=0;a[s]?a[s][k]=0:(a[s]={[k]:0});return a},g))(g, 'Moi')

/**
 * Recursively reduce down the input, applying Math.max to get the highest value at each step.
 */
Math.max.apply(null,(function r(g,s,d) {
    var p = s[s.length-1]
    var m=Object.keys(g).filter(n=>!~s.indexOf(n))
    return (m.length==0)?[d+(g[p][s[0]])+(g[s[0]][p])]:m.map(n=>Math.max.apply(null,r(g, s.concat([n]), d + (p?(g[n][p] + g[p][n]):0))))
})(g,[],0))

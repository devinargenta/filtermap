## filtermap

adds .filterMap  to ur array prototype even tho u shouldnt /shrug


`[1,2,3,4].filterMap(callback, conditional, leading)`

leading decides if the conditional should run before or after the callback
true by default

ex: 

```
import 'filtermap'

let x = [1,2,3].filterMap((item) => item * 10, (item) => item >= 2)

console.log(x)
// [4, 6]

let y = [1,2,3].filterMap((item) => item * 10, (item) => item >= 20, false)

console.log(y)
// [20, 30]


```

import '@/test.js'
import "util/demo"

const msg = 'hello world'

console.log(msg)
console.log(msg + '!')

const fn = () => {
    console.log('hello')
}
fn()


//通过definePlugin注入的变量
console.log(coderli)

console.log(process.env.NODE_ENV)
console.log("abcdde")
// if (module.hot) {
//     module.hot.accept("./index.js")
// }
if (module.hot) {
    module.hot.accept("./src/utils/demo.js")
}


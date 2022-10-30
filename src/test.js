import "./css/test1.css"
import "./css/test.less"
//引入图片模块
import zznhImage from "./img/zznh.png"

//div 元素
const divEle = document.createElement("div")
divEle.textContent = "hello world"
divEle.classList.add("box1")
document.body.append(divEle)

//h2元素
const h2Ele = document.createElement("h2")
h2Ele.textContent = "This is a title use less"
h2Ele.classList.add("title")
document.body.append(h2Ele)

//img元素
const imgEl = document.createElement("img")
imgEl.src = zznhImage
document.body.append(imgEl)

//div设置背景图片
const divEl2 = document.createElement("div")
divEl2.classList.add("img-bg")
document.body.append(divEl2)

import output, {renderOutput} from "./output.js";
import {DIRECTION_ABA} from "../env/const.js";


const block = document.body.querySelector(".tickets")

const input = block.querySelector("#num")
const btn = block.getElementsByTagName("button")[0]


btn.addEventListener("click", e=>{

  output.innerHTML = ""

  if(!STATE.direction ||
    !STATE.time ||
    ((STATE.direction === DIRECTION_ABA) && !STATE.time2) ||
    input.value.length === 0 ||
    +input.value < 1
  )
    return


  STATE.num = Math.floor(+input.value)
  renderOutput()
  console.log({STATE})
})
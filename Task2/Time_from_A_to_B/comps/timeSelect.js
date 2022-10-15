import {DIRECTION_AB, DIRECTION_ABA, DIRECTION_BA, GMT, TIMETABLE_AB, TIMETABLE_BA} from "../env/const.js";
import {STATE} from "../env/state.js";
import {renderTimeBackSelect} from "./timeBackSelect.js";
import {getHHMMSSFromDate} from "../env/utils.js";


const timeSelect = document.body.querySelector("#time")

timeSelect.addEventListener("change", e=>{
  STATE.time = e.target.value
  renderTimeBackSelect()
  console.log({STATE})
})

export function renderTimeSelect(){

  timeSelect.innerHTML = ""

  let times = []
  if(STATE.direction === DIRECTION_AB || STATE.direction === DIRECTION_ABA)
    times = TIMETABLE_AB
  else if(STATE.direction === DIRECTION_BA)
    times = TIMETABLE_BA


  times.forEach(time=>{
    const date = new Date(time.replace(" ","T")+GMT)

    const option = document.createElement("option")
    const description = STATE.direction!==DIRECTION_ABA ? STATE.direction : DIRECTION_AB

    option.value = date.toString()
    option.innerHTML = `${getHHMMSSFromDate(date)}(${description})`
    timeSelect.append(option)
  })

  timeSelect.innerHTML += `
   <option value="" selected disabled hidden>Choose here</option>
  `

}

export default timeSelect
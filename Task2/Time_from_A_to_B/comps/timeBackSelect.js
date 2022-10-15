import {DIRECTION_ABA, DIRECTION_BA, GMT, TIMETABLE_BA, TRAVEL_TIME} from "../env/const.js";
import {STATE} from "../env/state.js";
import {getHHMMSSFromDate} from "../env/utils.js";


const timeBackSelect = document.body.querySelector("#time2")

timeBackSelect.addEventListener("change", e=>{
  STATE.time2 = e.target.value
  console.log({STATE})
})

export function renderTimeBackSelect(){

  timeBackSelect.innerHTML = ""

  const goBack = document.body.querySelector(".goBack")
  if(STATE.direction === DIRECTION_ABA) {
    goBack.style.cssText = "display:block"
  }else{
    goBack.style.cssText = ""
    return
  }

  if(STATE.time === null){
    timeBackSelect.disabled = true
    return;
  }else{
    timeBackSelect.disabled = false
  }

  let times = TIMETABLE_BA


  times.forEach(time=>{
    const date = new Date(time.replace(" ","T")+GMT)

    if(!STATE.time || +Date.parse(STATE.time)+TRAVEL_TIME>+date)
      return
    const option = document.createElement("option")
    const description = DIRECTION_BA

    option.value = date.toString()
    option.innerHTML = `${getHHMMSSFromDate(date)}(${description})`
    timeBackSelect.append(option)
  })

  timeBackSelect.innerHTML += `
   <option value="" selected disabled hidden>Choose here</option>
  `

}

export default timeBackSelect
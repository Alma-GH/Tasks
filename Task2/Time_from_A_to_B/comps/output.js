import {COST_AB, COST_ABA, DIRECTION_AB, DIRECTION_ABA, DIRECTION_BA, TRAVEL_TIME} from "../env/const.js";
import {getHHMMFromDate} from "../env/utils.js";


const output = document.body.querySelector(".output")

export function renderOutput(){

  const startDate = new Date(STATE.time)
  const finishDate = new Date(+startDate + TRAVEL_TIME)
  const startTime = getHHMMFromDate(startDate)
  const finishTime = getHHMMFromDate(finishDate)

  let realFinishDate = finishDate

  let [startDateReturn, startTimeReturn,
    finishTimeReturn,finishDateReturn] = [null,null,null,null]
  if(STATE.time2){
    startDateReturn = new Date(STATE.time2)
    finishDateReturn = new Date(+startDateReturn + TRAVEL_TIME)
    startTimeReturn = getHHMMFromDate(startDateReturn)
    finishTimeReturn = getHHMMFromDate(finishDateReturn)

    realFinishDate = finishDateReturn
  }

  const realFinishTime = Math.floor(new Date(realFinishDate - startDate)/(1000*60))


  const map = {
    [DIRECTION_AB]: COST_AB,
    [DIRECTION_BA]: COST_AB,
    [DIRECTION_ABA]: COST_ABA,
  }
  const total = map[STATE.direction] * STATE.num


  output.style.cssText = "display:block"
  output.innerHTML = `
      Вы выбрали <span class="num_tickets">${STATE.num}</span> билета
      по маршруту <span class="route">"${STATE.direction}"</span>
      на общую стоимость <span class="cost">${total}р</span>.
      Это путешествие займет у вас <span class="time">${realFinishTime} минут</span>.
      <br/>
      <br/>
      1)Теплоход отправляется в <span class="time_start">${startTime}</span>,
      а прибудет в <span class="time_finish">${finishTime}</span>.
  `
  if(STATE.time2){
    output.innerHTML += `
        <br/>
        <br/>
        2)Теплоход отправляется в <span class="time_start">${startTimeReturn}</span>,
        а прибудет в <span class="time_finish">${finishTimeReturn}</span>.
    `
  }


}


export default output
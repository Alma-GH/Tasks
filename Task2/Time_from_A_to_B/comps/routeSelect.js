import {DIRECTIONS} from "../env/const.js";
import {STATE} from "../env/state.js";
import {renderTimeSelect} from "./timeSelect.js";
import {renderTimeBackSelect} from "./timeBackSelect.js";

const routeSelect = document.body.querySelector("#route")

routeSelect.addEventListener("change", e=>{

  Object.keys(STATE).forEach(key=>STATE[key]=null)

  STATE.direction = e.target.value
  renderTimeSelect()
  renderTimeBackSelect()
  console.log({STATE})
})

export function renderRouteSelect(){
  DIRECTIONS.forEach(direction=>{
    const option = document.createElement("option")
    option.value = direction
    option.innerHTML = direction
    routeSelect.append(option)
  })

  routeSelect.innerHTML += `
   <option value="" selected disabled hidden>Choose here</option>
  `
}

export default routeSelect
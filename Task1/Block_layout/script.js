
const MAX_CHILDREN = 4
const lists = document.querySelectorAll(".flights")

for (const list of lists) {

  const len = list.children.length

  if(len>MAX_CHILDREN){
    //**delete redundant**
    const removeLI = []
    for (let i = 0; i < len; i++) {
      //-1 for add button
      if(i>=MAX_CHILDREN-1)
        removeLI.push(list.children[i])
    }
    removeLI.forEach(el=>el.remove())

    //**create and add button**
    const moreBtn = document.createElement("li")
    moreBtn.innerHTML = "ещё..."
    moreBtn.classList.add("moreBtn")
    moreBtn.addEventListener("click", e=>{
      const ul = document.querySelector(".flights_more")
      const ticket = Array.from(document.querySelectorAll(".ticket_tour"))
        .find(ticket=>ticket.contains(moreBtn))
      ul.innerHTML = ""
      ul.style.cssText = `
        top: ${ticket.offsetTop+moreBtn.offsetTop+moreBtn.clientHeight+10}px;
        left: ${moreBtn.getBoundingClientRect().left}px;
      `
      removeLI.forEach(el=>ul.append(el))
      ul.classList.toggle("vis")
    })
    list.append(moreBtn)
  }

}


window.addEventListener("click", e=>{
  const ul = document.querySelector(".flights_more")

  if(!e.target.classList.contains("moreBtn") && !ul.contains(e.target)){
    ul.classList.remove("vis")
  }
})



export function getHHMMFromDate(date){
  const hours = date.getHours().toString()
  const mins = date.getMinutes().toString()

  return `${hours.length===1?0:""}${hours}-${mins.length===1?0:""}${mins}`
}

export function getHHMMSSFromDate(date){
  const hours = date.getHours().toString()
  const mins = date.getMinutes().toString()
  const secs = date.getSeconds().toString()

  return `${hours.length===1?0:""}${hours}:${mins.length===1?0:""}${mins}:${secs.length===1?0:""}${secs}`
}
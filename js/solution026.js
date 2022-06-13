// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.
function past(h, m, s){
    let sec = s * 1000
    let min = m * 60000
    let hour = h * 3600000
    return sec + min + hour
}
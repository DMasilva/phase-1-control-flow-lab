
function scuberGreetingForFeet(feet){
  if(feet>2500){
    return "No can do."
  }if(feet <= 400){
    return 'This one is on me!'
} else if(feet=2001){
  return 'I will gladly take your thirty bucks.'
}
}
  








function ternaryCheckCity(city){
  //  if(city==="NYC"){
  //  return "Ok, sounds good."
  //  }else {
  //   return "No go."
  //  }
  return city==="NYC"? "Ok, sounds good." : "No go."
}


function switchOnCharmFromTip(tip){
  switch(tip){
    case "generous" : 
    return 'Thank you so much.'
    case 'not as generous' :
    return 'Thank you.'
    default :
    return "Bye."
  }
}



function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance <= 400) {
    return 'This one is on me!';
  } if (distance < 2501) {
    return "I will gladly take your thirty bucks.";
  } else {
    return 'No can do.';
  }
    
}

function ternaryCheckCity(city){
  // Write your code here!
  if (city === 'NYC') {
    return 'Ok, sounds good.';
  } else {
    return 'No go.';
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if (tip === "generous") {
    return 'Thank you so much.';
  } if (tip === "not as generous") {
    return 'Thank you.'
  } else {
    return "Bye."
  } 
}
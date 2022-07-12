function scuberGreetingForFeet(distance){
  if (distance <= 400) {
    return 'This one is on me!'
  } else if (distance < 2000) {
      return 'That will be twenty bucks.'
  } else if (distance < 2500) {
    return 'I will gladly take your thirty bucks.'
  } else if (distance > 2500) {
    return 'No can do.'
  }
}

function ternaryCheckCity(destination) {

return destination === "NYC" ? ("Ok, sounds good.") : ("No go.")
}

function switchOnCharmFromTip(){
  // Write your code here!
  const expr = 'generous.'
  switch (expr) {
    case 'generous':
      return ('Thank you so much.');
      break;
    case 'not as generous':
      return ('Thank you.');
      break;
      default:
      return ('Bye.');
  }
  
  }

// const expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }

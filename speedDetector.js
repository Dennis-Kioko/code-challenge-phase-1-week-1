// create a function that checks speed limit

const speedLimit = 70;
const everyKmCovered = 5;

const calculateSpeed = function (speed) {
  // calculate demerit points above 70km/hr
  let demeritPoints = Math.floor((speed - speedLimit) /5);

  if (speed >= 0 && speed < 70) {
    return "OK";

  } else if (speed >= 70 && speed <= 130) {
    return `Points:${demeritPoints}`;
    
  } else if (speed > 130) {
    return "License Suspended";
  }
  
};

//console.log(calculateSpeed(140));
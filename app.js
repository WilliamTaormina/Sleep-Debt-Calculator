const getSleepHours = hours => {
  switch (hours) {
    case "Monday":
      return 7.5;
      break;
    case "Tuesday":
      return 8;
      break;
    case "Wednesday":
      return 6.5;
      break;
    case "Thursday":
      return 4.8;
      break;
    case "Friday":
      return 9.5;
      break;
    case "Saturday":
      return 9;
      break;
    case "Sunday":
      return 5;
      break;
  }
};

const getActualSleepHours = () => {
  let actualSleepHours =
    getSleepHours("Monday") +
    getSleepHours("Tuesday") +
    getSleepHours("Wednesday") +
    getSleepHours("Thursday") +
    getSleepHours("Friday") +
    getSleepHours("Saturday") +
    getSleepHours("Sunday");
  return actualSleepHours;
};

console.log(`Actual weekly sleep hours: ${getActualSleepHours()}`);

const getIdealSleepHours = () => {
  let idealHours = 4;
  return idealHours * 7;
};
console.log(`Required weekly sleep hours: ${getIdealSleepHours()} `);

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealHours = getIdealSleepHours();
  if (actualSleepHours === idealHours) {
    console.log("You got the perfect amount of sleep.");
  } else if (actualSleepHours > idealHours) {
    console.log(
      `You got more sleep than you needed by ${Math.floor(
        actualSleepHours - idealHours
      )} hours`
    );
  } else {
    console.log(
      `You got less sleep than you needed by ${Math.floor(
        idealHours - actualSleepHours
      )} hours. You should get some rest`
    );
  }
};
calculateSleepDebt();

/*object for each store, 6 in total.
each store has hours list. Each hour has assigned pizza number within predefined range limit.
drivers needed per store = number of pizzas sold in time window divided by modulo 3, rounding up for 1 or 2 additional pizzas.
each location stores pizzas sold per hour as a property
each location stores pizzas sold per day as a property of pizzas for all operating hours.
total inventory is an object with values adding daily total pizzas and employees needed for all locations.
Greeting line on public facing page pulls number of pizzas from total inventory object.*/

var ballard = {
hours: 5,
pizzasSoldHour: 7,
pizzasSoldDay: 63,
openHours: ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12am", "1am", "2am"],
};

var firstHill = {
  hours: 5,
  pizzasSoldHour: 7,
  pizzasSoldDay: 65,
  openHours: ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12am", "1am", "2am"],
};

var internationalDist = {
  hours: 5,
  pizzasSoldHour: 7,
  pizzasSoldDay: 65,
  openHours: ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12am", "1am", "2am"],
};

var southLakeUnion = {
  hours: 5,
  pizzasSoldHour: 7,
  pizzasSoldDay: 65,
  openHours: ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12am", "1am", "2am"],
};

var georgeTown = {
  hours: 5,
  pizzasSoldHour: 7,
  pizzasSoldDay: 65,
  openHours: ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12am", "1am", "2am"],
};

var ravenna = {
  hours: 5,
  pizzasSoldHour: 7,
  pizzasSoldDay: 65,
  openHours: ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12am", "1am", "2am"],
};

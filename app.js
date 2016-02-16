/*object for each store, 6 in total.
each store has hours list. Each hour has assigned pizza number within predefined range limit.
drivers needed per store = number of pizzas sold in time window divided by modulo 3, rounding up for 1 or 2 additional pizzas.
each location stores pizzas sold per hour as a property
each location stores pizzas sold per day as a property of pizzas for all operating hours.
total inventory is an object with values adding daily total pizzas and employees needed for all locations.
Greeting line on public facing page pulls number of pizzas from total inventory object.*/

var inventory = {
hours: [08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 00, 01, 02],
locations:[ballard]
};

var ballard = {
hours:[],
pizzasSoldHour:,
pizzasSoldDay:,
};

var firstHill = {

hours[],
};

var iD = {
hours[],
};

var sLU = {
hours[],
};

var georgeTown = {
hours[],
};

var ravenna = {
hours[],
};

/* Write a script that can generate random addresses
As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name and zip code
Your script should randomly select one item from each of these arrays and then use them to construct a random address
Each time you run the script, it should print a new randomly-generated address to the terminal. For example:
node random-address.js
=> 34578 Dolphin Street, Wonka NY, 44506
*/

var streetNumber = [194, 126, 275, 428, 399];
var streetName = ['Bates Place', 'Forsythe Way', 'Hood Way', 'Salinger Lane', 'Huxley Drive'];
var cityName = ['Las Vegas', 'Scottsdale', 'Sacramento', 'Los Angeles', 'San Diego'];
var stateName = ['CA', 'AZ', 'NV', 'WA', 'UT'];
var zipCode = [90012, 12488, 92841, 74322, 55528];

var random1 = Math.floor((Math.random() * streetNumber.length));
var random2 = Math.floor((Math.random() * streetName.length));
var random3 = Math.floor((Math.random() * cityName.length));
var random4 = Math.floor((Math.random() * stateName.length));
var random5 = Math.floor((Math.random() * zipCode.length));

console.log(streetNumber[random1] + ' ' + streetName[random2] + ',' + ' ' +  cityName[random3] + ' ' + stateName[random4] + ',' + ' ' +  zipCode[random5]);

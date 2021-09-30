/*
Basic
Based on the following two Objects definitions:

var sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`;
var fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;

print the following message within the browser: My favorite sandwich is a Hamburger which has approximately 260 calories, along with it I enjoy eating Large French Fries which have about 570 calories. 
 */

var sandwiches = `{"sandwich": "hamburger", "calories": "260"}`;
var fries = `{"fries_size": "Large French Fries", "calories": "570"}`;

var sandwichesParsed = JSON.parse(sandwiches);
var friesParsed = JSON.parse(fries);
var output = document.getElementById("demo");

output.innerHTML += `My favorite sandwich is a ${sandwichesParsed.sandwich} which has approximately ${sandwichesParsed.calories} calories, along with it I enjoy eating ${friesParsed.fries_size} which have about ${friesParsed.calories} calories.`;

/* 
// Intermediate
Create a JSON file which contains the following details per employee:

Unique ID
First Name
Last Name
Email address
Job Title
Salary

Fill the JSON file with meaningful data for 10 Employees. Print each employee's details in a table which will look representative and easily readable for the management team.
*/

var employeeParsed = JSON.parse(employee);
var output = document.getElementById("demo");

for (let item of employeeParsed) {

  console.log(item);
    output.innerHTML += `<tr>
        <td>${item.ID}</td>
        <td>${item.firstName}</td>
        <td>${item.lastName}</td>
        <td>${item.email}</td>
        <td>${item.jobTitle}</td>
        <td>${item.salary}</td>
        </tr>`;
}

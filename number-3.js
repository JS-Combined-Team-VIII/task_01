/*3. Create a simple user profile card generator

Create multiple variables and display a formatted block:

Example:

Name: Solex
Age: 34
Country: Nigeria
Hobby: Coding 
*/


let profileName;
let profileAge;
let profileCountry;
let profileHobby;

profileName = "Vincent";
profileAge = 100;
profileCountry = "Russia"
profileHobby = "Coding"

let profileCard = `
Name: ${profileName}
Age: ${profileAge}
Country: ${profileCountry}
Hobby: ${profileHobby}
`

console.log(profileCard)
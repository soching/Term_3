// 1- Run this main.js :
// ==> why we have the error : Error: Cannot find module 'axios'
//because it doesn't install package

// 2- Check the package.json :   how many dependancies do you see ?
// I see only one

// 3- Run  : npm install		to install all dependancies
// already

// 4 - Check now the node_modules contains the axios dependancy
//it has a lot off files

// 5 - Run the program again :
// ==> check it work

const axios = require("axios");

let url = "http://www.omdbapi.com/?apikey=fab8d88e&s=jedi";

axios.get(url).then((response) => {
  console.log(response.data);
});

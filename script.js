// HTTP requests GET, POST, PUT, DELETE
//const axios = require("axios");

const getData = () => {};

(function () {
  var queryURL =
    "https://www.omdbapi.com/?t=space+jam&y=&plot=short&apikey=trilogy";
  // Make a request for a user with a given ID
  axios
    .get(queryURL)
    .then(function (response) {
      // handle success
      console.log(response);
      document.getElementById("title").innerHTML = response.data.Title;
      const ratings = response.data.Ratings;
      ratings.forEach((input) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${input.Source} ${input.Value}`;
        document.getElementById("ratingsList").appendChild(listItem);
      });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
})();

// const add = function (x) {
//   // get the count from the DOM
//   const currentValue = Number(document.getElementById("number").innerHTML);
//   // add 2 to it
//   const newValue = currentValue + x;

//   // run a check to see it its over 20

//   if (newValue > 20) {
//     document.body.style.background = "red";
//     document.getElementById("reset").style.display = "block";
//   }
//   // no need to make it a string
//   document.getElementById("number").innerHTML = newValue;
// };

// const minus = () => {
//   // get the count from the DOM
//   const currentValue = Number(document.getElementById("number").innerHTML);
//   // add 2 to it
//   const newValue = currentValue - 1;

//   // no need to make it a string
//   document.getElementById("number").innerHTML = newValue;
// };

// const reset = () => {
//   document.getElementById("number").innerHTML = 0;
//   document.body.style.background = "white";
//   document.getElementById("reset").style.display = "none";
// };

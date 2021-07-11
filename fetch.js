fetch("https://tutorial2.p.rapidapi.com123/", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "tutorial2.p.rapidapi.com",
  },
})
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error(err);
  });

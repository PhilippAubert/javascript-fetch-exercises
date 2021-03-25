console.clear;

const url = `https://.typicode.com/todos/x`;

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.toString());
  });

console.clear;

const url = `https://jsonplaceholder.typicode.com/todos/x`;

const promise = fetch(url);

fetch(url).then((response) => {
  if (response.ok) {
    console.log(response);
  } else {
    console.log("404 not found");
  }
});

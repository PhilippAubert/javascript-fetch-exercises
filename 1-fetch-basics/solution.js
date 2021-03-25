console.clear;

const url = "https://jsonplaceholder.typicode.com/todos";

const promise = fetch(url);

fetch(url).then((response) => {
  if (response.ok) {
    console.log(response);
  } else {
    console.log("Error");
  }
});

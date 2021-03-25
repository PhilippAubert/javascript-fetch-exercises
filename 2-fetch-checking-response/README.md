# Exercise 2: Fetch Checking Response

Using the `fetch` function, make a request to the endpoint `https://jsonplaceholder.typicode.com/todos/x`.
This endpoint is trying to fetch the `todo`with the id `x`, which is probably not existing.
Check the response to see if it's okay. In the case the response is not okay, console.log the response status.

## Tips

```js
// the parameter given to the callback function
// inside the "then" method is the response.
// Check the linked resources to see what data the Response object contains
fetch(url).then((response) => {
  console.log(response); //<- This logs the response
});
```

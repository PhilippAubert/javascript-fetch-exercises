# Exercise 4: Using the data

Using the `fetch` function, make a request to the endpoint `https://randomuser.me/api/?inc=gender,name,picture&results=10` to get to random users.

Make a function to create an HTMLElement following this template. The function has 1 parameter `person` that represents a person coming from the API.

```html
<section class="person">
  <h2>Person Name</h2>
  <img src="url-to-person-picture" alt="Person Name" />
</section>
```

Append the dynamically created elements to the `main` element in the HTML.

## Tips

To create an image element, you can use the method we already know `document.createElement('img')`

To set the src and the alt attributes, you can just use `img.src` and `img.alt`. All attributes are accessible like this, for any element.

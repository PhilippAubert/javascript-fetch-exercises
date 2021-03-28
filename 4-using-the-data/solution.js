console.clear();

const url = `https://randomuser.me/api/?inc=gender,name,picture&results=10`;

fetch(url)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw Error("ERROR!");
    }
  })
  .then((data) => {
    console.log(data.results);
    data.results
      .forEach((person) => {
        const main = document.querySelector("main");
        const section = document.createElement("section");
        section.classList.add("person");

        const nameFull = document.createElement("h2");
        nameFull.textContent = `${person.name.first}  ${person.name.last}`;

        const img = document.createElement("img");
        img.src = person.picture.large;
        img.alt = `${person.name.first}  ${person.name.last}`;

        main.append(section);
        section.append(nameFull);
        section.append(img);
      })
      .catch((error) => {
        console.log(error.toString());
      });
  });

console.clear();

const url = `https://randomuser.me/api/?inc=gender,name,picture&results=10`;

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.results.forEach((person) => {
      const main = document.querySelector("main");
      const section = document.createElement("section");
      section.classList.add("person");

      const nameFull = document.createElement("h2");
      nameFull.textContent = `${person.name.first} / ${person.name.last}`;

      const img = document.createElement("img");
      img.src = person.picture.large;
      img.alt = `${person.name.first} / ${person.name.last}`;

      main.append(section);
      section.append(nameFull);
      section.append(img);
    });
  });

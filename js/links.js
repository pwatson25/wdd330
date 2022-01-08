const requestURL = 'https://pwatson25.github.io/wdd330/notes-and-assignments.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const links = jsonObject['links.index'];
    const weeklyLinks = document.querySelector('.weeklyLinks');

    links.forEach(index => {
      const li = document.createElement('li');
      const anchor = document.createElement('a');
      const anchorText = document.createTextNode(`${link.label}`);
     

      anchor.setAttribute('href', link.url);

       
      anchor.appendChild(anchorText);
      li.append(anchor);
      weeklyLinks.appendChild(li);
    });
  });

  
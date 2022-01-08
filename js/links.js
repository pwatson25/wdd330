const requestURL = 'https://pwatson25.github.io/wdd330/notes-and-assignments.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const links = jsonObject['links'];
    const weeklyLinks = document.querySelector('.weeklyLinks');

    links.forEach(link => {
      const anchor = document.createElement('a');
      const li = document.createElement('li');

      anchor.setAttribute('href', link.url);
      anchor.setAttribute('innerText', link.url);
       
      li.appendChild(anchor);
      weeklyLinks.appendChild(li);
    });
  });

  
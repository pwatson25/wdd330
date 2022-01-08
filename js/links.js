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
      const li = document.createElement('li');
      const anchor = document.createElement('a');
      const anchorText = document.createTextNode('Bonus Click');
     

      anchor.setAttribute('href', link.url);

       
      anchor.appendChild(anchorText);
      li.append(li);
      weeklyLinks.appendChild(li);
    });
  });

  
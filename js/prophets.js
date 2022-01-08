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
        let li = document.createElement('li');
        let newUrl = document.createElement('a');


        new.setAttribute('href', link.url);
       
        card.append(newUrl);

        cards.append(li);
    });
  });

  
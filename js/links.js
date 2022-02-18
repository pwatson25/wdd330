const requestWeeklyLinksURL = 'https://pwatson25.github.io/wdd330/links.json';

fetch(requestWeeklyLinksURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  const week = jsonObject['week'];
  const weeklyLinks = document.querySelector('.weeklyLinks');
  console.log(week);

    index.forEach(week => {
      const li = document.createElement('li');
      const anchor = document.createElement('a');
      const anchorText = document.createTextNode(`${link.label}`);


      anchor.setAttribute('href', link.url);


      anchor.appendChild(anchorText);
      li.append(anchor);
      weeklyLinks.appendChild(li);
    });
  });






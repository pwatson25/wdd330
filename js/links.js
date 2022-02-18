const requestWeeklyLinksURL = 'https://pwatson25.github.io/wdd330/links.json';

fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  const links = jsonObject['index'];
  const weeklyLinks = document.querySelector('.weeklyLinks');
  console.log(weeklyLinks);

  links.forEach(link => {
    const anchor = document.createElement('a');
    const anchorText = document.createTextNode(`${link.label}`);
   

    anchor.setAttribute('href', `../${link.url}`);

     
    anchor.appendChild(anchorText);
    li.append(anchor);
    weeklyLinks.appendChild(li);
  });
});

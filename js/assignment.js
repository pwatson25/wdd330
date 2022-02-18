const requestURL = 'https://pwatson25.github.io/wdd330/assignments.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    title = document.title;
    const links = jsonObject[title];
    const assignmentLinks = document.querySelector('.assignmentLinks');

    links.forEach(link => {
      const li = document.createElement('li');
      const anchor = document.createElement('a');
      const anchorText = document.createTextNode(`${link.label}`);
     

      anchor.setAttribute('href', link.url);

       
      anchor.appendChild(anchorText);
      li.append(anchor);
      assignmentLinks.appendChild(li);
    });
  });




  
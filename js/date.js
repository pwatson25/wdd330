const thedate = new Date();
let year = thedate.getFullYear();
document.getElementById("currentYear").textContent = year;

const lastModDate = new Date(document.lastModified);
let strLMD =
  +lastModDate.getMonth() +
  1 +
  "/" +
  lastModDate.getDate() +
  "/" +
  lastModDate.getFullYear() +
  " " +
  lastModDate.getHours() +
  ":" +
  lastModDate.getMinutes() +
  ":" +
  lastModDate.getSeconds();
document.getElementById("lastUpdate").textContent = strLMD;

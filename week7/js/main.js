// const form = document.forms['search'];


// // input.addEventListener('focus', () => alert('focused'), false);
// input.addEventListener('blur', () => alert('blurred'), false);
// input.addEventListener('change', () => alert('changed'), false);

document.body.addEventListener('click', function(event) {

const form = document.forms['search'];
const input = form.elements.searchInput;
form.addEventListener ('submit', search, false);

function search() {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}})

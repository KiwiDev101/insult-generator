
var proxy = `https://cors-anywhere.herokuapp.com/`;

var api = `${proxy}https://evilinsult.com/generate_insult.php?lang=en&type=json`;

document.querySelector('.generate-btn').addEventListener('click', () => {

  let insultTag = document.querySelector('.insultTag');

  fetch(api)
    .then(response => {
      return response.json()
    })
    .then(data => {
      insultTag.innerHTML = data.insult;
    })
});

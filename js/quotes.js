
const quotes =() => {
  fetch ('https://api.kanye.rest')
  .then (response => response.json())
  .then (data => displayQuotes(data))
}
 const displayQuotes =data =>{
 const blockQuots = document.getElementById('quote-container')
 blockQuots.innerText = data.quote;
}
quotes();

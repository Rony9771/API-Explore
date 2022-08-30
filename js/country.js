
const country = () =>{
  fetch('https://restcountries.com/v3.1/all')
  .then (res => res.json())
  .then (data => displayCountry(data))
}

const displayCountry = people =>{

  const show = document.getElementById('country-info')
  people.forEach(country => {
    console.log(country)
    const countryDiv =document.createElement('div')
    countryDiv.classList.add('country')
    countryDiv.innerHTML =`
    <h2>Country name : ${country.name.official}</h2>
    <p> Capital : ${country.capital ? country.capital[0] : 'no capital'}</p>
    `;
    show.appendChild(countryDiv);

    
  });

  

}
country();
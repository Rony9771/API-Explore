
const country = () =>{
  fetch('https://restcountries.com/v3.1/all')
  .then (res => res.json())
  .then (data => displayCountry(data))
}

const displayCountry = people =>{

  const show = document.getElementById('country-info')
  people.forEach(country => {
    //console.log(country)
    const countryDiv =document.createElement('div')
    countryDiv.classList.add('country')
    countryDiv.innerHTML =`
    <h2>Country name : ${country.name.official}</h2>
    <p> Capital : ${country.capital ? country.capital[0] : 'no capital'}</p>
    <button onclick="loadData('${country.cca2}')">Details </button>
    `;

    show.appendChild(countryDiv);
  
  });
}
  const loadData = (code) =>{
    const url = `https://restcountries.com/v2/alpha/${code}`
    //console.log('Give Country details', code)
    //console.log('Give Country details', code)
    fetch(url)
    .then (res => res.json())
    .then (data =>displayDetails(data))
  }

  const displayDetails =country =>{
   // console.log(country)

    const showDetails = document.getElementById('country-details')
    showDetails.innerHTML=`
    <h2>See Country Flag: ${country.name} </h2>
    <img src ="${country.flags.png}">
    `;

  }
 
country();
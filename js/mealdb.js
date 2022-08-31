const foodMeal = (search) =>{
  const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
  fetch (url)
  .then (res => res.json())
  .then (data => displayFood(data.meals))
}

const displayFood = meals =>{
  console.log(meals)

  const mealDb =document.getElementById('meal-cotainer');
  mealDb.innerHTML = '';
  for (const meal of meals){
    console.log(meal);
    const inserDb =document.createElement('div');
    inserDb.classList.add('col')
    inserDb.innerHTML =`
    <div class="card">
          <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
          </div>
        </div>
    `;
    mealDb.appendChild(inserDb);
  }
}
const foodSearch =() => {
  const seachField = document.getElementById('food-search')
  const searchText = seachField.value;
  foodMeal(searchText);
  seachField.value = '';



}
//foodMeal('meat');
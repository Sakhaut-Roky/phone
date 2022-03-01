const searchPhon=()=>{
    const searchText = document.getElementById('search-field').value;
    loadPhonHunter(searchText);
    document.getElementById('search-field').value=''
}

const loadPhonHunter = (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhon(data.data))
}

const displayPhon = (phons) => {
    console.log("phons", phons);
    const contaier = document.getElementById('phon');
    contaier.textContent= ''
    phons.map(phon => {
        const div = document.createElement('div')
        div.classList.add('col');
         div.innerHTML = `
         <div onClick="phonDetails('${phon.phone_name}')" class="card h-100">
         <img width="12rem" src="${phon.image}" class="card-img-top" alt="...">
         <div class="card-body">
           <h5 class="card-title">${phon.brand}</h5>
         <p class="card-text">${phon.slug.slice(0, 20)}</p>
        </div>
      <div>

      
    <button onClick="loadPhonDetails('${phon.slug}')"> More</button></div>
       </div>
         `;
        contaier.appendChild(div)
    })
}
loadPhonHunter('phon')

const loadPhonDetails= (phonName)=>{
    console.log(phonName);
    const url =`https://openapi.programming-hero.com/api/phone/${phonName}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}
loadPhonDetails()
// const buttonId = () => {
//     const searchField = document.getElementById('search-id');
//     const searchText = searchField.value;
//     searchField.value = '';

//     const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
//     // console.log(url);
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displaySearch(data.data))

// }

// const displaySearch = phons => {
//      console.log(phons);
//     const searchResult = document.getElementById('search-result');
//     searchResult.textContent = '';
//     phons.map(phon => {
//         // console.log(meals);
//         const div = document.createElement('div');
//         div.classList.add('col');
//         div.innerHTML = `
//         <div onclick = "loadMeal(${meal.idMeal})" class="card h-100">
//         <img width="12rem" src="${meal.strMealThumb}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${meal.strMeal}</h5>
//           <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
//         </div>
//       </div>
//         `;
//         searchResult.appendChild(div);
//     })
// }

// const loadMeal = mealId => {
//   const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
//   // console.log(mealId);
//   fetch(url)
//   .then(res => res.json())
//   .then(data => displayMeal(data.meals[0]))
  
// }

// const displayMeal = meal => {
//     const mealDetails = document.getElementById('meal-details');
//     mealDetails.textContent = '';
//     console.log(meal);
//     const div = document.createElement('div');
//     div.classList.add('card');
//     div.innerHTML = `
//     <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">${meal.strMeal}</h5>
//       <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
//       <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
//     </div>
//     `;
//     mealDetails.appendChild(div);
// }
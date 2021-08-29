
const display = document.getElementById('display');
const modal = document.getElementById("show");
const search = document.getElementById('searchdeail');
const displayData = () => {
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=b"
    fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            const mealsData = data.meals;
            //console.log(mealsData);
            mealsData.forEach(meal => {
                const div = document.createElement('div')
                div.classList.add('col');
                div.innerHTML = `
                <div onclick="showDetail('${meal.idMeal}')" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                </div>
            </div>
                `
                display.append(div)
            });

        })


}
displayData()

const showDetail = mealId => {
    const url1 = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url1)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            const meals = data.meals[0];
            console.log(meals);
            modal.innerHTML = "";
            const div = document.createElement('div')
            div.classList.add('col');
            div.innerHTML = `
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${meals.strMealThumb}" class="img-fluid rounded-start" alt="...">
                    </div>
                 <div class="col-md-8">
                     <div class="card-body">
                          <h5 class="card-title">${meals.strMeal}</h5>
                           <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                      </div>
                 </div>
                </div>
         </div>
            `
            modal.append(div);

        })

}

const nameDetails = () => {
    const srcData = document.getElementById("search");
    const srcValue = srcData.value;
    display.innerHTML = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${srcValue}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const meals = data.meals;
            //console.log(meals);
            meals.forEach(meal => {
                //console.log(meal);
                const div = document.createElement('div')
                div.classList.add('col');
                div.innerHTML = `
                   <div onclick="showDetail('${meal.idMeal}')" class="card">
                   <img src="${meal.strMealThumb}" class="card-img-top" alt="">
                   <div class="card-body">
                       <h5 class="card-title">${meal.strMeal}</h5>
                   </div>
               </div>
                   `
                search.append(div)
                srcData.value = '';
            });
        })

}
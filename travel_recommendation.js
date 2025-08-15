const btnSearch = document.getElementById('btnSearch');
const btnClear = document.getElementById('btnClear');


function searchKeyword() {
    const keyword = document.getElementById('destKeyword').value.toLowerCase();
    console.log(`keyword is: ${keyword}`)
    const recommendationsDiv = document.getElementById('recommendations');
    recommendationsDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
      .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json()})
      .then(data => {
        console.log(data);

        const countryDestinations = data.countries.filter(country => {
            return country.name.toLowerCase().includes(keyword)
        });
        var cityDestinations=[];
        if (countryDestinations.length>0) {
            cityDestinations = countryDestinations[0].cities;
        }
        if (cityDestinations.length>0) {

            cityDestinations.forEach(city => {
                console.log(city.name);
                recommendationsDiv.innerHTML += `<div class="destDisplayObj">
                    <img src="${city.imageUrl}" alt="noImage">
                    <p><b>${city.name}</b>&nbsp;&nbsp;${city.description}</p>
                    </div>`;
            })
        }    
        else {
            console.log('No countries match keyword.');

            const countryObjectArray = Object.values(countryDestinations);
            console.log(countryObjectArray);


            var categoryDestinations=[];
            for (const category in data) {
                if (category.toLowerCase().includes(keyword)) {
                categoryDestinations=data[category]; // add elements 
                }
            }
            categoryDestinations.forEach(item => console.log(item.name));

            const categoryObjectArray = Object.values(categoryDestinations);
            console.log(`category matches: `);
            console.log(categoryObjectArray);

            if (categoryDestinations.length<1) {recommendationsDiv.innerHTML = 'No locations match keyword.';}
            else {
                categoryDestinations.forEach(item => {
                    console.log(item.name);
                    recommendationsDiv.innerHTML += `<div class="destDisplayObj">
                        <img src="${item.imageUrl}" alt="noImage">
                        <p><b>${item.name}</b>&nbsp;&nbsp;${item.description}</p>
                        </div>`;
                })
            }
        }
     })
      .catch(error => {
        console.error('Error:', error);
        recommendationsDiv.innerHTML = 'An error occurred while fetching data.';
      });
  }

 function clearResults() {
    document.getElementById('destKeyword').value='';
    const recommendationsDiv = document.getElementById('recommendations');
   
    recommendationsDiv.innerHTML = '';
  }

btnSearch.addEventListener('click', searchKeyword);
btnClear.addEventListener('click', clearResults);

function bookCustomer() {
    alert("Please call us at 716-555-1234!");
}
btnBook.addEventListener("click", bookCustomer);
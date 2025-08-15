const btnSearch = document.getElementById('btnSearch');

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

        var countryDestinations = data.countries.filter(country => {
            return country.name.toLowerCase().includes(keyword)
        });
        
        const cityDestinations=[];
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

            //const categoryDestinationObject = Object.values(countryDestinations); //JSON.parse(countryDestinations);
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
    /*const location_keys = Object.keys(data)
        .filter(key => key.toLowerCase().includes(keyword)) // Filter keys containing "Name"
        .reduce((obj, key) => {
        return { ...obj, [key]: data[key] };
        //})
    }, {});*/
    /*const location_keys = data.filter(item => {return item.toLowerCase().includes(keyword);
        });*/
    /*if (location_keys) {
        console.log(typeof location.keys);
        console.log(location_keys);
        location_keys.forEach(element => {
            console.log(element);})
    } else {
        recommendationsDiv.innerHTML = 'Location not found.';
    }*/
     })

        /*  const symptoms = condition.symptoms.join(', ');
          const prevention = condition.prevention.join(', ');
          const treatment = condition.treatment;

          resultDiv.innerHTML += `<h3>${condition.name}</h3>`;

          resultDiv.innerHTML += `<img src="${condition.imagesrc}" alt="hjh">`;

          resultDiv.innerHTML += `<p><strong>Symptoms:</strong> ${symptoms}</p>`;
          resultDiv.innerHTML += `<p><strong>Prevention:</strong> ${prevention}</p>`;
          resultDiv.innerHTML += `<p><strong>Treatment:</strong> ${treatment}</p>`;
        */
      .catch(error => {
        console.error('Error:', error);
        recommendationsDiv.innerHTML = 'An error occurred while fetching data.';
      });
  }

btnSearch.addEventListener('click', searchKeyword);

/*function generateReport() {
    const numPatients = patients.length;
    const conditionsCount = {
      Diabetes: 0,
      Thyroid: 0,
      "High Blood Pressure": 0,
    };
    const genderConditionsCount = {
      Male: {
        Diabetes: 0,
        Thyroid: 0,
        "High Blood Pressure": 0,
      },
      Female: {
        Diabetes: 0,
        Thyroid: 0,
        "High Blood Pressure": 0,
      },
    };

    for (const patient of patients) {
      conditionsCount[patient.condition]++;
      genderConditionsCount[patient.gender][patient.condition]++;
    }

    report.innerHTML = `Number of patients: ${numPatients}<br><br>`;
    report.innerHTML += `Conditions Breakdown:<br>`;
    for (const condition in conditionsCount) {
      report.innerHTML += `${condition}: ${conditionsCount[condition]}<br>`;
    }

    report.innerHTML += `<br>Gender-Based Conditions:<br>`;
    for (const gender in genderConditionsCount) {
      report.innerHTML += `${gender}:<br>`;
      for (const condition in genderConditionsCount[gender]) {
        report.innerHTML += `&nbsp;&nbsp;${condition}: ${genderConditionsCount[gender][condition]}<br>`;
      }
    }
  }*/
function bookCustomer() {
    alert("Please call us at 716-555-1234!");
}
btnBook.addEventListener("click", bookCustomer);
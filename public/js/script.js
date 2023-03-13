function getCountryData() {
    const countryInput = document.getElementById("country");
    const countryName = countryInput.value.trim();
    const countryData = document.getElementById("country-data");

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
        .then(response => response.json())
        .then(data => {
            const country = data[0];

            const countryInfo = `
                <h2>${country.name.common}</h2>
                <ul>
                    <li><strong>Capital:</strong> ${country.capital}</li>
                    <li><strong>Región:</strong> ${country.region}</li>
                    <li><strong>Subregión:</strong> ${country.subregion}</li>
                    <li><strong>Población:</strong> ${country.population.toLocaleString()}</li>
                    <li><strong>Idiomas:</strong> ${Object.values(country.languages).join(", ")}</li>
                </ul>
            `;
            countryData.innerHTML = countryInfo;

            const mapContainer = document.getElementById("map");
            const map = new google.maps.Map(mapContainer, {
                center: { lat: country.latlng[0], lng: country.latlng[1] },
                zoom: 5,
            });
        })
        .catch(error => {
            countryData.innerHTML = "Lo siento, no se encontró información para ese país.";
            console.error(error);
        });
}

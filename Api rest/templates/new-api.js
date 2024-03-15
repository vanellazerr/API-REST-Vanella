$(document).ready(function() {
    $('#viewInventory').on('click', function() 
    {
        const cityName = 'Paris';
        const apiKey = 'TaksKhkVg8ZKsZHSPKrzgQ==HCjAlH6uKs0vSRyf';
        const url = `https://api.api-ninjas.com/v1/city?name=${cityName}`;

        $.ajax({
            method: 'GET',
            url: url,
            headers: { 'X-Api-Key': apiKey },
            contentType: 'application/json',
            success: function(result) {
                console.log(result);
                displayCityInfo(result); 
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });

        function displayCityInfo(cityInfo) {
            const cityContainer = document.getElementById("city-info");
            const para = document.createElement("p");
            para.textContent = `Nom de la ville: Paris, 3 rue des Ardennes ${cityInfo.name}`; 
            cityContainer.appendChild(para);
        }
    });
});
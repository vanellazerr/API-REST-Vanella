
$(document).ready(function() {
    $('#customOrder').on('click', function() 
    {
    const model = 'camry';
    const apiKey = 'TaksKhkVg8ZKsZHSPKrzgQ==HCjAlH6uKs0vSRyf';
    const url = `https://api.api-ninjas.com/v1/cars?model=${model}&limit=10`;

    fetch(url, {
        method: "GET",
        headers: {
            "X-Api-Key": apiKey,
            "Content-Type":'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Problème réseau');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);

        const dataContainer = document.getElementById("cars");

        data.forEach(item => {
            const para = document.createElement("p");
            para.textContent = `Type de carburant: ${item.fuel_type}, Marque: ${item.make}, Modèle: ${item.model}, Année: ${item.year}`;
            dataContainer.appendChild(para);
        });
    })
    .catch(error => {
        console.error('Problème avec la requête:', error);
    });
});
});

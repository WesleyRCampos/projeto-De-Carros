function changeCarModel(model) {
    var carImage = document.getElementById('car-image');
    var carName = document.getElementById('car-name');
    var carPrice = document.getElementById('car-price');
    var color = document.getElementById('car-color').value;

    if (model === 'onix') {
        carImage.src = 'car_onix_' + color + '.png';
        carName.textContent = 'Carro Onix';
        carPrice.textContent = 'R$ 50.000,00';
    } else if (model === 'cruze') {
        carImage.src = 'car_cruze_' + color + '.png';
        carName.textContent = 'Carro Cruze';
        carPrice.textContent = 'R$ 75.000,00';
    } else if (model === 'luxury') {
        carImage.src = 'car_luxury_' + color + '.png';
        carName.textContent = 'Luxury Car';
        carPrice.textContent = 'R$ 100.000,00';
    }
}

function changeCarColor() {
    var carImage = document.getElementById('car-image');
    var color = document.getElementById('car-color').value;
    var currentModel = document.getElementById('car-name').textContent.toLowerCase().replace(' ', '_');

    carImage.src = 'car_' + currentModel + '_' + color + '.png';
}



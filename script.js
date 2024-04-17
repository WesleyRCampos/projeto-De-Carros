function changeCarModel(model) {
    var carImage = document.getElementById('carro-imagem');
    var carName = document.getElementById('carro-nome');
    var carPrice = document.getElementById('carro-preco');
    var color = document.getElementById('carro-cor').value;

    if (model === 'onix') {
        carImage.src = 'car_onix_' + color + '.png';
        carName.textContent = 'Onix';
        carPrice.textContent = 'R$ 50.000,00';
    } else if (model === 'cruze') {
        carImage.src = 'car_cruze_' + color + '.png';
        carName.textContent = 'Cruze';
        carPrice.textContent = 'R$ 75.000,00';
    } else if (model === 'luxury') {
        carImage.src = 'car_luxury_' + color + '.png';
        carName.textContent = 'Luxury';
        carPrice.textContent = 'R$ 100.000,00';
    }
}

function changeCarColor() {
    var carImage = document.getElementById('carro-imagem');
    var color = document.getElementById('carro-cor').value;
    var currentModel = document.getElementById('carro-nome').textContent.toLowerCase().replace(' ', '_');

    carImage.src = 'car_' + currentModel + '_' + color + '.png';
}



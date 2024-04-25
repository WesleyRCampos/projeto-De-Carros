const body = document.querySelector("body"),
        sidebar = body.querySelector(".sidebar"),
        toggle = body.querySelector(".toggle"),
        searchBtn = body.querySelector(".search-box"),
        modeSwtich = body.querySelector(".toggle-switch"),
        modeText = body.querySelector(".mode-text");

        toggle.addEventListener("click", () =>{
           sidebar.classList.toggle("close"); 
        });
        
        modeSwtich.addEventListener("click", () =>{
           body.classList.toggle("dark");
           
           if(body.classList.contains("dark")){
            modeText.innerText = "Light Mode"
        }else{
            modeText.innerText = "Dark Mode"
        }
        });

        function addNewCarModel() {
            var newModel = document.getElementById('new-model').value;
            var newColor = document.getElementById('new-color').value;
        
            if (newModel && newColor) {
                var carList = document.getElementById('car-list');
                var newListItem = document.createElement('li');
                newListItem.textContent = `${newModel} - ${newColor}`;
                carList.appendChild(newListItem);
        
                // Adiciona o novo modelo ao array de modelos
                carModels.push(newModel.toLowerCase());
        
                // Adiciona a nova combinação de modelo e cor ao array de carros
                cars.push({ model: newModel.toLowerCase(), color: newColor });
        
                // Atualiza a imagem do carro com a nova cor, se necessário
                if (currentModel === newModel.toLowerCase()) {
                    carImage.src = `car_${currentModel}_${newColor}.jpg`;
                }
        
                // Limpa os campos de entrada
                document.getElementById('new-model').value = '';
                document.getElementById('new-color').value = '';
        
                // Exibe uma mensagem de confirmação
                document.getElementById('cart-message').textContent = `Novo modelo ${newModel} adicionado com sucesso!`;
                document.getElementById('cart-message').style.display = 'block';
            } else {
                alert('Por favor, preencha todos os campos.');
            }
        }
        
        
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
  

// Função para adicionar um novo modelo de carro
function addNewCarModel() {
    var newModel = document.getElementById('new-model').value;

    if (newModel) {
        var select = document.getElementById('carro-nome');
        var option = document.createElement('option');
        option.textContent = newModel;
        select.appendChild(option);
    } else {
        alert('Por favor, preencha o campo do novo modelo de carro.');
    }
}

function addToCart() {
    var carName = document.getElementById('carro-nome').textContent;
    var carPrice = document.getElementById('carro-preco').textContent;
    var carColor = document.getElementById('carro-cor').value;

    var cartMessage = document.getElementById('cart-message');
    cartMessage.textContent = `Adicinado ${carColor} ${carName} \n para carrinho por \n ${carPrice}`;
    cartMessage.style.display = 'block'; // Exibir a mensagem
}
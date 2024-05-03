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

// Função para trocar o modelo do carro
function changeCarModel(model) {
    var carImage = document.getElementById('carro-imagem');
    var carName = document.getElementById('carro-nome');
    var carPrice = document.getElementById('carro-preco');
    var color = document.getElementById('carro-cor').value;

    var imageUrl = `car_${model}_${color}.png`;
    var modelName = model.charAt(0).toUpperCase() + model.slice(1); // Capitaliza o nome do modelo
    var modelPrice = getModelPrice(model); // Obtém o preço do modelo

    carImage.src = imageUrl;
    carName.textContent = modelName;
    carPrice.textContent = modelPrice;
}

function getModelPrice(model) {
    switch (model) {
        case 'onix':
            return 'R$ 50.000,00';
        case 'cruze':
            return 'R$ 75.000,00';
        case 'luxury':
            return 'R$ 100.000,00';
        default:
            return 'Preço não disponível';
    }
}

function changeCarColor() {
    var carImage = document.getElementById('carro-imagem');
    var color = document.getElementById('carro-cor').value;
    var currentModel = document.getElementById('carro-nome').textContent.toLowerCase().replace(' ', '_');

    carImage.src = `car_${currentModel}_${color}.png`;
}

// Função para adicionar um novo modelo de carro
function addNewCarModel() {
    var newModel = document.getElementById('new-model').value;

    if (!newModel) {
        alert('Por favor, preencha o campo do novo modelo de carro.');
        return;
    }

    var select = document.getElementById('carro-nome');
    var option = document.createElement('option');
    option.textContent = newModel;
    select.appendChild(option);
}

// Função para adicionar o carro ao carrinho
function addToCart() {
    var carName = document.getElementById('carro-nome').textContent;
    var carPrice = document.getElementById('carro-preco').textContent;
    var carColor = document.getElementById('carro-cor').value;

    var cartItems = document.getElementById('cart-items');
    var newItem = document.createElement('li');
    newItem.textContent = `${carColor} ${carName} - ${carPrice}`;
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.onclick = function() {
        cartItems.removeChild(newItem);
    };
    newItem.appendChild(deleteButton);
    cartItems.appendChild(newItem);
}

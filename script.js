const body = document.querySelector("body"),
        sidebar = body.querySelector(".sidebar"),
        toggle = body.querySelector(".toggle"),
        searchBtn = body.querySelector(".search-box"),
        modeSwtich = body.querySelector(".toggle-switch"),
        modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () =>{
    sidebar.classList.toggle("fechar"); 
});
        
modeSwtich.addEventListener("click", () =>{
    body.classList.toggle("escuro");
           
    if(body.classList.contains("escuro")){ 
        modeText.innerText = "Modo Claro"
    }else{
        modeText.innerText = "Modo Escuro"
    }
});

function pesquisarCarro() {
    var input = document.getElementById('pesquisar-carro');
    var filtro = input.value.toUpperCase();
    var carros = document.querySelectorAll('#banner .modeloCar button');

    for (var i = 0; i < carros.length; i++) {
        var nome = carros[i].textContent.toUpperCase();
        if (nome.indexOf(filtro) > -1) {
            carros[i].style.display = '';
        } else {
            carros[i].style.display = 'none';
        }
    }
}


// Função para trocar o modeloo do carro
function trocarModelo(modelo) {
    var carroImagem = document.getElementById('carro-imagem');
    var carroNome = document.getElementById('carro-nome');
    var carroPreco = document.getElementById('carro-preco');
    var cor = document.getElementById('carro-cor').value;

    var imagemUrl = `car_${modelo}_${cor}.png`;
    var modeloName = modelo.charAt(0).toUpperCase() + modelo.slice(1); // Capitaliza o nome do modelo
    var modeloPrice = ModeloPreco(modelo); // Obtém o preço do modelo

    // Verifica se a imagem existe
    var img = new Image();
    img.src = imagemUrl;
    img.onload = function() {
        // Se a imagem existir, atribui-a ao elemento img
        carroImagem.src = imagemUrl;
    };
    img.onerror = function() {
        // Se a imagem não existir, define uma imagem de substituição
        carroImagem.src = 'imagem_padrao.png';
    };

    carroNome.textContent = modeloName;
    carroPreco.textContent = modeloPrice;
}


function ModeloPreco(modelo) {
    switch (modelo) {
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

function trocarCor() {
    var carroImagem = document.getElementById('carro-imagem');
    var cor = document.getElementById('carro-cor').value;
    var modeloAtual = document.getElementById('carro-nome').textContent.toLowerCase().replace(' ', '_');

    carroImagem.src = `car_${modeloAtual}_${cor}.png`;
}

function adicionarModeloNovo() {
    var modeloNovo = document.getElementById('novo-modelo').value;

    if (!modeloNovo) {
        alert('Por favor, preencha o campo do novo modelo de carro.');
        return;
    }

    var modelosDisponiveis = document.querySelector('.modeloCar');

    var botaoNovoModelo = document.createElement('button');
    botaoNovoModelo.textContent = modeloNovo;
    botaoNovoModelo.onclick = function() {
        trocarModelo(modeloNovo.toLowerCase());
    };

    // Insere o novo botão no início da lista de modelos disponíveis
    modelosDisponiveis.insertBefore(botaoNovoModelo, modelosDisponiveis.firstChild);
}

// Função para adicionar o carro ao carrinho
function carrinho() {
    var carroNome = document.getElementById('carro-nome').textContent;
    var carroPreco = document.getElementById('carro-preco').textContent;
    var carroCor = document.getElementById('carro-cor').value;

    var carrinhoItens = document.getElementById('carrinho-Itens');
    var novoItem = document.createElement('li');
    novoItem.textContent = `${carroCor} ${carroNome} - ${carroPreco}`;
    var deleteButton = document.createElement('button');
    var deleteIcon = document.createElement('i');
    deleteIcon.className = 'fa-solid fa-trash'; // Adicione a classe do ícone desejado
    deleteButton.appendChild(deleteIcon);
    deleteButton.onclick = function() {
        carrinhoItens.removeChild(novoItem);
    };
    novoItem.appendChild(deleteButton);
    carrinhoItens.appendChild(novoItem);
}

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

// Carregar dados do arquivo JSON
fetch('carros.json')
  .then(response => response.json())
  .then(data => {
    const carros = data.carros;
    // Exibir os modelos de carros no "modeloCar"
    const modeloCar = document.querySelector('.modeloCar');
    carros.forEach(carro => {
      const button = document.createElement('button');
      button.textContent = carro.modelo.charAt(0).toUpperCase() + carro.modelo.slice(1);
      button.addEventListener('click', () => {
        trocarModelo(carro);
        resetarCor(); 
      });
      modeloCar.appendChild(button);
    });
  });

//funcao para pesquisar

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


// Função para trocar o modelo

function trocarModelo(carro) {
  const carroImagem = document.getElementById('carro-imagem');
  const carroNome = document.getElementById('carro-nome');
  const carroPreco = document.getElementById('carro-preco');
  const cor = document.getElementById('carro-cor').value.toLowerCase();

  const imagemUrl = carro.imagens[cor] || 'imagem_padrao.png'; // Verifica se a imagem está disponível
  const modeloName = carro.modelo.charAt(0).toUpperCase() + carro.modelo.slice(1); // Capitaliza o nome do modelo

  carroImagem.src = imagemUrl;
  carroNome.textContent = modeloName;
  carroPreco.textContent = carro.preco;
}

//funcao para pegar o valor

async function ModeloPreco(modelo) {
    try {
        const response = await fetch('carros.json'); 
        const data = await response.json();

        if (modelo in data) {
            return data[modelo].preco;
        } else {
            return 'Preço não disponível';
        }
    } catch (error) {
        console.error('Erro ao carregar o arquivo JSON:', error);
        return 'Erro ao carregar o preço';
    }
}

//funcao para cor

function trocarCor() {
    var carroImagem = document.getElementById('carro-imagem');
    var cor = document.getElementById('carro-cor').value;
    var modeloAtual = document.getElementById('carro-nome').textContent.toLowerCase().replace(' ', '_');

    carroImagem.src = `car_${modeloAtual}_${cor}.png`;
}

// Função para resetar a cor 

function resetarCor() {
    var corOptions = document.getElementById('carro-cor').options;
    corOptions.selectedIndex = 0; // Definindo o índice selecionado de volta para o primeiro item
    trocarCor(); // Chamando a função para trocar a cor
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

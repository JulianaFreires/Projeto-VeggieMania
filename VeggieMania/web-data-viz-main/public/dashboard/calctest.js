
//24/06 Mais aliementos foram adicionados e estão relacionados a 3 categorias: massas, laticínios e tubérculos.

var nome = ["Aveia em flocos", "Quinoa em grãos", "Milho", "Arroz integral", "Arroz Branco", "Ervilha", "Feijão branco", "Lentilha", "Grão-de-bico", "Feijão preto", "Feijão carioca", "Tofu (com sulfato de cálcio)", "Amêndoa", "Castanha de caju", "Amendoim", "Noz pecã", "Gergelim", "Girassol", "Brócolis", "Agrião", "Mostarda", "Rúcula", "Couve", "Alface lisa", "Escarola", "Palmito", "Abobrinha", "Berinjela", "Cenoura", "Chuchu", "Sardinhas", "Pescada", "Coxão mole bovino (sem gordura, cozido)", "Músculo bovino (sem gordura, cozido)", "Contra-filé bovino (sem gordura, cru)", "Peito de frango (sem osso, cru)", "Coxa de frango (sem osso, crua)", "Queijo Prato", "Queijo Mozzarella", "Ricota", "Macarrão", "Pão francês", "Pão puma ", "Pão puma integral", "Pão puma de milho", "Requeijão", "Cream cheese", "Manteiga", "Margarina", "Doce de leite", "Maionese", "Nutella", "Pasta de amendoim", "Mandioca", "Batata inglesa", "Batata doce", "Mandioquinha", "Inhame", "Rabanete", "Beterraba"];

var caloria = [3.94, 3.74, 3.65, 3.59, 1.28, 3.41, 3.33, 3.47, 3.87, 3.31, 3.36, 0.76, 5.78, 5.74, 5.67, 6.91, 5.67, 5.70, 0.25, 0.17, 0.26, 0.25, 0.30, 0.14, 0.23, 0.285, 0.19, 0.20, 0.34, 0.17, 1.14, 1.11, 2.19, 1.94, 1.57, 1.18, 1.20, 3.52, 3.52, 1.74, 3.71,3.00,2.53,2.53,5.45,2.81,2.32,7.26,7.23,3.35,3.0833,5.42,6.0667,1.25,0.52,0.77,1.32,0.97,0.14,0.32];

var proteina = [0.14, 0.131, 0.0942, 0.080, 0.025, 0.2454, 0.2336, 0.23, 0.2238, 0.21, 0.20, 0.08, 0.2126, 0.1531, 0.257, 0.0917, 0.1829, 0.2278, 0.04, 0.03, 0.027, 0.0258, 0.0245, 0.02, 0.017, 0.028, 0.01, 0.01, 0.01, 0.01, 0.21, 0.16, 0.32, 0.31, 0.24, 0.22, 0.18, 0.2378, 0.2378, 0.1126,0.10,0.08,0.12,0.094,0.203,0.099,0.06,0.004,0.00,0.075,0.075,0.063,0.2733, 0.006,0.012,0.006,0.021,0.021,0.014,0.013];

var ferro = [0.0472, 0.0925, 0.0271,0.001, 0.01, 0.0443, 0.1044, 0.07, 0.0686, 0.065, 0.08, 0.0536, 0.043, 0.060, 0.0458, 0.0253, 0.0778, 0.0673, 0.006, 0.031, 0.014, 0.0146, 0.0019, 0.006, 0.009, 0.0313, 0.002, 0.002, 0.002, 0.002, 0.013, 0.002, 0.026, 0.024, 0.024, 0.004, 0.008, 0.0043, 0.0044, 0.0038,0.009,0.01,0.057,0.03,0.087,0.0013,0.0086,0.002,0.001,1.95,0.00,0.00,0.00,0.001,0.002,0.002,0.006,0.004,0.004,0.002];

var calcio = [0.54, 0.60, 0.07, 0.07,0.04, 0.55, 2.40, 0.54, 1.05, 1.11, 1.23, 3.50, 2.48, 0.45, 0.92, 0.70, 1.31, 1.16, 0.86, 1.33, 1.03, 1.60, 1.45, 0.28, 1.00, 0.58, 0.15, 0.09, 0.23, 0.12, 1.67, 0.14, 0.04, 0.05, 0.04, 0.07, 0.08, 6.50, 5.05, 2.07,0.17,0.16,1.56,1.32,2.34,2.83,0.539,0.09,0.03,2.45,0.00,0.00,0.00,0.19,0.04,0.17,0.16,0.12,0.21,0.15];

var zinco = [0.0397, 0.033, 0.0221, 0.013, 0.005, 0.0301, 0.0367, 0.035, 0.0281, 0.029, 0.029, 0.008, 0.0336, 0.056, 0.0327, 0.0453, 0.1023, 0.0506, 0.005, 0.007, 0.0022, 0.0047, 0.0013, 0.003, 0.0042, 0.0115, 0.002, 0.001, 0.002, 0.001, 0.013, 0.003, 0.047, 0.064, 0.032, 0.007, 0.022, 0.026, 0.0292, 0.0116, 0.008, 0.008, 0.013, 0.016, 0.021, 0.014, 0.0039, 0.0, 0.0, 0.005, 0.0, 0.0, 0.032, 0.002, 0.002, 0.001, 0.006, 0.003, 0.002, 0.004];


window.onload = function () { // Executa quando a janela é carregada
    let checkboxes = document.querySelectorAll('.caixa');  // Seleciona todas as checkboxes com a classe 'caixa'
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {  // Quando a checkbox muda sendo marcada ou desmarcada, o evento 'change' é disparado
            criarInput(this); // Chama a função criarInput passando a checkbox atual como informação
        });
    });
};

function criarInput(checkbox) {// Função para criar ou remover um input de acordo com a marcação da checkbox
    if (checkbox.checked) {
        
        // Cria um input text com o mesmo id da checkbox
        var input = document.createElement('input');
        input.type = 'Number';// Define o tipo do input
        input.id = 'input_' + checkbox.id;// Define o id do input com base no id da checkbox
        input.placeholder = 'Quantidade (g)';// Define o placeholder
        input.className = 'inputQtd';// Define a classe do input
        checkbox.parentElement.appendChild(input); // Adiciona o input como filho do elemento pai da checkbox


    } else {
        // Remove o input correspondente se a checkbox for desmarcada
        var input = document.getElementById('input_' + checkbox.id); // Seleciona o input pelo seu id
        if (input) {
            checkbox.parentElement.removeChild(input);
        }
    }
}

function calcular() {
    // Seleciona todas as checkboxes com a classe "caixa"
    div_mensagem.innerHTML = ""
    var checkboxes = document.querySelectorAll('.caixa');
    var selecionados = []; // Array para armazenar os ids das checkboxes selecionadas
    var texto = ""
    var totalCalorias = 0;
    var totalProteinas = 0;
    var totalFerro = 0;
    var totalCalcio = 0;
    var totalZinco = 0;


    // Itera sobre todas as checkboxes usando um loop for e verifica se estão marcadas
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {

            selecionados.push(checkboxes[i].id); // Adiciona o id da checkbox ao array selecionados

            var quantidade = document.getElementById('input_' + checkboxes[i].id).value; // Obtém a quantidade inserida no input correspondente a checkbox que foi marcada

            if (quantidade >= 1) {

                // Calcula os valores nutricionais multiplicando pela quantidade
                nomel = nome[checkboxes[i].id]
                calorial = Number(caloria[checkboxes[i].id] * quantidade).toFixed(2);
                proteinal = Number(proteina[checkboxes[i].id] * quantidade).toFixed(2);
                ferrol = Number(ferro[checkboxes[i].id] * quantidade).toFixed(2);
                calciol = Number(calcio[checkboxes[i].id] * quantidade).toFixed(2);
                zincol = Number(zinco[checkboxes[i].id] * quantidade).toFixed(2);


                totalCalorias += Number(calorial);
                totalProteinas += Number(proteinal);
                totalFerro += Number(ferrol);
                totalCalcio += Number(calciol);
                totalZinco += Number(zincol);

                // Exibe a div de resposta e rola para a visualização
                document.querySelector('.resposta').style.display = 'flex';
                document.getElementById('resul').scrollIntoView({ behavior: 'smooth' });

                texto += `<span>${nomel} - Calorias: ${calorial} | Proteinas: ${proteinal} | Cálcio: ${calciol} | Ferro: ${ferrol} | Zinco: ${zincol}<br></span>`

            } else {
                alert(`${nome[checkboxes[i].id]} - Selecione um valor válido na gramatura`)
            }
        }
    }

    // Se nenhum ingrediente foi selecionado exibe o alert
    if (selecionados.length <= 0) {
        alert('Nenhuma checkbox foi selecionada.');
    }

    totalCaloriasFixed = Number(totalCalorias).toFixed(2);
    totalProteinasFixed = Number(totalProteinas).toFixed(2);
    totalFerroFixed = Number(totalFerro).toFixed(2);
    totalCalcioFixed = Number(totalCalcio).toFixed(2);
    totalZincoFixed = Number(totalZinco).toFixed(2);


    div_mensagem.innerHTML += `<p>${texto}<br> O prato contém no total: Calorias: ${totalCaloriasFixed} | Proteina: ${totalProteinasFixed} | Cálcio: ${totalCalcioFixed} | Ferro: ${totalFerroFixed} | Zinco:${totalZincoFixed}</p>`
}

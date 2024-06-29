
//24/06 Mais aliementos foram adicionados e estão relacionados a 3 categorias: massas, laticínios e tubérculos.
//27/06 Os queijos foram para as listas dos laticínios
//27/06 Foram adicionados 25 alimentos, além de novas informações nutricionais que incluem carboidrato, fibra alimentar e lipideos. As informações dos nutrientes foram alteradas considerando a sua forma de preparo como cozidos com exceção de algumas carnes e folhas.

var nome = ["Aveia em Flocos", "Quinoa em Grãos", "Milho Verde em lata", "Arroz Integral", "Arroz Branco", "Ervilha em lata", "Feijão Branco", "Lentilha", "Grão-de-Bico", "Feijão Preto", "Feijão Carioca", "Tofu", "Amêndoa torrada", "Castanha de caju", "Amendoim torrado", "Noz pecã", "Gergelim", "Pasta de amendoim", "Brócolis", "Agrião", "Mostarda folha", "Rúcula", "Couve manteiga refogada", "Alface lisa", "Espinafre (refogado)", "Couve-flor", "Escarola", "Palmito pupunha", "Abobrinha", "Berinjela", "Cenoura", "Abóbora cabotiá", "Chuchu", "Sardinha em lata", "Pescada", "Coxão mole bovino (sem gordura, cozido)", "Músculo bovino (sem gordura, cozido)", "Contra-filé bovino (sem gordura, grelhado)", "Peito de frango (sem osso, assado)", "Coxa de frango (com pele, assado)", "Carne bovina lagarto (cozido)", "Filé mignon bovino (sem gordura, grelhado)", "Carne bovina, patinho, sem gordura (grelhado)", "Salmão sem pele (grelhado)", "Ovo", "Macarrão", "Pão francês", "Pão puma", "Pão puma integral", "Pão puma de milho", "Requeijão", "Cream cheese", "Manteiga", "Margarina", "Doce de leite", "Maionese tradicional", "Queijo ricota", "Queijo muçarela", "Queijo prato", "Queijo parmesão", "Mandioca", "Batata inglesa", "Batata doce", "Mandioquinha", "Inhame", "Rabanete", "Beterraba"];

var caloria = [3.94, 1.14, 0.98, 1.24, 1.28, 0.74, 1.29, 0.93, 1.15, 0.77, 0.76, 0.64, 6.32, 6.43, 6.06, 7.42, 5.84, 6.15, 0.25, 0.17, 0.18, 0.13, 90, 0.14, 0.67, 0.19, 0.33, 0.29, 0.15, 0.19, 0.30, 0.48, 0.19, 2.85, 2.23, 2.19, 1.94, 1.94, 1.59, 2.15, 2.22, 2.20, 2.19, 2.43, 1.43, 3.71, 3, 2.92, 2.53, 2.92, 2.57, 2.35, 7.26, 7.23, 3.06, 3.02, 1.40, 3.30, 3.60, 4.53, 1.25, 0.52, 0.77, 0.80, 0.89, 0.14, 0.32];

var carboidrato = [0.67, 0.213, 0.17, 0.26, 0.28, 0.13, 0.25, 0.16, 0.208, 0.14, 0.14, 0.02, 0.215, 0.15, 0.19, 0.136, 0.22, 0.151, 0.04, 0.02, 0.03, 0.02, 8.70, 0.02, 0.04, 0.04, 0.0162, 0.06, 0.03, 0.04, 0.07, 0.11, 0.05, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.02, 0.78, 0.59, 0.56, 0.5, 0.56, 0.02, 0.0224, 0, 0, 0.59, 0.08, 0.04, 0.03, 0.02, 0.02, 0.30, 0.12, 0.18, 0.19, 0.189, 0.03, 0.07];

var lipideo = [0.09, 0.0192, 0.02, 0.01, 0, 0, 0.0035, 0.01, 0.0186, 0.01, 0.01, 0.04, 0.499, 0.64, 0.54, 0.743, 0.5, 0.484, 0.01, 0, 0, 0, 6.60, 0, 0.05, 0, 0.0155, 0.01, 0, 0, 0, 0.01, 0, 0.24, 0.12, 0.09, 0.07, 0.04, 0.03, 0.10, 0.09, 0.09, 0.07, 0.14, 0.09, 0.01, 0.03, 0.03, 0.04, 0.03, 0.23, 0.225, 0.82, 0.82, 0.06, 0.30, 0.08, 0.25, 0.29, 0.34, 0, 0, 0, 0, 0.0014, 0, 0];

var fibraAlimentar = [0.09, 0.028, 0.05, 0.03, 0.02, 0.05, 0.0627, 0.08, 0.0747, 0.08, 0.09, 0.01, 0.125, 0.08, 0.08, 0.094, 0.12, 0, 0.03, 0.02, 0.02, 0.02, 5.70, 0.02, 0.03, 0.02, 0.0227, 0.03, 0.02, 0.03, 0.03, 0.03, 0.01, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.03, 0.02, 0.04, 0.07, 0.04, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.02, 0.01, 0.02, 0.02, 0.016, 0.02, 0.02];

var proteina = [0.14, 0.044, 0.03, 0.03, 0.03, 0.05, 0.0969, 0.06, 0.0753, 0.04, 0.05, 0.07, 0.212, 0.14, 0.23, 0.095, 0.21, 0.265, 0.02, 0.03, 0.02, 0.02, 1.70, 0.02, 0.03, 0.01, 0.0192, 0.03, 0.01, 0.01, 0.01, 0.01, 0, 0.16, 0.27, 0.32, 0.31, 0.36, 0.32, 0.28, 0.33, 0.33, 0.36, 0.26, 0.13, 0.1, 0.08, 0.08, 0.09, 0.08, 0.10, 0.06, 0, 0, 0.06, 0.01, 0.13, 0.23, 0.23, 0.36, 0.01, 0.01, 0.01, 0.01, 0.023, 0.01, 0.01];

var ferro = [0.04, 0.0149, 0.01, 0, 0, 0.01, 0.0369, 0.01, 0.0243, 0.01, 0.01, 0.01, 0.0371, 0.02, 0.01, 0.028, 0.05, 0.0327, 0.01, 0.03, 0.01, 0.01, 0.50, 0.01, 0.01, 0, 0.0088, 0, 0, 0, 0, 0, 0, 0.04, 0.01, 0.03, 0.02, 0.02, 0, 0.01, 0.02, 0.03, 0.03, 0, 0.02, 0.01, 0.01, 0.03, 0.03, 0.03, 0, 0.0087, 0, 0, 0, 0, 0, 0, 0, 0.01, 0, 0, 0, 0, 0.0002, 0, 0];

var calcio = [0.48, 0.17, 0.02, 0.05, 0.04, 0.22, 0.897, 0.16, 0.287, 0.29, 0.27, 0.81, 2.69, 1.46, 0.39, 0.72, 8.25, 0, 0.51, 1.33, 0.68, 1.17, 177, 0.28, 1.12, 0.16, 0.0091, 0.32, 0.17, 0.11, 0.26, 0.08, 0.08, 5.50, 3.78, 0.04, 0.05, 0.05, 0.05, 0.08, 0.04, 0.04, 0.05, 0.15, 0.42, 0.17, 0.16, 0.78, 1.32, 0.78, 2.59, 0.547, 0.09, 0.03, 1.95, 0.03, 2.53, 8.75, 9.40, 9.92, 0.19, 0.04, 0.17, 0.12, 0.149, 0.21, 0.15];

var zinco = [0.03, 0.0109, 0.01, 0.01, 0.01, 0.01, 0.0265, 0.01, 0.0205, 0.01, 0.01, 0.01, 0.0312, 0.04, 0.02, 0.0507, 0.05, 0.0305, 0, 0.01, 0, 0, 0.20, 0, 0.01, 0, 0.0083, 0, 0, 0, 0, 0, 0, 0.02, 0.01, 0.05, 0.06, 0.05, 0.01, 0.03, 0.07, 0.04, 0.08, 0.01, 0.01, 0.01, 0.01, 0.01, 0.02, 0.01, 0.01, 0.0039, 0, 0, 0.01, 0, 0.01, 0.04, 0.04, 0.04, 0, 0, 0, 0, 0.0036, 0, 0];


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

function cadastrarRefeicao() {
    // Seleciona todas as checkboxes com a classe "caixa"
    var idUsuario = sessionStorage.ID_USUARIO; //28/06 indetificar o usuário que está logado
    div_mensagem.innerHTML = ""
    var tipoRefeicao = select_tipoRefeicao.value //28/06 variável que guarda o tipo de refeição selecionado pelo usuário
    var checkboxes = document.querySelectorAll('.caixa');
    var selecionados = []; // Array para armazenar os ids das checkboxes selecionadas
    var texto = ""
    var totalCalorias = 0;
    var totalCarboidratos = 0; // 27/06
    var totalLipideos = 0; // 27/06
    var totalFibras = 0; // 27/06
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

                // Calcula os valores nutricionais multiplicando dos alimentos selecionados em uma lista, multiplicando cada valor pelo número de porções (quantidade) que o usuário especificou.
                var nomel = nome[checkboxes[i].id]
                var calorial = Number(caloria[checkboxes[i].id] * quantidade).toFixed(2);
                var carboidratol = Number(carboidrato[checkboxes[i].id] * quantidade).toFixed(2);// 27/06
                var lipideol = Number(lipideo[checkboxes[i].id] * quantidade).toFixed(2);// 27/06
                var fibral = Number(fibraAlimentar[checkboxes[i].id] * quantidade).toFixed(2);// 27/06
                var proteinal = Number(proteina[checkboxes[i].id] * quantidade).toFixed(2);
                var ferrol = Number(ferro[checkboxes[i].id] * quantidade).toFixed(2);
                var calciol = Number(calcio[checkboxes[i].id] * quantidade).toFixed(2);
                var zincol = Number(zinco[checkboxes[i].id] * quantidade).toFixed(2);

                // Somando os valores nutricionais de cada alimento selecionado para fornecer um total.
                totalCalorias += Number(calorial);
                totalCarboidratos += Number(carboidratol);// 27/06
                totalLipideos += Number(lipideol);// 27/06
                totalFibras += Number(fibral)// 27/06
                totalProteinas += Number(proteinal);
                totalFerro += Number(ferrol);
                totalCalcio += Number(calciol);
                totalZinco += Number(zincol);

                // Exibe a div de resposta e rola para a visualização
                document.querySelector('.resposta').style.display = 'flex';
                document.getElementById('resul').scrollIntoView({ behavior: 'smooth' });

                texto += `<span>${nomel} - Calorias: ${calorial} |  Carboidratos:: ${carboidratol} |  Lipideos: ${lipideol} |  Fibra alimentar: ${fibral} | Proteinas: ${proteinal} | Cálcio: ${calciol} | Ferro: ${ferrol} | Zinco: ${zincol}<br></span>`// 27/06

                console.log(JSON.stringify({
                    idUsuario: sessionStorage.ID_USUARIO,
                    tipo: tipoRefeicao,
                    nome: nomel,
                    caloria: calorial,
                    carboidrato: carboidratol,
                    lipideo: lipideol,
                    fibra: fibral,
                    proteina: proteinal,
                    ferro: ferrol,
                    calcio: calciol,
                    zinco: zincol,

                }))

                fetch("/usuarios/cadastrarRefeicao", { //28/06 Fetch envia uma requisição http para o back end, o fetch foi colocado dentro do for para pegar todos os alimentos (os alimentos e suas respectivas informações nutricionais), que foram selecionados pelo usuário
                    method: "POST",//Envia os dados
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ // armazena no formato json todas as infromações necessarias para o cadastro da refeição do usuário
                        idUsuario: sessionStorage.ID_USUARIO,
                        tipo: tipoRefeicao,
                        nome: nomel,
                        caloria: calorial,
                        carboidrato: carboidratol,
                        lipideo: lipideol,
                        fibra: fibral,
                        proteina: proteinal,
                        ferro: ferrol,
                        calcio: calciol,
                        zinco: zincol,

                    }),
                })
                    .then(response => { // resposta
                        console.log(response)
                        if (response.ok) {
                            response.json().then(data => {
                                console.log('Dieta cadastrada com sucesso', data);

                            })
                        }else{
                            response.text().then(data => {
                                console.log('erro:', data);
                            
                            })
                        }
                    })

                    .catch(error => {
                        console.error('Erro ao cadastrar dieta', error);
                    });




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
    totalCarboidratosFixed = Number(totalCarboidratos).toFixed(2);// 27/06
    totalLipideosFixed = Number(totalLipideos).toFixed(2);// 27/06
    totalFibrasFixed = Number(totalFibras).toFixed(2);// 27/06
    totalProteinasFixed = Number(totalProteinas).toFixed(2);
    totalFerroFixed = Number(totalFerro).toFixed(2);
    totalCalcioFixed = Number(totalCalcio).toFixed(2);
    totalZincoFixed = Number(totalZinco).toFixed(2);


    div_mensagem.innerHTML += `<p>${texto}<br> O prato contém no total: Calorias: ${totalCaloriasFixed} | Carboidratos: ${totalCarboidratosFixed} | Lipideos: ${totalLipideosFixed} | Fibras alimentares: ${totalFibrasFixed} | Proteina: ${totalProteinasFixed} | Cálcio: ${totalCalcioFixed} | Ferro: ${totalFerroFixed} | Zinco:${totalZincoFixed}</p>`// 27/06







}















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
            criarInput(checkbox); // Chama a função criarInput passando a checkbox atual como informação
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
   
            checkbox.parentElement.removeChild(input);// remove um filho específico do pai ao qual ele pertence nesse caso o input da checkbox correspondente.
    }
}

function cadastrarRefeicao() {

    var nomeRefeicao = select_tipoRefeicao.value //28/06 variável que guarda o tipo de refeição selecionado pelo usuário
    var checkboxes = document.querySelectorAll('.caixa');   // Seleciona todas as checkboxes com a classe "caixa"
    var selecionados = []; // Array para armazenar os ids das checkboxes selecionadas


    // Itera sobre todas as checkboxes usando um loop for e verifica se estão marcadas
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {

            selecionados.push(checkboxes[i].id); // Adiciona o id da checkbox ao array selecionados

            var quantidade = document.getElementById('input_' + checkboxes[i].id).value; // Obtém a quantidade inserida no input correspondente a checkbox que foi marcada


            if (quantidade < 1) { // 08/07 Validação para saber se a gramatura selecionada e válida

                alert(`${nome[checkboxes[i].id]} - Selecione um valor válido na gramatura`)
                return false
            }
        }

    }

    // Se nenhum ingrediente foi selecionado exibe o alert
    if (selecionados.length <= 0) {
        alert('Nenhuma checkbox foi selecionada.');
        return false // 08/07 impede de ir para a próxima etapa/ interrompe
    };




    fetch("/usuarios/cadastrarRefeicao", { // 08/07 Fetch sincrono para cadastrar o tipo da refeição que foi selecionado pelo usuário
        method: "POST",//Envia os dados
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ // armazena no formato json todas as informações necessarias para o cadastro da refeição do usuário
            idUsuario: sessionStorage.ID_USUARIO,
            nome: nomeRefeicao,

        }),
    })
        .then(response => { // resposta
            console.log(response)
            if (response.ok) {
                response.json().then(data => {
                    console.log('refeicao cadastrada com sucesso', data);

                    // Itera sobre todas as checkboxes usando um loop for e verifica se estão marcadas
                    for (let i = 0; i < selecionados.length; i++) {

                        var quantidade = document.getElementById('input_' + selecionados[i]).value; // Obtém a quantidade inserida no input correspondente a checkbox que foi marcada


                        // Calcula os valores nutricionais multiplicando dos alimentos selecionados em uma lista, multiplicando cada valor pelo número de porções (quantidade) que o usuário especificou.
                        var nomel = nome[selecionados[i]]
                        var calorial = Number(caloria[selecionados[i]] * quantidade).toFixed(2);
                        var carboidratol = Number(carboidrato[selecionados[i]] * quantidade).toFixed(2);// 27/06
                        var lipideol = Number(lipideo[selecionados[i]] * quantidade).toFixed(2);// 27/06
                        var fibral = Number(fibraAlimentar[selecionados[i]] * quantidade).toFixed(2);// 27/06
                        var proteinal = Number(proteina[selecionados[i]] * quantidade).toFixed(2);
                        var ferrol = Number(ferro[selecionados[i]] * quantidade).toFixed(2);
                        var calciol = Number(calcio[selecionados[i]] * quantidade).toFixed(2);
                        var zincol = Number(zinco[selecionados[i]] * quantidade).toFixed(2);


                        fetch("/usuarios/cadastrarAlimento", { //28/06 Fetch envia uma requisição http para o back end, o fetch foi colocado dentro do for para pegar todos os alimentos (os alimentos e suas respectivas informações nutricionais), que foram selecionados pelo usuário
                            method: "POST",//Envia os dados
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ // 08/07 armazena no formato json todas as informações necessarias para o cadastrar cada alimento selecionado pelo usuário
                                idUsuario: sessionStorage.ID_USUARIO,
                                idRefeicao: data.insertId, // Esse dado pode ser visualizado no terminal quando o refeição é cadastrada(inserida) no banco de dados. No terminal o objeto resultSetHeader contém as informações sobre a operação realizada. A propriedade insertId é uma dessas propriedades e contém o ID do registro que foi inserido.
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
                            .then(response2 => { // resposta
                                console.log(response2)
                                if (response2.ok) { // response2 e data2 para não ocorrer conflitos dos dados que estão sendo armazenados
                                    response2.json().then(data2 => {
                                        console.log('alimento cadastrado com sucesso', data2);

                                    })
                                } else {
                                    response2.text().then(data2 => {
                                        console.log('erro:', data2);

                                    })
                                }
                            })

                            .catch(error => {
                                console.error('Erro ao cadastrar dieta', error);
                            });

                    }
                            window.location.reload();//2207 Atualizar a página após o cadastro da refeição
                   

                })
            } else {
                response.text().then(data => {
                    console.log('erro:', data);
                    alert(`O ${nomeRefeicao} já foi cadastrado`)

                })
            }

        })

        .catch(error => {
            console.error('Erro ao cadastrar dieta', error);
        });


}

function obter() { // 03/07 Funcão para  a criação das tabelas de forma dinâmica na pagina de dieta do dashboard
    const idUsuario = sessionStorage.ID_USUARIO; // Obtém o ID do usuário da sessionStorage
    const refeicoes = [  // 08/07 array que armazena os nomes de todos os tipos de refeção
        "Café da Manhã",
        "Lanche da Manhã",
        "Almoço",
        "Lanche da Tarde",
        "Jantar",
        "Lanche da Noite",
    ]


    // 03/07 Tabela com os alimentos de nutrientes de uma determinada refeição  
    //08/07 o forEach faz com que os fetchs percorram por todas as refeições e as utiliza com parâmetro para poder obter os dados de cada uma
    refeicoes.forEach((opcao) => {

        const refeicao = document.getElementById(opcao); // A refeicao é utilizada para que os elementos HTML sejam adicionados de forma dinâmica na div com o respectivo nome da opção (refeição)
        refeicao.innerHTML = "" // Limpa o HTML para os conteúdos da página não duplicarem, até porque a refeicao.innerHTML está utilizando o += ou seja está adicionando a cada iteração o conteúdo

        fetch(`/usuarios/obter/${idUsuario}/${opcao}`, {

            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                // Verifica  se a resposta da requisição (response) foi bem-sucedida
                if (!response.ok) {
                    throw new Error('Erro ao obter os dados dos alimentos cadastrados');
                }
                return response.json(); //converte os dados da resposta para JSON  e retorna esses dados para o próximo then.
                // 03/07 Adiciona a tabela dentro da div com o id do nome da refeição selecionada pelo usuário    

            })
            .then(data => {
                // 03/07 Tabela do total de nutrientes de uma determinada refeição    
                if (data.length > 0) { // 08/07 Verica que os dados de uma determinada refeição e usuário existem para assim exibir as tabelas
                    console.log(opcao)

                    var tabela = ""
                    tabela = ` 
               <div class="telat">
                <h3>${opcao}</h3>
                </div> 
            
        <table id="table2">
              <thead>
                    <tr>  
                        <th>Alimento</th>  
                        <th>Calorias</th>
                        <th>Carboidratos</th>
                        <th>Lipideos</th>
                        <th>Fibras</th> 
                        <th>Proteinas</th>
                        <th>Ferro</th>
                        <th>Calcio</th>
                        <th>Zinco</th>
                    </tr>
                </thead>
                <tbody>`;

                    // Após todos os valores serem adicionados na variavel tabela, todo o conteúdo é adicionado ao  HTML do elemento com o id refeicao que o usuário selecionou
                    data.forEach(item => {
                        const linha = `
                 
                <tr> 
                    <td>${item.nomeAlimento}</td>
                    <td>${item.caloria} Kcal</td> 
                    <td>${item.carboidrato} g</td>
                    <td>${item.lipideo} g</td>
                    <td>${item.fibra} g</td>
                    <td>${item.proteina} g</td>
                    <td>${item.ferro} g</td>
                    <td>${item.calcio} g</td>
                    <td>${item.zinco} g</td>
                </tr>`;

                        tabela += linha;
                    });
                    //A tabela só pode ser fechada depois do loop, após todos os elementos terem sido inseridos nela 
                    tabela += ` 
            </table>
            `
          
                    refeicao.innerHTML += tabela




                    fetch(`/usuarios/Total/${idUsuario}/${opcao}`, {

                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                        .then(response2 => {

                            
                            // Verifica
                            if (!response2.ok) {
                                throw new Error('Erro ao obter os dados do ranking');
                            }
                            return response2.json();
                        })
                        .then(data2 => {
                            console.log(data2)


                            refeicao.innerHTML +=
                                `
                        <table id="table2">
                            <caption>Total</caption>
                            <thead>
                                <tr>   
                                    <th>Calorias</th>
                                    <th>Carboidratos</th>
                                    <th>Lipideos</th>
                                    <th>Fibras</th> 
                                    <th>Proteinas</th>
                                    <th>Ferro</th>
                                    <th>Calcio</th>
                                    <th>Zinco</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr> 
                                <td>${data2[0].caloriat} Kcal</td>
                                <td>${data2[0].carboidratot} g</td>
                                <td>${data2[0].lipideot} g</td>
                                <td>${data2[0].fibrat} g</td>
                                <td>${data2[0].proteinat} g</td>
                                <td>${data2[0].ferrot} g</td>
                                <td>${data2[0].calciot} g</td>
                                <td>${data2[0].zincot} g</td>
                            </tr>
                             </tbody>
                    </table>
                     <button type="button" class="delet" id="${opcao}">Deletar</button>
                
                  
                    `;

                    document.getElementById(opcao).addEventListener("click", delet); //15/07 Seleciona o elemento HTML com o id ${opcao} e adiciona um evento para quando o elemento (botão) for clicado a função "delet" é executada


                            fetch(`/usuarios/relatorio/${idUsuario}`, { //09/07 Fetch realiza uma requisição GET utilizando o usuário como parâmetro. Caso for bem-sucedido ele retorna as informações nutricionais da dieta (soma das informações nutricionais das refeições), além de retornar o sexo, peso, altura, idade e nivel de ativdade fisica do usuario

                                method: 'GET',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                            })
                                .then(response3 => {
                                    // Verifica
                                    if (!response3.ok) {
                                        throw new Error('Erro ao obter os dados do ranking');
                                    }
                                    return response3.json();
                                })
                                .then(data3 => {
                                    console.log(data3)

                                    //09/07 considerando o nivel de atividade fisica do usuario ele armazena na váriavel "nivel" UM valor que posteriormente e utilizado no calculo do TMB
                                    if (data3[0].nivelAtividade == "Sedentário") {
                                        var nivel = 1.2
                                    } else if (data3[0].nivelAtividade == "Leve") {
                                        var nivel = 1.3
                                    } else if (data3[0].nivelAtividade == "Moderada") {
                                        var nivel = 1.5
                                    } else if (data3[0].nivelAtividade == "Intensa") {
                                        var nivel = 1.7
                                    } else {
                                        var nivel = 1.9

                                    }


                                    //09/07 a TAXA METABOLICA BASAL é calculada por meio de 2 fórmulas que são diferentes dependendo do sexo do usuário e que leva também em consideração o peso, altura, idade e nivel de atividade fisica do usuário. A TBM serve para calcularmos a quantidade recomendada de calorias que deve ser consumida em 1 dia.
                                    if (data3[0].sexo == "Feminino") {
                                        var TMB = ((655 + (9.6 * data3[0].peso) + (1.7 * ((data3[0].altura) * 100)) - (4.7 * data3[0].idade)) * nivel).toFixed(2);

                                    } else {
                                        var TMB = ((66 + (13.7 * data3[0].peso) + (5 * ((data3[0].altura) * 100)) - (6.8 * data3[0].idade)) * nivel).toFixed(2);

                                    }

                                    //09/07 Calcula o percentual de calorias provenientes de cada macronutriente (carboidrato, lipideo e proteina) levando em consideração todas as informações nutricionais da dieta cadastrada pelo usuário

                                    var carboidratoC = (data3[0].carboidrato * 4).toFixed(2)
                                    var carboidratoP = ((carboidratoC / data3[0].caloria) * 100).toFixed(2)
                                    var carboidratoI = (data3[0].caloria * 0.45).toFixed(2) // 11/07 -  Calculo relacionado as diretrizes gerais para a distribuição de macronutrientes em uma dieta saudável =>  quantidade de calorias ideal min
                                    var carboidratoI2 = (data3[0].caloria * 0.65).toFixed(2)  // quantidade de calorias ideal mmax
                                    var carboidratoIG = (carboidratoI / 4).toFixed(2) //gramatura ideal min
                                    var carboidratoIG2 = (carboidratoI2 / 4).toFixed(2) //gramatura ideal max


                                    var lipideoC = (data3[0].lipideo * 9).toFixed(2)
                                    var lipideoP = ((lipideoC / data3[0].caloria) * 100).toFixed(2)
                                    var lipideoI = (data3[0].caloria * 0.20).toFixed(2) // 11/07 quantidade de calorias ideal min
                                    var lipideoI2 = (data3[0].caloria * 0.35).toFixed(2) // quantidade de calorias ideal mmax
                                    var lipideoIG = (lipideoI / 9).toFixed(2) //gramatura ideal min
                                    var lipideoIG2 = (lipideoI2 / 9).toFixed(2) //gramatura ideal max


                                    var proteinaC = (data3[0].proteina * 9).toFixed(2)
                                    var proteinaP = ((proteinaC / data3[0].caloria) * 100).toFixed(2)
                                    var proteinaI = (data3[0].caloria * 0.10).toFixed(2) // 11/07 quantidade de calorias ideal min
                                    var proteinaI2 = (data3[0].caloria * 0.35).toFixed(2) // quantidade de calorias ideal mmax
                                    var proteinaIG = (proteinaI / 9).toFixed(2) //gramatura ideal min
                                    var proteinaIG2 = (proteinaI2 / 9).toFixed(2) //gramatura ideal max


                                    //09/07 Calcula a quantidade de fibras ideal (recomendada) com base na quantidade de calorias da dieta
                                    var fibraR = (data3[0].caloria * 0.014).toFixed(2)   //09/07 14g de fibra a cada 1000kcal consumidas


                                    //Tabela do total de todas as informações nutricionais da dieta + cards com a porcentagem das informações nutricionais 
                                    relatorio.innerHTML =
                                        `
                                <div class="qmaior">

                                    <label>Relatório com base na sua dieta:</label>
                                    <p id = "subtitulo">Resumo nutricional diário do seu consumo de macronutrientes e micronutrientes:</p>

                                    <div class="qcontainer">

                                     <table id = "table3">
                            <thead>
                                <tr>   
                                    <th>Calorias</th>
                                    <th>Carboidratos</th>
                                    <th>Lipideos</th>
                                    <th>Fibras</th> 
                                    <th>Proteinas</th>
                                    <th>Ferro</th>
                                    <th>Calcio</th>
                                    <th>Zinco</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr> 
                                <td>${data3[0].caloria} Kcal</td>
                                <td>${data3[0].carboidrato} g</td>
                                <td>${data3[0].lipideo} g</td>
                                <td>${data3[0].fibra} g</td>
                                <td>${data3[0].proteina} g</td>
                                <td>${data3[0].ferro} g</td>
                                <td>${data3[0].calcio} g</td>
                                <td>${data3[0].zinco} g</td>
                            </tr>
                             </tbody>
                    </table>
                                    
                                       
                                    </div>

                                     <p id = "subtitulo">O percentual e a quantidade de calorias derivadas de cada macronutriente:</p>
                                    
                                    <div class="qcontainer">
                                    
                                        <div class="qmenor">
                                            <span>Carboidrato:</span>
                                            <p>${carboidratoP}%</p>
                                            <b>${carboidratoC} Kcal</b>

                                        </div>

                                        <div class="qmenor">
                                             <span>Lipideo:</span>
                                            <p>${lipideoP}%</p>
                                            <b>${lipideoC} Kcal</b>
                                        </div>

                                        <div class="qmenor">
                                                <span>Proteina:</span>
                                            <p>${proteinaP}%</p>
                                            <b>${proteinaC} Kcal</b>
                                        </div>
                                       
                                    </div>
                                    <div class= "rec">
                                       <p>Recomendações com base no seu perfil:</p>
                                    </div>

                                      <div class="qcontainer">
                                   
                                         <div class="qmenor">
                                            <span>Calorias recomendadas:</span>
                                            <b>${TMB} Kcal</b>
                                        </div>

                                         <div class="qmenor">
                                                <span>Fibra recomendadas:</span>
                                            <b>${fibraR} g</b>
                                        </div>

                                    </div>

                                    <p id= "subrec">Quantidade ideal de macronutrientes baseada na quantidade de calorias da sua dieta.</P>

                                     <div class="qcontainer">

                                        <div class="qmenor">
                                            <span>Carboidrato de 45 a 65%:</span>
                                            <b>${carboidratoI} a ${carboidratoI2} Kcal</b>
                                            <b>${carboidratoIG} a ${carboidratoIG2} g</b>
                                        </div>

                                        <div class="qmenor">
                                            <span>Lipideo de 20 a 35%:</span>
                                            <b>${lipideoI} a ${lipideoI2} Kcal</b>
                                            <b>${lipideoIG} a ${lipideoIG2} g</b>
                                            
                                        </div>

                                        <div class="qmenor">
                                            <span>Proteina de 10 a 35%:</span>
                                            <b>${proteinaI} a ${proteinaI2} Kcal</b>
                                            <b>${proteinaIG} a ${proteinaIG2} g</b>
                                            
                                        </div>
                                        
                                    </div>
                                    <div class = "divref">
                                     <p id = "ref">A recomendação da quantidade de calorias foi baseada no cálculo da Taxa de Metabolismo Basal (TMB). As diretrizes para a ingestão de macronutrientes foram determinadas com base nas recomendações do Food and Nutrition Board do Institutes of Medicine (IOM).<br>
                                    É fundamental destacar que consultas médicas e nutricionais são essenciais para obter recomendações precisas sobre dieta, incluindo macronutrientes e micronutrientes. Esta página é criada apenas para fins educativos e simulação, não devendo ser utilizada para orientação real.<br><br>
                                     <b>Referências:</b><br>
                                    - Calculo da taxa metabólica basal:
                                    <a href=" https://nutriciro.com.br/posts/variados/calculo_calorias.html"
                                    target="_blank"> Clique aqui</a>.<br>
                                        - Diretrizes para a ingestão de macronutrientes:
                                    <a href=" https://pubmed.ncbi.nlm.nih.gov/16004827/ "> Clique aqui</a>.
                          
                                    </p>
                                    </div>
                                </div>

                                `;
    
                                

                                })

                                .catch(error => {
                                    console.error('Erro na requisição do relatório', error);
                                });


                        })

                        .catch(error => {
                            console.error('Erro na requisição do total', error);
                        });
                }

            })
            .catch(error => {
                console.error('Erro na requisição do alimentos', error);
            });
    })


}

function delet(event){/*15/07 
    O event é utilizado como parâmetro para identificar o botão que foi clicado, assim a função delet sabe qual refeição deletar com base no ID do botão clicado.*/
    const idUsuario = sessionStorage.ID_USUARIO; //Usuário que esta logado

    const opcao = event.target.id; //15/07 Captura o ID do elemento clicado e armazena na constante "opcao" que é utilizada como parâmetro no fetch para identificar qual é o nome da refeição que o usuário deseja excluir. O event.target referencia o elemento (botão) que acionou o evento.

    console.log("Opção clicada:", opcao); // Exibe no console para depuração

    fetch(`/usuarios/delet/${idUsuario}/${opcao}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (resposta) {

        if (resposta.ok) {
            window.location = "/dashboard/dieta.html"
        } else if (resposta.status == 404) {
            window.alert("Deu 404!");
        } else {
            throw ("Houve um erro ao tentar ao excluir a refeição - Código da resposta: " + resposta.status);
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

}

document.addEventListener('DOMContentLoaded', obter); //event executa quando o documento HTML quando for carregado completamente e a função obter será executada automaticamente quando esse evento ocorrer 
  

var usuarioModel = require("../models/usuarioModel");


function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        res.json({
                            id: resultadoAutenticar[0].id,
                            email: resultadoAutenticar[0].email,
                            nome: resultadoAutenticar[0].nome,
                            senha: resultadoAutenticar[0].senha
                        });

                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html 
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var cpf = req.body.cpfServer;
    var tipo = req.body.tipoServer;
    var nasc = req.body.nascServer; //04/07
    var sexo = req.body.sexoServer; //04/07
    var altura = req.body.alturaServer;//09/07
    var peso = req.body.pesoServer;//09/07
    var nivel = req.body.nivelServer;//08/07

    //20/06 O tipo esta relacionado com o tipo de alimentação que o usúario selecionou no seu cadastro. Recupera o valor do campo 'tipoServer' do formulário de cadastro e o armazena na variável 'tipo'

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (cpf == undefined) {
        res.status(400).send("Seu cpf está undefined!");
    } else if (tipo == undefined) {
        res.status(400).send("Seu tipo de alimentação está undefined!");
    } else if (nasc == undefined) {
        res.status(400).send("Sua data de aniversário está undefined!");
    } else if (sexo == undefined) {
        res.status(400).send("Seu sexo está undefined!");
    } else if (altura == undefined) {
        res.status(400).send("Sua altura está undefined!");
    } else if (peso == undefined) {
        res.status(400).send("Seu peso está undefined!");
    } else if (nivel == undefined) {
        res.status(400).send("Seu estilo de vida está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha, cpf, tipo, nasc, sexo, altura, peso, nivel)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarRefeicao(req, res) { //08/07 recupera os dados que foram cadastrados pelo usuário e realiza as validações para assim enviar para o usuariosModel.js
    // Crie uma variável que vá recuperar os valores do arquivo dieta.html
    console.log("CadastrarRefeicao",req.body)

    var idUsuario = req.body.idUsuario;
    var nome = req.body.nome; //nome da refeição


    if (idUsuario == undefined) {
        res.status(400).send("o usuário está undefined");
    } else if (nome == undefined) {
        res.status(400).send("o nome da refeição está undefined!");
    }else{


        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarRefeicao(idUsuario, nome)
            .then(
                function (resultado) {
                    console.log(resultado)
                    res.json(resultado);

                }

            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro da dieta Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarAlimento(req, res) { //28/06 recupera os dados que foram cadastrados pelo usuário e realiza as validações para assim enviar para o usuariosModel.js
    // Crie uma variável que vá recuperar os valores do arquivo dieta.html
    console.log("CadastrarAlimento",req.body)

    var idUsuario = req.body.idUsuario;
    var idRefeicao = req.body.idRefeicao;
    var nome = req.body.nome;
    var caloria = req.body.caloria;
    var carboidrato = req.body.carboidrato;
    var lipideo = req.body.lipideo;
    var fibra = req.body.fibra;
    var proteina = req.body.proteina;
    var ferro = req.body.ferro;
    var calcio = req.body.calcio;
    var zinco = req.body.zinco;


    if (idUsuario == undefined) {
        res.status(400).send("o usuário está undefined");
    } else if (idRefeicao == undefined) {
        res.status(400).send("o id da refeição está undefined!");
    } else if (nome == undefined) {
        res.status(400).send("nome do alimento está undefined!");
    } else if (caloria == undefined) {
        res.status(400).send("caloria está undefined!");
    } else if (carboidrato == undefined) {
        res.status(400).send("carboidrato está undefined!");
    } else if (lipideo == undefined) {
        res.status(400).send("lipideo undefined!");
    } else if (fibra == undefined) {
        res.status(400).send("fibra está undefined!");
    } else if (proteina == undefined) {
        res.status(400).send("proteina está undefined!");
    } else if (ferro == undefined) {
        res.status(400).send("ferro está undefined!");
    } else if (calcio == undefined) {
        res.status(400).send("calcio está undefined!");
    } else if (zinco == undefined) {
        res.status(400).send("zinco está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarAlimento(idUsuario, idRefeicao, nome, caloria, carboidrato, lipideo, fibra, proteina, ferro, calcio, zinco)
            .then(
                function (resultado) {
                    console.log(resultado)
                    res.json(resultado);


                }


            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro da dieta Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}



function obter(req, res) {
    const idUsuario = req.params.idUsuario; // 03/07 Obtém o ID do usuário da URL (parâmetro da rota)
    const opcao = req.params.opcao; // Obtém valor do select do tipo de refeição selecionada pelo usuário


    usuarioModel.obter(idUsuario, opcao)
        .then(
            // Se bem-sucedido, envia os dados no formato JSON
            function (resultado) {
                res.status(200).json(resultado);
            }
        )
        .catch(
            function (erro) {
                // Em caso de erro, registra no console e envia uma resposta de erro
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}

function Total(req, res) { // 03/07
    const idUsuario = req.params.idUsuario; // Obtém o ID do usuário da URL (parâmetro da rota)
    const opcao = req.params.opcao;


    usuarioModel.Total(idUsuario, opcao)
        .then(
            // Se bem-sucedido, envia os dados no formato JSON
            function (resultado) {
                res.status(200).json(resultado);
            }
        )
        .catch(
            function (erro) {
                // Em caso de erro, registra no console e envia uma resposta de erro
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}


function relatorio(req, res) { // 09/07
    const idUsuario = req.params.idUsuario; // Obtém o ID do usuário da URL (parâmetro da rota)

    usuarioModel.relatorio(idUsuario)
        .then(
            // Se bem-sucedido, envia os dados no formato JSON
            function (resultado) {
                res.status(200).json(resultado);
            }
        )
        .catch(
            function (erro) {
                // Em caso de erro, registra no console e envia uma resposta de erro
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}


module.exports = {
    autenticar,
    cadastrar,
    cadastrarRefeicao,
    cadastrarAlimento,
    obter,
    Total,
    relatorio

}
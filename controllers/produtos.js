const { json } = require('express');
const db = require ('../database/connection');

module.exports = {
    async listarProdutos(request, response) {           //request: vem do frontend e response: vai para o frontend
        try {
            return response.status(200).json({
                sucesso: true,                          //sucesso:chave e true:valor
                mensagem: 'Lista de produtos.',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: `Erro na requisição. \n ${error}`,
                dados: null
            });
        }
    },
    async cadastrarProdutos(request, response) {           
        try {
            return response.status(200).json({
                sucesso: true,                          
                mensagem: 'Cadastro de produtos.',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: `Erro na requisição. \n ${error}`,
                dados: null
            });
        }
    },
    async editarProdutos(request, response) {          
        try {
            return response.status(200).json({
                sucesso: true,                          
                mensagem: 'Editar produtos.',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: `Erro na requisição. \n ${error}`,
                dados: null
            });
        }
    },
    async apagarProdutos(request, response) {         
        try {
            return response.status(200).json({
                sucesso: true,                       
                mensagem: 'Apagar produtos.',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: `Erro na requisição. \n ${error}`,
                dados: null
            });
        }
    },
}
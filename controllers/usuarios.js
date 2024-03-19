const { json } = require('express');
const db = require ('../database/connection');

module.exports = {
    async listarUsuarios(request, response) {           //request: vem do frontend e response: vai para o frontend
        try {
            return response.status(200).json({
                sucesso: true,                          //sucesso:chave e true:valor
                mensagem: 'Lista de usuários.',
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
    async cadastrarUsuarios(request, response) {           
        try {
            return response.status(200).json({
                sucesso: true,                          
                mensagem: 'Cadastro de usuários.',
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
    async editarUsuarios(request, response) {          
        try {
            return response.status(200).json({
                sucesso: true,                          
                mensagem: 'Editar usuários.',
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
    async apagarUsuarios(request, response) {         
        try {
            return response.status(200).json({
                sucesso: true,                       
                mensagem: 'Apagar usuários.',
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
const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarIngredientes(request, response) {
        try {
            const {ing_nome} = request.body;
            const ingPesq = `%${ing_nome}%`
            const sql = `SELECT 
                ing_id, ing_nome, ing_img, ing_custo_adicional 
                FROM Ingredientes 
                WHERE ing_nome like ?;`;

            const values = [ingPesq];
            const ingredientes = await db.query(sql, values);
            const nItens = ingredientes[0].length;

            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de ingredientes.',
                dados: ingredientes[0],
                nItens
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    },
    async cadastrarIngredientes(request, response) {
        try {
            const { ing_nome, ing_img, ing_custo_adicional } = request.body;
            const sql = `INSERT INTO ingredientes
                (ing_nome, ing_img, ing_custo_adicional) 
                VALUES (?, ?, ?)`;
            const values = [ing_nome, ing_img, ing_custo_adicional];
            const execSql = await db.query(sql, values);
            const ing_id = execSql[0].insertId;

            return response.status(200).json({
                sucesso: true,
                mensagem: 'Cadastro de ingrediente efetuado com sucesso.',
                dados: ing_id
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    },
    async editarIngredientes(request, response) {
        try {
            const { ing_nome, ing_img, ing_custo_adicional } = request.body;
            // parâmetro recebido pela URL via params ex: /usuario/1
            const { ing_id } = request.params;
            const sql = `UPDATE ingredientes SET ing_nome = ?, ing_img = ?, 
                ing_custo_adicional = ? WHERE ing_id = ?;`;
            const values = [ing_nome, ing_img, ing_custo_adicional, ing_id];
            const atualizaDados = await db.query(sql, values);

            return response.status(200).json({
                sucesso: true,
                mensagem: `Ingrediente ${ing_id} atualizado com sucesso!`,
                dados: null
                // mensSql: atualizaDados
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    },
    async apagarIngredientes(request, response) {
        try {
            // parâmetro passado via url na chamada da api pelo front-end
            const { ing_id } = request.params;
            // comando de exclusão
            const sql = `DELETE FROM ingredientes WHERE ing_id = ?`;
            // array com parâmetros da exclusão
            const values = [ing_id];
            // executa instrução no banco de dados
            const excluir = await db.query(sql, values);

            return response.status(200).json({
                sucesso: true,
                mensagem: `Ingrediente ${ing_id} excluído com sucesso`,
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 
}


import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from 'yup';
import Produto from "../models/produto";
import produto_view from "../views/produto_view";


export default {
  async index(request: Request, response: Response) {
    const produtosRepository = getRepository(Produto);
  
    const produtos = await produtosRepository.find();
  
    return response.json(produto_view.renderMany(produtos));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const produtosRepository = getRepository(Produto);

    const produto = await produtosRepository.findOneOrFail(id);
  
    return response.json(produto_view.render(produto));
  },

  async create(request: Request, response: Response) {
    const {
      id, numero, tipo, descricao, tamanho
    } = request.body;

    const produtosRepository = getRepository(Produto);

    const data = {
      id, numero, tipo, descricao, tamanho
    };

    const schema = Yup.object().shape({
      numero: Yup.string().required(),
      tipo: Yup.string().required(),
      descricao: Yup.string().required(),
      tamanho: Yup.string().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const produto = produtosRepository.create(data);
  
    await produtosRepository.save(produto);
  
    return response.status(201)
      .json(produto_view.render(produto));
  }
}
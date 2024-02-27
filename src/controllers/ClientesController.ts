import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from 'yup';
import Cliente from "../models/cliente";
import cliente_view from "../views/cliente_view";


export default {
  async index(request: Request, response: Response) {
    const clientesRepository = getRepository(Cliente);
  
    const clientes = await clientesRepository.find();
  
    return response.json(cliente_view.renderMany(clientes));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const clientesRepository = getRepository(Cliente);

    const cliente = await clientesRepository.findOneOrFail(id);
  
    return response.json(cliente_view.render(cliente));
  },

  async create(request: Request, response: Response) {
    const {
      id, nome, cpf, rg, telefone, endereco, cidade, estado
    } = request.body;

    const clientesRepository = getRepository(Cliente);

    const data = {
      id, nome, cpf, rg, telefone, endereco, cidade, estado
    };

    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      cpf: Yup.string().required(),
      rg: Yup.string().required(),
      telefone: Yup.string().required(),
      endereco: Yup.string().required(),
      cidade: Yup.string().required(),
      estado: Yup.string().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const cliente = clientesRepository.create(data);
  
    await clientesRepository.save(cliente);
  
    return response.status(201)
      .json(cliente_view.render(cliente));
  }
}
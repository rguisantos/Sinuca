import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";


@Entity('clientes')
export default class Cliente {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nome: string;

  @Column()
  cpf: string;

  @Column()
  rg: string;

  @Column()
  telefone: string;

  @Column()
  endereco: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

}
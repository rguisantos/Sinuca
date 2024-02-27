import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";


@Entity('produtos')
export default class Produto {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  numero: string;

  @Column()
  tipo: string;

  @Column()
  descricao: string;

  @Column()
  tamanho: string;

}
import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateCliente1709001890841 implements MigrationInterface {
    name = 'CreateCliente1709001890841'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "clientes" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "nome" varchar NOT NULL, "cpf" varchar NOT NULL, "rg" varchar NOT NULL, "telefone" varchar NOT NULL, "endereco" varchar NOT NULL, "cidade" varchar NOT NULL, "estado" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "clientes"`);
    }

}

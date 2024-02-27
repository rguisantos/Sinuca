import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateProdutos1709002356401 implements MigrationInterface {
    name = 'CreateProdutos1709002356401'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "produtos" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "numero" varchar NOT NULL, "tipo" varchar NOT NULL, "descricao" varchar NOT NULL, "tamanho" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "produtos"`);
    }

}

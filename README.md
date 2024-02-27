#para testar
git clone repositorio
cd diretorio
npm install
npm run typeorm migration:run
npm start


#exemplo para criar novas migrations
npm run typeorm migration:generate -- -n createClientes
npm run typeorm migration:run
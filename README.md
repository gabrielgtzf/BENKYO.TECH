Contrato de Token BENKIO.TECH escrito en AssemblyScript
=======================================================

<!-- MAGIC COMMENT: DO NOT DELETE! Everything above this line is hidden on NEAR Examples page -->

Este proyecto contiene una implementación de un contrato de token similar a [ERC20]. Usaremos la consola para ejecutar comandos para inicializar, enviar y obtener el saldo del token BENKYO.TECH.

Pre-Requisitos
==========

Debes crear su propia cuenta NEAR para poder implementar el contrato en la red de pruebas.
La forma más sencilla de crear una cuenta en NEAR es con NEAR Wallet. NEAR tiene varias redes de desarrollo que operan de forma independiente entre sí con sus propios ID de cuenta. La siguiente guía (En ingles) te ayudará a crear tu cuenta en la red de pruebas de NEAR:

https://docs.near.org/docs/develop/basics/create-account#creating-a-testnet-account

testnet
mainnet



Quick option
---------------

1. Install dependencies:

    yarn

2. Build and deploy this smart contract to a development account. This development account will be created automatically and is not intended for reuse:

    yarn dev


Standard deploy option
----------------------

In this second option, the smart contract will get deployed to a specific account created with the NEAR Wallet.

1. Ensure `near-cli` is installed by running:

       near --version

   If needed, install `near-cli`:

       npm install near-cli -g

2. If you do not have a NEAR account, please create one with [NEAR Wallet](https://wallet.nearprotocol.com). Then, in the project root, login with `near-cli` by following the instructions after this command:

       near login

3. Modify the top of `src/config.js`, changing the `CONTRACT_NAME` to be the NEAR account that you just used to log in.

       const CONTRACT_NAME = process.env.CONTRACT_NAME || 'YOUR_ACCOUNT_NAME_HERE'; /* TODO: fill this in! */

4. Start the example!

       yarn start


Exploring The Code
==================

1. The backend code lives in the `/assembly` folder. This code gets deployed to
   the NEAR blockchain when you run `yarn deploy:contract`. This sort of
   code-that-runs-on-a-blockchain is called a "smart contract" – [learn more
   about NEAR smart contracts][smart contract docs].
2. The frontend code lives in the `/src` folder.
   [/src/index.html](/src/index.html) is a great place to start exploring. Note
   that it loads in `/src/main.js`, where you can learn how the frontend
   connects to the NEAR blockchain.
3. Tests: there are different kinds of tests for the frontend and backend. The
   backend code gets tested with the [asp] command for running the backend
   AssemblyScript tests, and [jest] for running frontend tests. You can run
   both of these at once with `yarn test`.

Both contract and client-side code will auto-reload as you change source files.

  [smart contract docs]: https://docs.nearprotocol.com/docs/roles/developer/contracts/assemblyscript
  [asp]: https://www.npmjs.com/package/@as-pect/cli
  [jest]: https://jestjs.io/

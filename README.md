Contrato de Token BENKIO.TECH escrito en AssemblyScript
=======================================================

<!-- MAGIC COMMENT: DO NOT DELETE! Everything above this line is hidden on NEAR Examples page -->

Este proyecto contiene una implementación de un contrato de token similar a [ERC20]. Usaremos la consola para ejecutar comandos para inicializar, enviar y obtener el saldo del token BENKYO.TECH.

Pre-Requisitos
==========

Debes crear su propia cuenta NEAR para poder implementar el contrato en la red de pruebas.
La forma más sencilla de crear una cuenta en NEAR es con NEAR Wallet. NEAR tiene varias redes de desarrollo que operan de forma independiente entre sí con sus propios ID de cuenta. La siguiente guía (En ingles) te ayudará a crear tu cuenta en la red de pruebas de NEAR:

https://docs.near.org/docs/develop/basics/create-account#creating-a-testnet-account

Iniciemos
---------------
1. Clona el proyecto:

    `git clone https://github.com/gabrielgtzf/BENKYO.TECH.git`
    
2. Instala las dependencias:

    `cd BENKYO.TECH && yarn`

3. Procedemos a compilar:

    `yarn asb --verbose`


Ahora vamos con el despliegue del contrato
----------------------

El contrato inteligente se implementará en la cuenta específica creada con NEAR Wallet.

1. Corrobora que `near-cli` ya esta instalado ejecutando el siguiente comando:

    `near --version`

   Si es necesario, instala `near-cli`:

    `npm install near-cli -g`

2. Ahora ingresamos con `near-cli` siguiendo las instrucciones ejecutando el siguiente comando:

    `near login`

3. Modifica el inicio del archivo `src/config.js`, cambiando `ACCOUNT_NAME` por tu cuenta de NEAR que acabas de usar para ingresar.

    `const ACCOUNT_NAME = 'YOUR_ACCOUNT_NAME_HERE';`

4. Hacemos el despliegue:

    `near deploy`

5. Inicia el ejemplo!

    `yarn start`


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

Contrato de Token BENKIO.TECH escrito en AssemblyScript
=======================================================

<!-- MAGIC COMMENT: DO NOT DELETE! Everything above this line is hidden on NEAR Examples page -->

Este proyecto contiene una implementación de un contrato de token similar a [ERC20]. Usaremos la consola para ejecutar comandos para inicializar, enviar y obtener el saldo del token BENKYO.TECH.

Pre-Requisitos
==============

1. Para poder implementar el contrato en la red de pruebas, debes contar con una cuenta de pruebas de NEAR .testnet

2. Si no cuantas con esta aún, la forma más sencilla es con NEAR Wallet. NEAR tiene varias redes de desarrollo que operan de forma independiente entre sí con sus propios ID de cuenta. La siguiente guía (En ingles) te ayudará a crear tu cuenta .testnet:

https://docs.near.org/docs/develop/basics/create-account#creating-a-testnet-account

3. Debes instalar `near cli` si aun no lo tienes: 

    `npm install near-cli -g`

Ahora que tenemos todo podemos iniciar
======================================
1. Clona el proyecto:

    `git clone https://github.com/gabrielgtzf/BENKYO.TECH.git`
    
2. Instala las dependencias:

    `cd BENKYO.TECH && yarn`

3. Procedemos a compilar:

    `yarn asb --verbose`

Ahora vamos con el despliegue del contrato
------------------------------------------

El contrato inteligente se implementará en la cuenta específica creada con NEAR Wallet.

1. Modifica el archivo `src/config.js` para que incuyas tu cuenta de NEAR que acabas de usar para ingresar.

    `const ACCOUNT_NAME = 'YOUR_ACCOUNT_NAME_HERE';`

2. Ahora ingresamos con `near-cli` siguiendo las instrucciones ejecutando el siguiente comando:

    `near login`

3. Hacemos el despliegue:

    `near deploy`

4. Iniciamos sesion para poder ejecutar los comandos del contrato:

    `parcel src/index.html`

Comandos que podemos ejecutar
-----------------------------

1. Iniciar el contrato:

    `await contract.init({initialOwner: walletAccount.getAccountId()})`

2. Checar el balance:

    `await contract.balanceOf({tokenOwner: walletAccount.getAccountId()})`

3. Enviar fondos:

    `await contract.transfer({to: 'bob.near', tokens: '1000'})`

Pruebas
==================

Pudes correr las pruebas ejecutando el siguiente comando:

`yarn asp`
  
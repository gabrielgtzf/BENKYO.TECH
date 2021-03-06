Contrato de Token BENKYO.TECH escrito en AssemblyScript
=======================================================

<!-- MAGIC COMMENT: DO NOT DELETE! Everything above this line is hidden on NEAR Examples page -->

Este proyecto contiene una implementación de un contrato de token similar a [ERC20]. Usaremos la consola para ejecutar comandos para inicializar, enviar y obtener el saldo del token BENKYO.TECH.

Este token será utilizado para cambiarlo dentro de la plataforma de BENKYO.TECH. Esta plataforma se utilizará como un portal de estudios donde los aspirantes intercambiarán los tokens por cursos, por conocimientos entre los mismos estudiantes, por complir objetivos de planes de estudio, etc.

Puedes ir a https://www.benkyo.tech/ (En construcción).

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

    `cd BENKYO.TECH && yarn install`

3. Procedemos a compilar:

    `yarn asb`

Ahora vamos con el despliegue del contrato
------------------------------------------

El contrato inteligente se implementará en la cuenta específica creada con NEAR Wallet.

1. Ahora ingresamos con `near-cli` siguiendo las instrucciones ejecutando el siguiente comando:

    `near login`

2. Vamos a establecer una variable de entorno para la identificación de tu cuenta .testnet:

    `ID=your_account_name.testnet && echo $ID`

3. Hacemos el despliegue:

    `near deploy --wasmFile build/release/benkyo-tech.wasm --accountId $ID`

4. Inicializamos el contrato con el siguiente comando:

    `OWNER=$ID yarn init:contract`

Comandos que podemos ejecutar
-----------------------------

1. Checar el subministro total de tokens:

    `CN=$ID yarn total:supply`

2. Checar el balance. Sustituye `account_name` por la cuenta deseada:

    `CN=$ID OWN=account_name.testnet yarn balance:of`

3. Enviar fondos. Sustituye `account_name` por la cuenta a la cual deseas enviar los fondos y `tokens_to_send` por la cantidad de tokens BENKYO.TECH a enviar:

    `CN=$ID TO=account_name.testnet TS=tokens_to_send yarn transfer`

4. Aprobar retiro de fondos. Sustituye `account_name` por la cuenta a la cual deseas la aprobación de los fondos y `tokens_to_approve` por la cantidad de tokens BENKYO.TECH a aprobar:

    `CN=$ID SPN=account_name.testnet TA=tokens_to_approve yarn approve`

5. Verificar los permisos de aprobación de fondos. Sustituye `account_name` y `spender` por las cuentas deseadas:

    `CN=$ID OWN=account_name.testnet SPN=spender.testnet yarn allowance`    

6. Enviar fondos desde una cuenta específica. Sustituye `from_account` por la cuenta que tiene los fondos, `to_account` por la cuenta que los recibirá y `tokens_to_send` por la cantidad de tokens BENKYO.TECH a transferir:

    `CN=$ID FROM=from_account.testnet TO=to_account.testnet TS=tokens_to_send yarn transfer:from`


Pruebas
==================

Pudes correr las pruebas ejecutando el siguiente comando:

`yarn asp --verbose`
  
Equipo de desarrollo
====================

1. Gabriel Gutiérrez
2. Samuel Nava
3. Nicolás Lizarazo 
const path = require("path");
const nearAPI = require("near-api-js");

// creates a keyStore that searches for keys in .near-credentials
// requires credentials stored locally by using a NEAR-CLI command: `near login` 
// https://docs.near.org/docs/tools/near-cli#near-login

const { connect, keyStores } = nearAPI;
const homedir = require("os").homedir();
const CREDENTIALS_DIR = ".near-credentials";
const credentialsPath = path.join(homedir, CREDENTIALS_DIR);
const keyStore = new keyStores.UnencryptedFileSystemKeyStore(credentialsPath);

const config = {
  networkId: "testnet",
  keyStore,
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.testnet.near.org",
  helperUrl: "https://helper.testnet.near.org",
  explorerUrl: "https://explorer.testnet.near.org",
};

async function main() {
    const { CN: accStr, TO: trnStr, TS: amount } = process.env;
    console.log("Owner: ", accStr, " To: ", trnStr, " Ammount: ", amount);

    // connect to near
    const near = await connect(config);
    const account = await near.account(accStr);
    
    // Initializing our contract APIs by contract name and configuration.
    const contract = new nearAPI.Contract(
        account, // the account object that is connecting
        accStr,
        {
            viewMethods: ["totalSupply", "balanceOf", "allowance"],
            changeMethods: ["init", "transfer", "approve", "transferFrom"],
            sender: account,
        }
    );

    console.log("Iniciando la transferencia de tokens a ", trnStr);
    const trnsRes = await contract.transfer({to: trnStr, tokens: amount});
    if(trnsRes) {
        console.log("Se ha realizado la transferencia de tokens BENKYO.TECH a ", trnStr); 
    }
    
}

if (require.main === module) {
  main().then(() => process.exit(0))
    .catch(error => { console.error(error); process.exit(1); });
}
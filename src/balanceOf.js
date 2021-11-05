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
    const { CN: accStr } = process.env;
    console.log("Owner: ", accStr);
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

    const balRes = await contract.balanceOf({tokenOwner: accStr});
    console.log("Balance total de BENKYO.TECH ", balRes);
}

if (require.main === module) {
  main().then(() => process.exit(0))
    .catch(error => { console.error(error); process.exit(1); });
}
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

async function connectToNear(accStr) {
    // connect to near
    const near = await connect(config);
    const account = await near.account(accStr);
    
    return account;
}
 
async function nearContract(accStr) {
    const account = await connectToNear(accStr);
    // Initializing our contract APIs by contract name and configuration.
    const contract = new nearAPI.Contract(
        account,
        accStr,
        {
            viewMethods: ["totalSupply", "balanceOf", "allowance"],
            changeMethods: ["init", "transfer", "approve", "transferFrom"],
            sender: account,
        }
    );

    return contract;
}
module.exports = { 
    connectToNear,
    nearContract,
};
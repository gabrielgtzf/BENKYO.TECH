const { nearContract } = require("./connection");

async function main() {
    const { CN: accStr, OWN: accOwn, SPN: spnStr } = process.env;
    console.log("Contract: ", accStr, " TokenOwner: ", accOwn, " Spender: ", spnStr);

    const contract = await nearContract(accStr);

    const spnRes = await contract.allowance({tokenOwner: accOwn, spender: spnStr});
    if(spnRes == 0)
        console.log("No se encontraron approves del par " + accOwn + ":" + spnStr);
    else
        console.log("Se encontraron approves del par " + accOwn + ":" + spnStr + " por " + spnRes + " tokens BENKYO.TECH");
    
}

if (require.main === module) {
  main().then(() => process.exit(0))
    .catch(error => { console.error(error); process.exit(1); });
}
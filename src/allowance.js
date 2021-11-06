const { nearContract } = require("./connection");

async function main() {
    const { CN: accStr, OWN: accOwn, SPN: spnStr } = process.env;
    console.log("Contract: ", accStr, " TokenOwner: ", accOwn, " Spender: ", spnStr);

    const contract = await nearContract(accStr);

    console.log("Concediendo permiso de trasnferencia de tokens a ", spnStr);
    const spnRes = await contract.allowance({tokenOwner: accOwn, spender: spnStr});
    if(spnRes) {
        console.log("Se ha concedido el permiso de trasnferencia de tokens BENKYO.TECH a ", spnStr); 
    }
}

if (require.main === module) {
  main().then(() => process.exit(0))
    .catch(error => { console.error(error); process.exit(1); });
}
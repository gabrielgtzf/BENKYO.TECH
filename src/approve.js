const { nearContract } = require("./connection");

async function main() {
    const { CN: accStr, SPN: spnStr, TA: amount } = process.env;
    console.log("Contract: ", accStr, " Spender: ", spnStr, " Ammount: ", amount);

    const contract = await nearContract(accStr);

    console.log("Iniciando la aprobación de tokens a ", spnStr);
    const spnRes = await contract.approve({spender: spnStr, tokens: amount});
    if(spnRes) {
        console.log("Se ha realizado la aprobación de tokens BENKYO.TECH a ", spnStr); 
    }
}

if (require.main === module) {
  main().then(() => process.exit(0))
    .catch(error => { console.error(error); process.exit(1); });
}
const { nearContract } = require("./connection");

async function main() {
    const { CN: accStr, FROM: fromStr, TO: toStr, TS: amount } = process.env;
    console.log("Contract: ", accStr, " From: ", fromStr, " To: ", toStr, " Ammount: ", amount);

    const contract = await nearContract(accStr);

    console.log("Iniciando la transferencia de tokens desde ", fromStr, " hacia ", toStr);
    const trnsRes = await contract.transferFrom({from: fromStr, to: toStr, tokens: amount});
    if(trnsRes) {
        console.log("Se ha realizado la transferencia de tokens BENKYO.TECH de ", fromStr, " a ", toStr); 
    }
}

if (require.main === module) {
  main().then(() => process.exit(0))
    .catch(error => { console.error(error); process.exit(1); });
}
const { nearContract } = require("./connection");

async function main() {
    const { CN: accStr, TO: trnStr, TS: amount } = process.env;
    console.log("Contract: ", accStr, " To: ", trnStr, " Ammount: ", amount);

    const contract = await nearContract(accStr);

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
const { nearContract } = require("./connection");

async function main() {
    const { CN: accStr } = process.env;
    console.log("Contract: ", accStr);

    const contract = await nearContract(accStr);

    const balRes = await contract.totalSupply({});
    console.log("Suministro total de BENKYO.TECH ", balRes);
}

if (require.main === module) {
  main().then(() => process.exit(0))
    .catch(error => { console.error(error); process.exit(1); });
}
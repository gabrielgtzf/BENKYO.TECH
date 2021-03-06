const { nearContract } = require("./connection");

async function main() {
    const { CN: accStr, OWN: accOwn } = process.env;
    console.log("Contract: ", accStr, " TokenOwner: ", accOwn);
    
    const contract = await nearContract(accStr);

    const balRes = await contract.balanceOf({tokenOwner: accOwn});
    console.log("Balance total de BENKYO.TECH ", balRes);
}

if (require.main === module) {
  main().then(() => process.exit(0))
    .catch(error => { console.error(error); process.exit(1); });
}
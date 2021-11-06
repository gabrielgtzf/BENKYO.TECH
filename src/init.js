const { nearContract } = require("./connection");

async function main() {
    const { OWNER: accStr } = process.env;
    console.log("Owner: " + accStr);
   
    const contract = await nearContract(accStr);

    console.log("Inicializando contrato BENKYO.TECH...");
    const initRes = await contract.init({initialOwner: accStr});
    console.log("contrato inicializado correctamente...", initRes);
    const balRes = await contract.balanceOf({tokenOwner: accStr});
    const tsRes = await contract.totalSupply({});
    console.log("Subministro total de BENKYO.TECH ", tsRes, " Balance: ", balRes);
}

if (require.main === module) {
  main().then(() => process.exit(0))
    .catch(error => { console.error(error); process.exit(1); });
}
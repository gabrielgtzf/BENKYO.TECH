import { init, balanceOf, totalSupply, transferFrom } from "..";
import { VM } from "near-sdk-as";

const gabo: string = "gabo";
const nicolas: string = "nicolas";

function logs(): string[] {
  return VM.outcome().logs;
}

describe("El Token BENKYO.TECH deberia...", () => {
  it("Crearse sin ningún problema", () => {
    init(gabo);
    expect(logs()).toContainEqual("initialOwner: " + gabo);
    expect(balanceOf(gabo)).toBe(U64.parseInt(totalSupply()), "el balance inicial deberia de ser " + totalSupply());
  });

  throws("Lanzar error si intentas transferir tokens BENKYO.TECH entre cuentas inexistentes", () => {
    transferFrom(nicolas, gabo, 1);
  });
});

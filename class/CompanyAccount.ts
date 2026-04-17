import { DioAccount } from "./DioAccount.js";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (valor: number): void => {
    if (this.validateStatus()) {
      this.addToBalance(valor);
      console.log("Voce pegou um empréstimo");
    }
  };
}

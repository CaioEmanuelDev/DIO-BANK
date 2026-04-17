import { DioAccount } from "./DioAccount.js";

export class DepositAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (valor: number): void => {
    if (this.validateStatus()) {
      this.addToBalance(valor + 10);
      console.log("Voce depositou (Conta com bônus)");
    }
  };
}

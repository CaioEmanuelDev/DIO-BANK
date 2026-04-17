export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }


  getName = (): string => {
    return this.name;
  };

  deposit = (valor: number): void => {
    if (this.validateStatus()) {
      this.balance += valor;
      console.log("Voce depositou");
    }
  };


  withdraw = (valor: number): void => {
    if (this.validateStatus()) {
      if (this.getBalanceValue() > valor) {
        this.balance -= valor;
        console.log("Voce sacou");
        return;
      }

      throw new Error(
        "O valor do saque, não pode ser maior que o saldo total.",
      );
    }
  };

  getBalance = (): void => {
    console.log(this.balance);
  };

  protected addToBalance = (valor: number): void => {
    this.balance += valor;
  };

  protected getBalanceValue = (): number => {
    return this.balance;
  };

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}

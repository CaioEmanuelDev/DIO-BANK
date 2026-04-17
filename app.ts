import { CompanyAccount } from "./class/CompanyAccount.js";
import { DepositAccount } from "./class/DepositAccount.js";
import { PeopleAccount } from "./class/PeopleAccount.js";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);
console.log(peopleAccount);
peopleAccount.deposit(100);

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
companyAccount.deposit(100);
companyAccount.getLoan(20);
companyAccount.withdraw(10);
console.log(companyAccount);

const depositAccount: DepositAccount = new DepositAccount("Conta teste", 1234);
depositAccount.deposit(100);
depositAccount.getBalance();

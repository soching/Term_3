type bankAccount = {
  balance: number,
  name: string
}

function debit(account: bankAccount, valueDollar:number){
  // TODO
  account.balance+=valueDollar;
}

function credit(account: bankAccount, valueDollar:number){
  //TODO
  account.balance -= valueDollar;
}
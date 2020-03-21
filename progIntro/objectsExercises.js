/*
 * Programming Quiz: Umbrella (7-1)
 

var umbrella = {
  color: "pink",
  isOpen: true,
  open: function() {
      if (umbrella.isOpen === true) {
          return "The umbrella is already opened!";
      } else {
          umbrella.isOpen = true;
          return "Julia opens the umbrella!";
      }
  },
  close: function(){
    if (umbrella.isOpen === false) {
      return "The umbrella is already closed!";
    } else {
      umbrella.isOpen = false;
      return "Julia closed the umbrella!";
  }
  }
};



var user = {
  email: "user@example.com",
  firstName: "first",
  lastName: "last"
};

console.log(user.email);

/*
 * Programming Quiz: Menu Items (7-2)

// your code goes here
var breakfast = {
  name: "The Lumberjack",
  price: 9.95,
  ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancake"]
};

console.log(breakfast.ingredients);


var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
      if (amount > 0) {
          savingsAccount.balance += amount;
      }
  },
  withdraw: function removeMoney(amount) {
      var verifyBalance = savingsAccount.balance - amount;
      if (amount > 0 && verifyBalance >= 0) {
          savingsAccount.balance -= amount;
      }
  },
  printAccountSummary: function summary(){
   message = ('Welcome! \nYour balance is currently $' + this.balance + ' and your interest rate is ' + this.interestRatePercent + ".");
   return message;
  }

};

console.log(savingsAccount.printAccountSummary());

*/




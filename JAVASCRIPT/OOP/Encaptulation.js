class BankAccount {
    #balance = 0;   // Private field

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        this.#balance -= amount;
    }

    showBalance() {
        console.log(this.#balance);
    }
}

let acc = new BankAccount();

acc.deposit(5000);
acc.withdraw(1000);
acc.showBalance();
acc.withdraw(1000);
acc.showBalance();
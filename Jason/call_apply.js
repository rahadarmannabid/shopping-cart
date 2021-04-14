const normalPerson={
    firstName: 'Rahim',
    lastName:'Uddin',
    salary:15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },

    chargeBill: function(amount, tips, tax){
        this.salary=this.salary- amount- tips- tax;
        return this.salary;
    }
}

// console.log(normalPerson.firstName);
// normalPerson.chargeBill(150);
// console.log(normalPerson.salary);


const heroPerson={
    firstName: 'Hero',
    lastName:'Balam',
    salary:25000,
}


//normalPerson.chargeBill();

// const heroChargeBill= normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill (1000)
// heroChargeBill (1000)
// console.log(heroPerson.salary)

// normalPerson.chargeBill.call(normalPerson,1000,1000,2000);
// console.log(normalPerson.salary);

// normalPerson.chargeBill.call(heroPerson,1000,1000,2000);
// console.log(heroPerson.salary);


normalPerson.chargeBill.apply(heroPerson, [3000, 300, 30]);
console.log(heroPerson.salary);
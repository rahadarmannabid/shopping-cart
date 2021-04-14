var name="kuddus"
function add(num1,num2)
{
    var result= num1+num2;
    console.log('result inside',result);

    return result;

}

var sum= add(10,15)



class Person{
    constructor(firstName, lastName, salary){
        this.firstName= firstName;
        this.lastName= lastName;
        this.salary= salary;
    }
}

const heroPerson= new Person("hero", "Balam", 2000);
console.log(heroPerson)

const friendlyPerson= new Person("hero", "kalam", 1000);
console.log(friendlyPerson)
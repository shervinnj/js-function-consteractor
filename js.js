function Name(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;

this.getFullName=function(){
    return this.firstName+" "+this.lastName
}
}
let family=new Name("shervin","nj");

console.log(family.getFullName());


//estefadeh az this be in soratreh ke 
//mogeh astefadeh khodesh ye object mimooneh 
//masalan agar bekhaym ye object add konim to array
// migim let array.new array
//this hamin karo anjam mideh 
// option pish farzeh java script



//+++++++++++++++++ or+++++++++++++++++++
function Person(FirstName,LastName){

this.FirstName=FirstName;
this.LastName=LastName;


}

Person.prototype.get=function(){
    return `${this.FirstName} ${this.LastName}`
}



 
let fully=new Person("asghar","naser");




console.log(fully.get());



/// ravashe sahihesh hamineh ke az prototype astefadeh konim
//
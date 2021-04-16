 function Person(firstname,lastname,Age){
    this.firstname=firstname;
    this.lastname=lastname;
     this.Age=Age;    
     this.updateAge=function(){        
     return this.Age;
         };
  }

   let Person01=new Person("Mercy","Otieno",20);
 console.log(Person01.updateAge());
 let Person02=new Person("Grace", "Akinyi",35);
 console.log(Person02.updateAge());
  let Person03=new Person("Dorothy","Akoth",20);
  console.log(Person03.updateAge());



class Car{

    constructor(model){
         this.model=model;
        
        
     }
    getType(){
        console.log(this.model);
        
     }
    
    
 }
 let car=new Car("Benz");
 car.getType();



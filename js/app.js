'use strict'
// var Hors= ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function locations(name,min,max,AvgCookie,result){
this.name=name;
this.min=min;
this.max=max;
this.AvgCookie=AvgCookie;
this.result=result;

this.f1=function()
{
  let numCus = Math.floor(Math.random() * (this.max - this.min) + this.min);
    
    return numCus;
};
this.f2=function()
{
  let x=  Math.floor(this.AvgCookie * this.numCus);
  return x;
};
this.f3=function()
{
  var Hors= ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  let sum = 0;
    let element = document.getElementById(this.name);
    var tbl = document.createElement("table");
    element.appendChild(tbl);
    var tblBody = document.createElement("tbody");
    element.appendChild(tblBody);

    let city = document.createElement('td');
    city.innerHTML = 'city name';
    element.appendChild(city);
    let ci = document.createElement('td');
    ci.innerHTML = 'Seattle';
    element.appendChild(ci);
    for (let i = 0; i < 14; i++) {
      
      sum = sum + this.result[i];

      let a = document.createElement('tr');
      let tag = document.createElement('th');
      tag.innerHTML = this.Hors[i]  ;
      element.appendChild(a);
      element.appendChild(tag);
      let b = document.createElement('tr');
      let s = document.createElement('td');
      s.innerHTML = this.result[i];
      element.appendChild(s);
      element.appendChild(b);
      
    }
};

}
let sea = new locations('Seattle',23, 65 , 6.3  );
console.log(sea.f3());



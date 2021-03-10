'use strict';
var Hors = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let element = document.getElementById('ccc');
let tbl = document.createElement("table");
element.appendChild(tbl);
let headd = document.createElement('tr');
let city = document.createElement('td');
city.innerHTML = 'city name';
tbl.appendChild(headd);
headd.appendChild(city);

for (let i = 0; i < Hors.length; i++) {
  let hou = document.createElement('td');
  hou.innerHTML = Hors[i];
  headd.appendChild(hou);
}
let m = document.createElement('td');
m.innerHTML = 'total per city';
headd.appendChild(m);
var totalEachHour =[0,0,0,0,0,0,0,0,0,0,0,0,0,0];
function locations(name, min, max, AvgCookie) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.AvgCookie = AvgCookie;
  this.result = [];

  this.f1 = function () {
    let numCus = Math.floor(Math.random() * (this.max - this.min) + this.min);

    return numCus;
  };
  this.f2 = function () {
    let x = Math.floor(this.AvgCookie * this.f1());
    return x;
  };
  this.f3 = function () {
    // this.f2();
    let sum = 0;

    let tag = document.createElement('tr');
    tbl.appendChild(tag);
    tag.innerHTML = this.name;
    for (let i = 0; i < Hors.length; i++) {
      this.result.push(this.f2());
      let a = document.createElement('td');
      a.innerHTML = this.result[i];
      tag.appendChild(a);
      sum = sum + this.result[i];
      totalEachHour[i] +=  this.result[i];
    }
   
    let t = document.createElement('td');
    tag.appendChild(t);
    t.innerHTML = sum;
  };
  this.f3();

}
let Seattle = new locations('Seattle', 23, 65, 6.3);
let Tokyo = new locations('Tokyo', 3, 24, 1.2);
let Dubai = new locations('Dubai', 11, 38, 3.7);
let Paris = new locations('Paris', 20, 38, 2.3);
let Lima = new locations('Lima', 2, 16, 4.6);
let show = document.getElementById('formid');
// console.log(show);

show.addEventListener('submit',function(event)
{
  event.preventDefault();
//   let newrow = document.createElement('tr');
// let ded = document.createElement('td');
// ded.innerHTML = event.target.cn.value;
// tbl.appendChild(newrow);
// newrow.appendChild(ded);
 let xz = new locations(event.target.cn.value,event.target.min.value, event.target.mxm.value, event.target.cperc.value);

  console.log(event.target.cn.value);
  console.log(event.target.min.value);
  console.log(event.target.mxm.value);
  console.log(event.target.cperc.value);
})
// 2d array
let tft =0; 
// console.log(totalEachHour)
let foot = document.createElement('tfoot');
let x = document.createElement('td');
x.innerHTML = 'total per hour';
tbl.appendChild(foot);
foot.appendChild(x);
for (let i = 0; i < Hors.length; i++) {
  let saif = document.createElement('td');
  saif.innerHTML = totalEachHour[i];
   tft = tft+ totalEachHour[i];
  foot.appendChild(saif);
}
let y = document.createElement('td');
y.innerHTML = tft;
foot.appendChild(y);
// console.log(tft)


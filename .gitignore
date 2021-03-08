'use strict'
var Seattle = {
   name: 'Seattle',
  min: 23,
  max: 65,
  AvgCookie: 6.3,
  workingHors: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  result: [],
  number_of_cutomers_hourly: function () {
    let numberCustomers = Math.floor(Math.random() * (this.max - this.min) + this.min);
    
    return numberCustomers;
    
  },
  
  simulatedAmountCookies: function () {
    return Math.floor(this.Avg_Cookie * this.number_of_cutomers_hourly());
  },
  show_the_result: function () {
    let sum = 0;
    let element = document.getElementById(this.name);
    for (let i = 0; i < this.workingHors.length; i++) {
      this.result.push(this.simulatedAmountCookies());
      sum = sum + this.result[i];
      let tag = document.createElement('li');
      tag.innerHTML = this.workingHors[i] + ' ' + this.result[i];
      element.appendChild(tag);
    }
    let tag = document.createElement('li');
    tag.innerHTML = 'Total is : ' + sum;
    element.appendChild(tag);
    console.log(sum);
  }
};

var Tokyo = {
   name: Tokyo ,
    Min :3,
    max:24,
    AvgCookie:1.2 ,
    workingHors: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    result: [],
    number_of_cutomers_hourly: function () {
      let numberCustomers = Math.floor(Math.random() * (this.max - this.min) + this.min);
     
      return numberCustomers;
    },
    simulatedAmountCookies: function () {
      return Math.floor(this.AvgCookie * this.number_of_cutomers_hourly());
    },
    show_the_result: function () {
      let sum = 0;
      let element = document.getElementById(this.name);
      for (let i = 0; i < this.workingHors.length; i++) {
        this.result.push(this.simulatedAmountCookies());
        sum = sum + this.result[i];
        let tag = document.createElement('li');
        tag.innerHTML = this.workingHors[i] + ' ' + this.result[i];
        element.appendChild(tag);
      }
      let tag = document.createElement('li');
      tag.innerHTML = 'Total is : ' + sum;
      element.appendChild(tag);
      console.log(sum);
    },
   };
 var Dubai = {
    name : Dubai,
    Min :11,
    max:38,
    AvgCookie:3.7 ,
    workingHors: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    result: [],
    number_of_cutomers_hourly: function () {
      let numberCustomers = Math.floor(Math.random() * (this.max - this.min) + this.min);
     
      return numberCustomers;
    },
    simulatedAmountCookies: function () {
      return Math.floor(this.AvgCookie * this.number_of_cutomers_hourly());
    },
    show_the_result: function () {
      let sum = 0;
      let element = document.getElementById(this.name);
      for (let i = 0; i < this.workingHors.length; i++) {
        this.result.push(this.simulatedAmountCookies());
        sum = sum + this.result[i];
        let tag = document.createElement('li');
        tag.innerHTML = this.workingHors[i] + ' ' + this.result[i];
        element.appendChild(tag);
      }
      let tag = document.createElement('li');
      tag.innerHTML = 'Total is : ' + sum;
      element.appendChild(tag);
      console.log(sum);
    },
   
       
    };

var Paris = {
   name: Paris,
     Min :20,
     max:38,
     AvgCookie:2.3 ,
     workingHors: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    result: [],
    number_of_cutomers_hourly: function () {
      let numberCustomers = Math.floor(Math.random() * (this.max - this.min) + this.min);
     
      return numberCustomers;
    },
    simulatedAmountCookies: function () {
      return Math.floor(this.AvgCookie * this.number_of_cutomers_hourly());
    },
    show_the_result: function () {
      let sum = 0;
      let element = document.getElementById(this.name);
      for (let i = 0; i < this.workingHors.length; i++) {
        this.result.push(this.simulatedAmountCookies());
        sum = sum + this.result[i];
        let tag = document.createElement('li');
        tag.innerHTML = this.workingHors[i] + ' ' + this.result[i];
        element.appendChild(tag);
      }
      let tag = document.createElement('li');
      tag.innerHTML = 'Total is : ' + sum;
      element.appendChild(tag);
      console.log(sum);
    },
    };
 var Lima = {
    name: Lima,
    Min :2,
    max:16,
  AvgCookie:4.6 ,
  workingHors: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  result: [],
  number_of_cutomers_hourly: function () {
    let numberCustomers = Math.floor(Math.random() * (this.max - this.min) + this.min);
   
    return numberCustomers;
  },
  simulatedAmountCookies: function () {
    return Math.floor(this.AvgCookie * this.number_of_cutomers_hourly());
  },
  show_the_result: function () {
    let sum = 0;
    let element = document.getElementById(this.name);
    for (let i = 0; i < this.workingHors.length; i++) {
      this.result.push(this.simulatedAmountCookies());
      sum = sum + this.result[i];
      let tag = document.createElement('li');
      tag.innerHTML = this.workingHors[i] + ' ' + this.result[i];
      element.appendChild(tag);
    }
    let tag = document.createElement('li');
    tag.innerHTML = 'Total is : ' + sum;
    element.appendChild(tag);
    console.log(sum);
  },

};
Seattle.show_the_result();
Tokyo.show_the_result();
Dubai.show_the_result();
Paris.show_the_result();
Lima.show_the_result();
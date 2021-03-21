'use strict';

// Seattle branch
const Seattle={
  name:'Seattle',
  minCustomers: 23,
  maxCustomer: 65,
  avgCookie:6.3,
  customeres:0,
  workingHour:['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],

  getCustomeres :function(min,max){
    this.customeres=getRandomNumber(min,max);
    console.log(this);
  },
  salesobjec:0,




  render: function(){

    const container = document.getElementById('salesData');
    const articalE1 = document.createElement('articalE1');
    container.appendChild(articalE1);
    const h3El =document.createElement('articalE1');
    articalE1.appendChild(h3El);
    h3El.textContent = this.name;

    const ulEl = document.createElement('ul');
    articalE1.appendChild(ulEl);

    for(let i=0; i< this.workingHour.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      let x=getRandomNumber(23,65);
      let u=Math.ceil(6.3);
      let salesPerHour=x*u;

      liEl.textContent = this.workingHour[i]+':'+salesPerHour;
    }

  }

};
Seattle.render();

// TOkyo branch

const Tokyo={
  name:'Tokyo',
  minCustomers: 3,
  maxCustomer: 24,
  avgCookie:1.2,
  customeres:0,
  workingHour:['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],

  getCustomeres :function(min,max){
    this.customeres=getRandomNumber(min,max);
    console.log(this);
  },
  salesobjec:0,




  render: function(){

    const container = document.getElementById('salesData');
    const articalE1 = document.createElement('articalE1');
    container.appendChild(articalE1);
    const h3El =document.createElement('articalE1');
    articalE1.appendChild(h3El);
    h3El.textContent = this.name;

    const ulEl = document.createElement('ul');
    articalE1.appendChild(ulEl);

    for(let i=0; i< this.workingHour.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      let x=getRandomNumber(3,24);
      let u=Math.ceil(1.2);
      let salesPerHour=x*u;

      liEl.textContent = this.workingHour[i]+':'+salesPerHour;
    }

  }

};
Tokyo.render();

// Dubai

const Dubai={
  name:'Dubai',
  minCustomers: 11,
  maxCustomer:38,
  avgCookie:3.7,
  customeres:0,
  workingHour:['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],

  getCustomeres :function(min,max){
    this.customeres=getRandomNumber(min,max);
    console.log(this);
  },
  salesobjec:0,




  render: function(){

    const container = document.getElementById('salesData');
    const articalE1 = document.createElement('articalE1');
    container.appendChild(articalE1);
    const h3El =document.createElement('articalE1');
    articalE1.appendChild(h3El);
    h3El.textContent = this.name;

    const ulEl = document.createElement('ul');
    articalE1.appendChild(ulEl);

    for(let i=0; i< this.workingHour.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      let x=getRandomNumber(11,38);
      let u=Math.ceil(3.7);
      let salesPerHour=x*u;

      liEl.textContent = this.workingHour[i]+':'+salesPerHour;
    }

  }

};
Dubai.render();
//  Paris
const Paris={
  name:'Paris',
  minCustomers: 20,
  maxCustomer:38,
  avgCookie:2.3,
  customeres:0,
  workingHour:['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],

  getCustomeres :function(min,max){
    this.customeres=getRandomNumber(min,max);
    console.log(this);
  },
  salesobjec:0,




  render: function(){

    const container = document.getElementById('salesData');
    const articalE1 = document.createElement('articalE1');
    container.appendChild(articalE1);
    const h3El =document.createElement('articalE1');
    articalE1.appendChild(h3El);
    h3El.textContent = this.name;

    const ulEl = document.createElement('ul');
    articalE1.appendChild(ulEl);

    for(let i=0; i< this.workingHour.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      let x=getRandomNumber(20,38);
      let u=Math.ceil(2.3);
      let salesPerHour=x*u;

      liEl.textContent = this.workingHour[i]+':'+salesPerHour;
    }

  }

};
Paris.render();
//Lima Branch
const Lima={
  name:'Lima',
  minCustomers: 2,
  maxCustomer:16,
  avgCookie:4.6,
  customeres:0,
  workingHour:['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],

  getCustomeres :function(min,max){
    this.customeres=getRandomNumber(min,max);
    console.log(this);
  },
  salesobjec:0,




  render: function(){

    const container = document.getElementById('salesData');
    const articalE1 = document.createElement('articalE1');
    container.appendChild(articalE1);
    const h3El =document.createElement('articalE1');
    articalE1.appendChild(h3El);
    h3El.textContent = this.name;

    const ulEl = document.createElement('ul');
    articalE1.appendChild(ulEl);

    for(let i=0; i< this.workingHour.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      let x=getRandomNumber(2,16);
      let u=Math.ceil(4.6);
      let salesPerHour=x*u;

      liEl.textContent = this.workingHour[i]+':'+salesPerHour;
    }

  }

};
Lima.render();

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}







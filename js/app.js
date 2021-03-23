'use strict';



let workingHour=['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
const container = document.getElementById('salesData');
const articalE1 = document.createElement('articalE1');
container.appendChild(articalE1);
const h1El=document.createElement('h1');
articalE1.appendChild(h1El);
h1El.textContent=' Pat Salmoon';
const tableEl=document.createElement('table');
articalE1.appendChild(tableEl);
const trE0=document.createElement('tr');
tableEl.appendChild(trE0);
const thE1=document.createElement('th');
trE0.appendChild(thE1);
thE1.textContent='Location';

for(let i=0;i<workingHour.length;i++){
  const thE2 =document.createElement('th');
  trE0.appendChild(thE2);
  thE2.textContent=workingHour[i];

}
const thE3=document.createElement('th');
trE0.appendChild(thE3);
thE3.textContent='Daily Location Total';







// constract afunction called Location:

function Location(name,avgCookie,minCust,maxCust)
{
  this.name=name;
  this.avgCookie=avgCookie;
  this.minCust=minCust;
  this.maxCust=maxCust;
    this.total=0;
  this.arraytotal=[]
}

Location.prototype.getSales= function (){



  for (let i=0;i<workingHour.length;i++){
    this.avgCookie=Math.ceil(this.avgCookie);

    let random=getRandomNumber(this.minCust,this.maxCust);
    let saleDay=random*this.avgCookie;

    this.arraytotal.push(saleDay);
    this.total=this.total+this.arraytotal[i];





  }


};

Location.prototype.render=function(){
 
 
 
  const trEl=document.createElement('tr');
  tableEl.appendChild(trEl);
  const tdE1=document.createElement('td');
  trEl.appendChild(tdE1);
  tdE1.textContent=this.name;


  for(let i=0; i< workingHour.length; i++)
  {
 const tdE2=document.createElement('td');
 trEl.appendChild(tdE2);
   
    tdE2.textContent = this.arraytotal[i];
  }
  const tdE3 =document.createElement('td');
  trEl.appendChild(tdE3);
  tdE3.textContent=this.total;

};


const saettle=new Location('Saettle',6.3,23,65);
const tokyo=new Location('Tokyo',1.2,3,24);
const dubai=new Location('Dubai',3.7,11,38);
const paris=new Location('Paris',2.3,20,38);
const lima=new Location('Lima',4.6,2,16);


saettle.getSales();
saettle.render();
tokyo.getSales();
tokyo.render();
dubai.getSales();
dubai.render();
paris.getSales();
paris.render();
lima.getSales();
lima.render();

const trE2=document.createElement('tr');
tableEl.appendChild(trE2);
const thE5=document.createElement('th');
trE2.appendChild(thE5);
thE5.textContent='Total per hour';
for (let i=0;i<workingHour.length;i++){
 let z= saettle.arraytotal[i]+tokyo.arraytotal[i]+dubai.arraytotal[i]+paris.arraytotal[i]+lima.arraytotal[i];
 const thE4=document.createElement('th');
 trE2.appendChild(thE4);
thE4.textContent=z;
}

let patTotal=saettle.total+tokyo.total+dubai.total+paris.total+lima.total;
console.log(patTotal);
const thE6=document.createElement('th');
trE2.appendChild(thE6);
thE6.textContent=patTotal;



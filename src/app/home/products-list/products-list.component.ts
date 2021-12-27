import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
//import {PricePipe} from './Pipes/price.pipe';
//import { RatingPipe } from './Pipes/rating.pipe';
//import { FilterPipe } from './Pipes/filter.pipe';
import { Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  
  
  title = 'Shopping';
  filteredString : any = '';
  prices : boolean = false ;
  prc : any = '' ;
  rate: any = '';
  public selectedValue: any;
  ratings : any= '';
  clr: any = '';
  cat:any='';

  priceRange = [
    {
      "title":"Rs. 279 to Rs. 7834",
     "value":"279-7834",
     'checked': false
   }, 
   {
     "title":"Rs.7834 to Rs. 15389",
     "value":"7834-15389",
     'checked': false
   }, 
   {
     "title":"Rs. 15389 to Rs. 22944",
     "value":"15389-22944",
     'checked': false
   },
 ]; 

 RatingRange = [
  {
    "title": "One star",
    "value": 1,
    'checked': false
  },
  {
   "title": "Two star",
   "value": 2,
   'checked': false

  },
  {
   "title": "Three star",
   "value": 3,
   'checked': false

  },
  {
   "title": "Four star",
   "value": 4,
   'checked': false

  }
];

products=[
  {
    "id": 1,
    "title": "JBL",
    "price":3799,
    "pricedrop": 2799,
    "off": 1000,
    "description": "On-Ear Headphones with Mic",
    "image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7827827/2018/11/27/7dc61e9d-0a92-4efe-a568-b98ea3a3dacf1543314876687-JBL-T500BT-Powerful-Bass-Wireless-On-Ear-Headphones-with-Mic-1.jpg",
    "rating":{
    "rate": 4.4,
    "count": 862
    },
    "color": "Black"
  },
  {
    "id": 2,
    "title": "Fire-Boltt",
    "price":4999,
    "pricedrop": 1499,
    "off": 3000,
    "description": "Ninja Touch to Wake Smartwatch",
    "image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15759786/2021/11/10/fa546c2d-e19a-4069-99f8-18a5ecaaf0b21636551822204Fire-BolttNinjaUnisexTouchtoWakeSpO2Smartwatch07BSWAAY-Black1.jpg",
    "rating":{
    "rate": 4.2,
    "count": 799
    },
    "color": "Black"
  },
  {
    "id": 3,
    "title": "WROGN",
    "price":1999,
    "pricedrop": 799,
    "off": '60%',
    "description": "Men Analogue Watch",
    "image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13036796/2021/1/6/bb6d18c9-39c1-4632-bc4a-f452606965ef1609906124788-WROGN-Men-Silver-Toned-Analogue-Watch-WRG00048A-802160990612-1.jpg",
    "rating":{
    "rate": 4.2,
    "count": 799
    },
    "color": "Brown",
    "Sex": "Men"
  },
  {
    "id": 4,
    "title": "Sennheiser",
    "price":24990,
    "pricedrop": 18999,
    "off": 5991,
    "description": "Momentum Wireless Headphone",
    "image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12513974/2020/9/25/787f6b8e-b327-46c6-b11a-cd4928c42f111601040269658-Sennheiser-White-Momentum-2-True-Wireless-Headphones-8251601-1.jpg",
    "rating":{
    "rate": ' ',
    "count": ' '
    },
    "color": "White"
  },
  {
    "id": 5,
    "title": "DressBerry",
    "price":3099,
    "pricedrop": 774,
    "off": '75%',
    "description": "Momen Analogue Watch",
    "image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2278227/2018/4/5/11522921945738-DressBerry-Women-Watches-5181522921945628-1.jpg",
    "rating":{
    "rate":  4.2,
    "count": '5.7k'
    },
    "color": "Gray",
    "sex": "Women"
  },
  {
    "id": 6,
    "title": "NOISE",
    "price":2999,
    "pricedrop": 1499,
    "off": 1500,
    "description": "AirBuds Mini Bluetooth Headset",
    "image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14934384/2021/11/29/09faac2c-915f-4288-8080-932dae4dd0231638161736945-NOISE-Air-Buds-Mini-Truly-Wireless-Bluetooth-Headset-with-15-1.jpg",
    "rating":{
    "rate": 4.2,
    "count": '2.3k'
    },
    "color": "White"
  },
  {
    "id": 7,
    "title": "Fossil",
    "price":7995,
    "pricedrop": 4397,
    "off": '45%',
    "description": "Women Carlie Analogue Watch",
    "image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13726840/2021/4/8/a838beca-47b8-4fe9-af26-927ee70e98f51617881839401FossilWomenOff-WhiteCarlieAnalogueWatchES46141.jpg",
    "rating":{
    "rate": 4.4,
    "count": 83
    },
    "color": "White",
    "sex": "Women"
  },
  {
    "id": 8,
    "title": "boAt",
    "price":12999,
    "pricedrop": 6990,
    "off": 6000,
    "description": "Stone 1500 Wireless Speaker",
    "image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11888878/2021/6/8/b87150df-ad9b-4bd9-8752-017776eb0c281623126496063-boAt-Stone-1500-40W-Active-Black-Wireless-Speaker-with-boAt--1.jpg",
    "rating":{
    "rate": 4.5,
    "count": 420
    },
    "color": "Black",
  },
  {
    "id": 9,
    "title": "UltraProlink",
    "price":599,
    "pricedrop": 399,
    "off": 200,
    "description": "MoBass UM1042 Noise Isolation Earphone with Mic",
    "image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/4/1/c6c3085e-073e-4416-a4a1-e4dfe86fe6121617265366609-1.jpg",
    "rating":{
    "rate": 1.8,
    "count": 9
    },
    "color": "Black"
  },
  {
    "id": 10,
    "title": "Mast & Harbour",
    "price":4299,
    "pricedrop": 749,
    "off": '70%',
    "description": "Momen Analogue Watch",
    "image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1880284/2017/6/21/11498028508860-Mast--Harbour-Women-Pink-Analogue-Watch-7101498028509127-1.jpg",
    "rating":{
    "rate": 4.2,
    "count": '1.4k'
    },
    "color": "brown",
    "sex": "women"
  },
  {
    "id": 11,
    "title": "Apple",
    "price":14900,
    "pricedrop": 12909,
    "off": 1991,
    "description": "2nd Gen AirPods",
    "image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9803279/2019/10/11/8b3247d2-99d4-4448-aa57-9c28905968861570782281063-Apple-White-2nd-Gen-AirPods-with-Charging-Case-MV7N2HNA-1181-1.jpg",
    "rating":{
    "rate": 4.5,
    "count": '1.4k'
    },
    "color": "White"
  },
  {
    "id": 12,
    "title": "JBL",
    "price":21999,
    "pricedrop": 18599,
    "off": 3400,
    "description": "Blue Xtreme 2 Bluetooth Speaker",
    "image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7096292/2018/8/7/84ed18cd-2fa0-4f99-8f51-b806e3d63f5f1533644360732-JBL-Unisex-Speakers-4941533644359113-1.jpg",
    "rating":{
    "rate": 4.5,
    "count": 26
    },
    "color": "Blue"
  },
  {
    "id": 13,
    "title": "NOISE",
    "price":3999,
    "pricedrop": 1499,
    "off": 2500,
    "description": "Vibe 5W Bluetooth Speaker",
    "image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/12/5/58b0da88-cafc-4abf-9c97-bfe01add0ebd1607183811676-1.jpg",
    "rating":{
    "rate": 4.1,
    "count": 54
    },
    "color": "Olive Green",
  },
  {
    "id": 14,
    "title": "NOISE",
    "price":4999,
    "pricedrop": 2799,
    "off": 2200,
    "description": "Pro 2 Smartwatch",
    "image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10769098/2019/10/17/4e8dc285-fce6-4d57-b058-d79d2132eb271571294516344-NOISE-Black-ColorFit-Pro-2-Active-Smartwatch-324157129451526-1.jpg",
    "rating":{
    "rate": 4.3,
    "count": '11.4k'
    },
    "color": "Black"
  },
  {
    "id": 15,
    "title": "boAt",
    "price":2990,
    "pricedrop": 1299,
    "off": 1691,
    "description": "Airdopes 131 Type C Earbuds",
    "image": "https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/11888942/2021/9/28/9dac8560-6d57-459f-bda1-18a473c47a8c1632810240640-boAt--Black-Airdopes-131-M-TWS-IWP-Type-C-Port-Earbuds-74216-1.jpg",
    "rating":{
    "rate": 4.1,
    "count": '18k'
    },
    "color": "Black"
  },
  {
    "id": 16,
    "title": "Sennheiser",
    "price":24990,
    "pricedrop": 9990,
    "off": 15000,
    "description": "True Wireless Headphones",
    "image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9041523/2019/3/15/af3d0f70-0e31-47e4-936e-e914b37acb791552644144016-Sennheiser-Momentum-In-Ear-True-Wireless-M3-IETW-15915526441-2.jpg",
    "rating":{
    "rate": 2.1,
    "count": 8
    },
    "color": "Black"
  },
  {
    "id": 17,
    "title": "Fossil",
    "price":10995,
    "pricedrop": 7146,
    "off": '35%',
    "description": "Men NATE Watch",
    "image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/6972916/2021/5/11/c2e0a663-c4a0-47b0-8bee-b975450367221620724304341-Fossil-NATE-Men-Black-Analogue-Watch-JR1353-2771620724303669-1.jpg",
    "rating":{
    "rate": 4.1,
    "count": '1.5k'
    },
    "color": "Black",
    "sex": "Men"
  },
  {
    "id": 18,
    "title": "Michael Kors",
    "price":16795,
    "pricedrop": 10077,
    "off": '40%',
    "description": "Watches",
    "image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1093600/2015/12/15/11450164694840-Michael-Kors-Women-Chronograph-White-Dial-Watch-MK5774I-9371450164693896-1.jpg",
    "rating":{
    "rate": 4.6,
    "count": 32
    },
    "color": "White",
    "sex": "Women"
  },
  {
    "id": 19,
    "title": "pTron",
    "price":2999,
    "pricedrop": 1099,
    "off": 1900,
    "description": "Bassbuds Pro Headphones",
    "image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15958868/2021/11/2/b7f488d2-6a64-4dcd-a17e-a866e23d95a81635846454230-pTron-Bassbuds-Pro-True-Wireless-Bluetooth-51-Headphones-wit-1.jpg",
    "rating":{
    "rate": 4.2,
    "count": 19
    },
    "color": "Blue"
  },
  {
    "id": 20,
    "title": "WeCool",
    "price":1999,
    "pricedrop": 499,
    "off": 5100,
    "description": "N1 Bluetooth Earphones",
    "image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14442730/2021/6/3/b44d2468-24b4-4f9d-a338-6d67433fe1861622696891100-N1-Yellow-131622696890743-1.jpg",
    "rating":{
    "rate": 3.8,
    "count": 21
    },
    "color": "Black"
  },
  {
    "id": 21,
    "title": "Realme",
    "price":4999,
    "pricedrop": 3299,
    "off": 1700,
    "description": "Buds Air 2 Headphones with Active Noise Cancellation",
    "image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14444012/2021/6/16/5def6110-33fd-4277-87dc-bd439b7c2c221623844684133-realme-Buds-Air-2-with-Active-Noise-Cancellation-ANC-Bluetoo-1.jpg",
    "rating":{
    "rate": 4.3,
    "count": 594
    },
    "color": "White"
  },
  {
    "id": 22,
    "title": "molife",
    "price":3499,
    "pricedrop": 1999,
    "off": 1500,
    "description": "Dual-Driver Portable Bluetooth Speaker",
    "image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/12/7/8d63a88d-72d8-4e89-a866-f9c7d0d80ada1607354441520-1.jpg",
    "rating":{
    "rate": '',
    "count": ''
    },
    "color": "Black"
  },
  {
    "id": 23,
    "title": "FitSpark",
    "price":2999,
    "pricedrop": 1199,
    "off": 1800,
    "description": "RAAG Portable Wireless Speaker",
    "image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/12/14/fafc16d2-fc6a-4864-a150-2fcfc9da40461607927185549-1.jpg",
    "rating":{
    "rate": 3.9,
    "count": 29
    },
    "color": "Blue"
  },
  {
    "id": 24,
    "title": "Realme",
    "price":1999,
    "pricedrop": 1799,
    "off": 200,
    "description": "Buds Wireless",
    "image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11464884/2020/2/5/4816c1ce-534d-4978-bbe1-14d17f403d5d1580887563165-Realme-Unisex-Headphones-9921580887562781-1.jpg",
    "rating":{
    "rate": 4.3,
    "count": 690
    },
    "color": "Olive Green"
  }
]
color =[
  {
    "title" : "Black",
    "checked": false
  },
  {
    "title" : "White",
    "checked" : false
  },
  {
    "title": "Blue",
    "checked": false
  },
  {
    "title": "Brown",
    "checked": false
  },
  {
    "title": "Olive Green",
    "checked": false
  }
]
categories=[
  { "title":"JBL","checked": false},
  {"title": "Realme","checked": false},
  {"title" : "FitSpark", "checked":false},
  {"title":"molife", "checked":false},
  {"title":"Fossil", "checked":false},
  {"title":"WeCool", "checked":false},
  {"title":"pTron", "checked":false},
  {"title":"Michael Kors", "checked":false},
  {"title":"Sennheiser", "checked":false},
  {"title":"boAt", "checked":false},
  {"title":"NOISE", "checked":false},
  {"title":"Apple", "checked":false},
  {"title":"Mast & Harbour", "checked":false},
  {"title":"Fire-Boltt", "checked":false},
  {"title":"UltraProlink", "checked":false},
  {"title":"DressBerry", "checked":false},
  {"title":"WROGN", "checked":false},
  ]
onclick(event:any, value:any, index: any){
  //event.isChecked = !event.isChecked;
  this.RatingRange[index].checked = true;
  // this.isChecked = !this.isChecked;
  // this.isCheckedName = event.target.name;
  if(event.target.checked){
     this.rate = value;
   }
}
onChange(event: any, value :any, index:any){
  this.priceRange[index].checked = true;
  if(event.target.value){
    this.prc = value;
  }
}
onColor(event:any, value:any, index:any){
  this.color[index].checked = true;
  if(event.target.value){
    this.clr = value;
  }
}
onCategory(event:any, value:any, index:any){
 this.categories[index].checked = true;
 if(event.target.value){
   this.cat = value;
 }
}



  constructor() { }

  ngOnInit(): void {
  }

}

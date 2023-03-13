import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderdetailsService } from 'src/app/services/orderdetails.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit  {
  constructor(private param:ActivatedRoute,private service:OrderdetailsService){}
  getMenuid:any;
  menudata:any;

  ngOnInit(): void {
    this.getMenuid=this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuid,'getmenu');
    if(this.getMenuid)
    {
      this.menudata=this.service.orderdetails.filter((value)=>
      {
        return value.id==this.getMenuid;
      });
      console.log(this.menudata,'menudata')

    }
    
  }
  public value:number=0;
  public counter(str:string){
    (str === 'add') ? this.value++ : this.value--;
  }

  buttonColor="black";
  buttonType="buy";
  isCustomerSize=250;
  buttonHeight=50;
  isTop = window ===window.top;

  paymentRequest={
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['AMEX', 'VISA', 'MASTERCARD']
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId'
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant'
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00',
      currencyCode: 'USD',
      countryCode: 'US'
    }
  };
  onLoadPaymentData(event:any){
    console.log(event.detail)
  }


}

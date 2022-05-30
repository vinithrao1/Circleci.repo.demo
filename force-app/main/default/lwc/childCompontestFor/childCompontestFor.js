import { LightningElement ,api,track} from 'lwc';

export default class ChildCompontestFor extends LightningElement {

 @track  totalTaxableamount;
  @api  calculate(TotalAmount,TaxAmount){
this.totalTaxableamount=(TotalAmount*TaxAmount)/100

    }
}
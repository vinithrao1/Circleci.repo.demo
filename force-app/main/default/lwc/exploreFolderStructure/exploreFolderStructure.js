import { LightningElement, track, } from 'lwc';

export default class ExploreFolderStructure extends LightningElement {
   @track TaxAmount
    @track TotalAmount
    changeHanhler(event){
       const field= event.target.name;
       if(field==='TotalAmount'){
           this.TotalAmount=event.target.value;
       }
       if(field==='TaxAmount'){
           this.TaxAmount=event.target.value;
       }
       this.template.querySelector('c-explore-math').calculate(this.TotalAmount,this.TaxAmount);


    }
   
}
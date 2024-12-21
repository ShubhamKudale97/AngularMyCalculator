import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'], 
})

export class AppComponent {
 
  out_put : any = null;
  out : string = "";
  num : any = null;
  inumber:string= "";
  opretor:string="";
  dot:string = ""
  
  addDot(){
    if (this.num == null) {
      this.out= "0.";
    }
    else if (this.out==this.num) {
      this.out= this.out + ".";
    } else {
      this.out ;
    }
  }

  showInput(inum:any){
    this.inumber=this.out + inum;
    this.out=this.inumber;
    this.num= parseFloat(this.out);
    this.inumber="";
  }

  onInput(event:any):void
  {
    this.num = parseFloat(event.target.value);    
  }

  addBtnClick():void
  {
    this.out_put = this.num + this.out_put; 
    this.num = null;
    this.out = ""; 
    this.opretor= "add";   
  }

  subBtnClick():void
  {
    if (this.out_put != null && this.num !=null) {
     // console.log(this.out_put)
        this.out_put -= this.num;
    } else if(this.out_put == null) {
        this.out_put = this.num;
        this.num = null;
    }
    this.num = null;
    this.out = "";
    this.opretor= "sub";
  }

  multiBtnClick():void
  {
    if(this.out_put != null && this.num !=null) {
        this.out_put = this.out_put * this.num;
    }else if(this.out_put == null) {
      this.out_put = this.num;
      this.num = null;
     } 
    this.num = null;
    this.out = "";
    this.opretor= "multi";
  }
  
  divideBtnClick():void
  {
    if(this.out_put != null && this.num !=null) {
      this.out_put = this.out_put / this.num;
    }else if(this.out_put == null) {
    this.out_put = this.num;
    this.num = null;
    } 
  this.num = null;
  this.out = "";
  this.opretor= "divide";
  }

  percent()
  {
    this.out_put= this.num/100;
    this.num = null;
    this.out = "";
  }

  sqroot()
  {
    this.out_put = Math.sqrt(this.num);
    this.num = null;
    this.out = "";
  }

  clear(){
    this.num = null;
    this.out="";  
  }

  allClear():void{
    this.num = null;
    this.out_put = null;
    this.out="";
  }

  equalTo(){
    //this.num = null;
    console.log(this.opretor);
    if(this.opretor == "add")
    {
      return this.addBtnClick();
    }
    else if(this.opretor == "sub"){
      return this.subBtnClick();
    }
    else if(this.opretor == "multi"){
      return this.multiBtnClick();
    }
    else if(this.opretor == "divide"){
      return this.divideBtnClick();
    }
    this.opretor="";
  }
}
 
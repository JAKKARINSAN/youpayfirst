import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { alllist, ListPrice, Listtotal, name, total, towho } from './variable.service';

@Injectable({
  providedIn: 'root'
})

export class FunctionService {

  totals = total
  cName = ''
  paytowho:any = this.totals
 paytowhos:towho[] = []
  payto () {

    this.paytowhos = this.paytowho
    this.paytowhos.forEach(element => {
      element.payment = element.Pay
           });
    var l = this.paytowhos.findIndex(y => y.Status === 'จ่ายเพิ่ม' && y.Pay > 0)
    var o = this.paytowhos.findIndex(y => y.Status === 'ได้คืน'&& y.Pay > 0)
    this.paytowhos[l].towho = ''
    var sum = this.paytowhos.filter(item => item.Status === 'จ่ายเพิ่ม')
    .reduce((sum, current) => sum + current.Pay , 0);
    while (sum > 0){

    console.log(sum)
    var l = this.paytowhos.findIndex(y => y.Status === 'จ่ายเพิ่ม' && y.Pay > 0)
    var o = this.paytowhos.findIndex(y => y.Status === 'ได้คืน'&& y.Pay > 0)
     if(this.paytowhos[l].Pay<this.paytowhos[o].Pay){
      var q = this.paytowhos[l].Pay }

      else{var q = this.paytowhos[o].Pay}
     q = Math.round(q*100)/100
    this.paytowhos[l].Pay =  this.paytowhos[l].Pay - q
    this.paytowhos[o].Pay =  this.paytowhos[o].Pay - q
    if( this.cName !== this.paytowhos[l].Name ){
        this.paytowhos[l].towho = "\"จ่าย " + this.paytowhos[o].Name +" := " + q +" บาท\" "}else{
    this.paytowhos[l].towho += ",\" จ่าย " + this.paytowhos[o].Name +" := " + q +" บาท \""
}
          if(this.paytowhos[l].Name)
    sum = this.paytowhos.filter(item => item.Status === 'จ่ายเพิ่ม')
    .reduce((sum, current) => sum + current.Pay , 0);
  this.cName =this.paytowhos[l].Name}
    console.log(this.paytowhos)

}
sumtotals(){
  total.forEach((value,index)=>{
    total.splice(0,total.length);})

    this.sumtotal()
this.totals = total
}



  getname(): Observable<string[]> {
    return of(name);
    // return throwError(() => ({ status: 404, message: 'Not found' }));
  }
  getlist(): Observable<ListPrice[]> {
    return of(alllist);
    // return throwError(() => ({ status: 404, message: 'Not found' }));
  }
  sumtotal(){
    const nUser = name.length
    const result = alllist.reduce(function (acc, obj) { return acc + Number(obj.Price); }, 0);
    const averTotal = result/nUser
    for(let x of name){

    const sum = alllist.filter(item => item.Name === x)
    .reduce((sum, current) => sum + Number( current.Price), 0);
    var payB = averTotal - sum

    if(payB < 0 )
    {var pay=Math.round(payB*-100)/100
  total.push({'Name': x , 'Price': sum , 'Status': 'ได้คืน', 'Pay': pay})} else
  {var pay=Math.round(payB*100)/100
  total.push({'Name': x , 'Price': sum , 'Status': 'จ่ายเพิ่ม', 'Pay': pay})}
  }
    // total.push({'Name': x.Name , 'Price': sum})}
    // console.log(name)




    console.log(total)

  }



}

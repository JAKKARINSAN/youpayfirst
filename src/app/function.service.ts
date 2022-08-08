import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { alllist, ListPrice, Listtotal, name, total } from './variable.service';

@Injectable({
  providedIn: 'root'
})

export class FunctionService {




  constructor() {}

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
    {var pay=String(Math.round(payB*-100)/100)
  total.push({'Name': x , 'Price': sum , 'Status': 'ได้คืน', 'Pay': pay})} else
  {var pay=String(Math.round(payB*100)/100)
  total.push({'Name': x , 'Price': sum , 'Status': 'จ่ายเพิ่ม', 'Pay': pay})}
  }
    // total.push({'Name': x.Name , 'Price': sum})}
    // console.log(name)




    console.log(total)

  }



}

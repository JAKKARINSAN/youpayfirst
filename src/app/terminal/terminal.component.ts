import { Component, OnInit } from '@angular/core';
import { FunctionService } from '../function.service';
import { alllist, Listtotal, total, name } from '../variable.service';


@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {
  totals = total
  paytowho = [ {Name: 'oak', Price: 50, Status: 'จ่ายเพิ่ม', Pay: 12.75},
 {Name: 'j', Price: 75, Status: 'ได้คืน', Pay: 12.25},
 {Name: 'id', Price: 60, Status: 'จ่ายเพิ่ม', Pay: 2.75},
 {Name: 'd', Price: 66, Status: 'ได้คืน', Pay: 3.25}]
 paytowhos:Listtotal[] = []
  payto () {
    this.paytowhos = this.paytowho
    const sum = this.paytowhos.filter(item => item.Status === 'จ่ายเพิ่ม')
    .reduce((sum, current) => sum + current.Pay , 0);
    console.log(sum)
    const l = this.paytowhos.findIndex(y => y.Status === 'จ่ายเพิ่ม')
    const o = this.paytowhos.findIndex(y => y.Status === 'ได้คืน')
    console.log(this.paytowhos[l].Pay)
    
    // while (sum > 0){

    // }
  //   let i: number = 2;
  // while (i < 4) {
  //     console.log( "Block statement execution no." + i )
  //     i++; // }

}
sumtotals(){
  total.forEach((value,index)=>{
    total.splice(0,total.length);})

    this.fs.sumtotal()
this.totals = total
}

  constructor(private fs: FunctionService) { }

  ngOnInit(): void {
this.sumtotals()
this.payto()
  }

}

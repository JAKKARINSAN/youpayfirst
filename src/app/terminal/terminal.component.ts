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

sumtotals(){
  total.forEach((value,index)=>{
    total.splice(0,total.length);})

    this.fs.sumtotal()
this.totals = total
}

  constructor(private fs: FunctionService) { }

  ngOnInit(): void {
this.sumtotals()

  }

}

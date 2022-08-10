import { Component, OnInit } from '@angular/core';
import { FunctionService } from '../function.service';
import { alllist, Listtotal, total, name, towho } from '../variable.service';


@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {
  paytowhos = this.fs.paytowhos
  ref(){
    this.paytowhos = this.fs.paytowhos
  }
  constructor(private fs: FunctionService) { }

  ngOnInit(): void {
this.fs.sumtotals()
this.fs.payto()
this.ref()
  }

}

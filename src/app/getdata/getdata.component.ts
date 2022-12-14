
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FunctionService } from '../function.service';
import { ListPrice ,name, alllist, total } from '../variable.service';

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.scss']
})
export class GetdataComponent implements OnInit {
  name = name
  selected= ''
  alllist: ListPrice[] = alllist;
  message=''
  fg = new FormGroup({
  Name: new FormControl(this.selected),
  List : new FormControl(),
  Price : new FormControl()
  })

  constructor(private fs: FunctionService,private route:Router) { }

  addlist(value:string){
    let y =""
    const x = this.fg.value
    if( x.Price > 0  ){y = 'เป็นจริง'} else {y = 'เท็จ'}
    if (y === "เท็จ")
    {this.message = 'ใส่ราคาว่าจ่ายไปเท่าไรสิ ไม่ใส่จะคำนวณยังไง?'
  return}
  this.selected = value;
  this.fg.patchValue ({Name: this.selected})
  this.alllist.push(this.fg.value)
  this.message=''
  this.fg.patchValue ({Price: ''})
}
  RemoveElementFromObjectArray(n:number){
    alllist.splice(n,1);
  }
  gototerminal(){
    if(alllist.length === 0){
      this.message='เพิ่มข้อมูลสักรายการก่อนไหม ไม่มีข้อมูลจะหารยังไง'
    }
    if(alllist.length > 0){
      this.route.navigate(['/adduser/home/terminal']);
    }
  }
  // /adduser/home/terminal
  ngOnInit(): void {
}

}

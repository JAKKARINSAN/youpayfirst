import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { FunctionService } from '../function.service';
import {  name} from '../variable.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  constructor(private fs: FunctionService) { }
  message = '';
  name = name
  fcon = new FormControl('');

  adduser(){
    const x = String( this.fcon.value)
    if(x.length===0){
      this.message = "พิมพ์ก่อนสิ ค่อยกด Add"
      return
    }
    let z = 0
    const count = name.filter(function(item){
       if (item === x) {
        z += 1
      }
    });
    if(z !== 0){
      this.message = "Add ชื่อนี้ไปแล้วไง"
      return
    }
    name.push (this.fcon.value);
    this.fcon.setValue('');
    this.message = '';
  ;}

  deletename(n:string){
    name.forEach((element,index)=>{
      if(element==n) name.splice(index,1);
   });
  }
  ngOnInit(): void {

  }

}

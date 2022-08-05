
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FunctionService } from '../function.service';
import { ListPrice, User } from '../variable.service';

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.scss']
})
export class GetdataComponent implements OnInit {
  name: User[] = this.fs.name
  selected= ''
  alllist: ListPrice[] = this.fs.alllist;
  message=''
  fg = new FormGroup({
  Name: new FormControl(this.selected),
  List : new FormControl(""),
  Price : new FormControl("")
  })

  constructor(private fs: FunctionService) { }

  addlist(value:string){
  this.selected = value;
  this.fg.patchValue ({Name: this.selected})
  this.fs.alllist.push(this.fg.value)
   console.log(this.alllist)
   console.log(this.fs.alllist)
}


  ngOnInit(): void {
    this.fs.getlist()
    .subscribe({
      next: n => this.alllist = n,
      error: err => this.message = err.message
    });
  }

}



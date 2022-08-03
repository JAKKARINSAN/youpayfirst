import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FunctionService } from '../function.service';
import { User } from '../variable.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  constructor(private fs: FunctionService) { }
  message = '';
  name: User[] = [];
  fcon = new FormControl('');
  adduser(){
    this.name.push (this.fcon.value);
    this.fcon.setValue('');
  };
  senddata(){
  this.fs.name = this.name
  console.log("test1"+this.fs.name)
  }
  ngOnInit(): void {
    this.fs.getname()
    .subscribe({
      next: n => this.name = n,
      error: err => this.message = err.message
    });
  }

}

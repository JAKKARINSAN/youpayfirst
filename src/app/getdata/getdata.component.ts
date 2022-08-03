import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FunctionService } from '../function.service';
import { User } from '../variable.service';

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.scss']
})
export class GetdataComponent implements OnInit {
  name: User[] = this.fs.name
  fg = new FormGroup({
  name: new FormControl(),
  list : new FormControl(),
  price : new FormControl()
  })
  constructor(private fs: FunctionService) { }

  ngOnInit(): void {
  }

}

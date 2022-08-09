import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {
w = window.innerWidth
h = window.innerHeight
  constructor(private router: Router) { }

  ngOnInit(): void {
    if( this.w < this.h) {this.router.navigate(['/']);
  //   } 
  }

}}

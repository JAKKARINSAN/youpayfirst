import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  w = window.innerWidth
  h = window.innerHeight
  constructor(private router: Router) { }

  ngOnInit(): void {
    if( this.w < this.h) {
          } else{
            this.router.navigate(['/desktop']);
          }
    
  }

}

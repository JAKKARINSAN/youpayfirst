import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { GetdataComponent } from './getdata/getdata.component';
import { TerminalComponent } from './terminal/terminal.component';

const routes: Routes = [{path: "",component: AdduserComponent},
{path: "home",component: GetdataComponent},
{path: "home/terminal", component: TerminalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

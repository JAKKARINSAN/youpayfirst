import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { DesktopComponent } from './desktop/desktop.component';
import { GetdataComponent } from './getdata/getdata.component';
import { IntroComponent } from './intro/intro.component';
import { TerminalComponent } from './terminal/terminal.component';

const routes: Routes = [{path: "",component: IntroComponent},
{path: "desktop",component: DesktopComponent},
{path: "adduser",component: AdduserComponent},
{path: "adduser/home",component: GetdataComponent},
{path: "adduser/home/terminal", component: TerminalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

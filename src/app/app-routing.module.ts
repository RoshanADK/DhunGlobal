import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent} from './hello-world/hello-world.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: HelloWorldComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

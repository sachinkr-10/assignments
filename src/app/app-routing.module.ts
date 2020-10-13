import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CornCmptsComponent } from './components/corn-cmpts/corn-cmpts.component';
// import { CornerComponentsComponent } from './components/corner-components/corner-components.component';
import { FormCmpComponent } from './components/form-cmp/form-cmp.component';
import { MissingNumberComponent } from './components/missing-number/missing-number.component';
import { NestedComponentsComponent } from './components/nested-components/nested-components.component';

const routes: Routes = [
  {path:'',component:MissingNumberComponent},{
    path:'nested',component:NestedComponentsComponent
  },{
    path:'forms',component:FormCmpComponent
  },{
    path:'corner',component:CornCmptsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

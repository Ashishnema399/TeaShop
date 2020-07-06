import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeaFormComponent } from './tea-form/tea-form.component'; 
import { EditTeaComponent } from './edit-tea/edit-tea.component';

const routes: Routes = [
  {path: 'TeaForm', component:TeaFormComponent},
  {path: '', component:TeaFormComponent},
  {path: 'EditTeaForm', component:EditTeaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

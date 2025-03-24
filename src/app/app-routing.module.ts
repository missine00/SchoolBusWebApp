import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentScannerComponent } from './student-scanner/student-scanner.component'

const routes: Routes = [
  { path: 'scanner', component: StudentScannerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

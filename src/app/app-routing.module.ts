import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CoursesComponent} from './courses/courses.component';

const routes: Routes = [
  {path: 'courses', component: CoursesComponent},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {path: '**', redirectTo: '/courses'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

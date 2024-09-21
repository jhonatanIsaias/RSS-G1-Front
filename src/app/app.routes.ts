import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NoticesComponent } from './pages/notices/notices.component';
import { NewsDatailsComponent } from './pages/notices/components/news-datails/news-datails.component';

export const routes: Routes = [
  {path:'', component:LoginComponent, pathMatch:'full'},
  {path:'register', component: RegisterComponent, pathMatch:'full'},
  {path:'notices',component:NoticesComponent,pathMatch:'full'},
  { path: 'news/:id', component: NewsDatailsComponent },
];

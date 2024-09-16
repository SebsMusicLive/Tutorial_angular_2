import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

export const routes: Routes = [
    {
        path: 'home', 
        component: HomeComponent
      },
      {
        path: 'courses',
        component: CoursesComponent
      },
      {
        path: 'courses/:course/:id',
        component: CourseDetailsComponent
      },
      {
        path: 'contact',
        component: ContactComponent,
        children:[
          {
            path:'',
            component: ContactInfoComponent
          },
          {
            path:'details',
            component: ContactDetailsComponent
          }
        ]
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path:'',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
];

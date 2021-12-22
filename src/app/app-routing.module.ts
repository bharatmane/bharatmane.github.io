import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuotesComponent } from './quotes/quotes.component';
import { BlogComponent } from './blog/blog.component';
import { KidCalendarComponent } from './kid-calendar/kid-calendar.component';
import { BookComponent} from './book/book.component';
import { StoriesComponent } from './stories/stories.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'quotes',component:QuotesComponent},
  {path:'blog',component:BlogComponent},
  {path:'calendar',component:KidCalendarComponent},
  {path:'book',component:BookComponent},
  {path:'stories',component:StoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { } 
 
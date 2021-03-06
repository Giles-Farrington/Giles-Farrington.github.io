import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturedEventsViewComponent } from './views/featured-events-view/featured-events-view.component';
import { CrudEventViewComponent } from './views/crud-event-view/crud-event-view.component';
import { HomeComponent } from './components/home/home.component';
import { ImageBannerComponent } from './components/image-banner/image-banner.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { EventListComponent } from './components/event-list/event-list.component';
import {EventViewComponent} from './components/event-view/event-view.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';


export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'featured', component: FeaturedEventsViewComponent},
    {path: 'create-event', component: CrudEventViewComponent},
    {path: 'banner', component: ImageBannerComponent},
    {path: 'create-account', component: CreateAccountComponent},
    {path: 'event-list', component: EventListComponent},
    {path: 'event-view', component: EventViewComponent},
    {path: 'user-profile', component: UserProfileComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}

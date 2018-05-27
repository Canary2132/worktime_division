import {Routes, RouterModule} from "@angular/router";

import {LogInComponent} from "./log-in/log-in.component";
import {ManagerPageComponent} from "./manager-page/manager-page.component";
import {ManagerAuthGuard, UserAuthGuard} from "./auth.guard";
import {UserPageComponent} from "./user-page/user-page.component";
import {MainPageComponent} from "./main-page/main-page.component";

const appRoutes: Routes = [
  {path: 'main', component: MainPageComponent, children:[
      {path: 'managerPage/:user', component: ManagerPageComponent, canActivate: [ManagerAuthGuard]},
      {path: 'userPage/:user', component: UserPageComponent, canActivate: [UserAuthGuard]}
    ]},
  {path: '', component: LogInComponent},
  {path:"**", redirectTo:''}
];
export const components = [LogInComponent, ManagerPageComponent, UserPageComponent, MainPageComponent];
export const routing = RouterModule.forRoot(appRoutes);

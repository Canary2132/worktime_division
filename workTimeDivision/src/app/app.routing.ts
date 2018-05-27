import {Routes, RouterModule} from "@angular/router";

import {LogInComponent} from "./log-in/log-in.component";
import {ManagerPageComponent} from "./manager-page/manager-page.component";
import {ManagerAuthGuard} from "./auth.guard";

const appRoutes: Routes = [
  {path: 'managerPage', component: ManagerPageComponent, canActivate: [ManagerAuthGuard]},
  {path: '', component: LogInComponent},

  //{path:"**", redirectTo:''}
];
export const components = [LogInComponent, ManagerPageComponent];
export const routing = RouterModule.forRoot(appRoutes);

import {RouterModule, Routes} from '@angular/router';
import {AccountPanelComponent} from "./component/panel/main/account-panel.component";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {RulesComponent} from "./component/web/rules/rules.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'account-panel', component: AccountPanelComponent },
  { path: 'rules', component: RulesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

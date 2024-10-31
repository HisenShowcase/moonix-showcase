import {RouterModule, Routes} from '@angular/router';
import {AccountPanelComponent} from "./component/panel/main/account-panel.component";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {RulesComponent} from "./component/web/rules/rules.component";
import {TeamComponent} from "./component/web/team/team.component";
import { VipComponent } from './component/web/vip/vip.component';
import { VoteComponent } from './component/web/vote/vote.component';
import { FaqComponent } from './component/web/faq/faq.component';
import { StoreComponent } from './component/web/store/store.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'account-panel', component: AccountPanelComponent },
  { path: 'pravidla', component: RulesComponent },
  { path: 'team', component: TeamComponent },
  { path: 'vip', component: VipComponent},
  { path: 'store', component: StoreComponent},
  { path: 'vote', component: VoteComponent},
  { path: 'faq', component: FaqComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountPanelComponent } from './component/panel/main/account-panel.component';
import { HomeComponent } from './home.component';
import { RulesComponent } from './component/web/rules/rules.component';
import { TeamComponent } from './component/web/team/team.component';
import { VipComponent } from './component/web/vip/vip.component';
import { VoteComponent } from './component/web/vote/vote.component';
import { FaqComponent } from './component/web/faq/faq.component';
import { StoreComponent } from './component/web/store/store.component';
import { GamesComponent } from './component/web/games/games.component';
import { CheckoutComponent } from './component/web/checkout/checkout.component';
import { AdminPanelComponent } from './component/web/admin-panel/admin-panel.component';
import { NaborComponent } from './component/web/nabor/nabor.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'account-panel', component: AccountPanelComponent },
  { path: 'pravidla', component: RulesComponent },
  { path: 'team', component: TeamComponent },
  { path: 'vip', component: VipComponent },
  { path: 'store', component: StoreComponent },
  { path: 'vote', component: VoteComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'admin-panel', component: AdminPanelComponent },
  { path: 'nabor', component: NaborComponent },
  { path: 'games', component: GamesComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

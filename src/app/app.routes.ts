import { Routes } from '@angular/router';
import { RedirectGuard } from './redirect.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { RedirectingComponent } from './redirecting/redirecting.component';
import { RarityListComponent } from './rarity-list/rarity-list.component';

export const routes: Routes = [
    {path: '', redirectTo: '/main', pathMatch: 'full'},
    {path: 'main', component: RarityListComponent},
    {path: 'source', component: RedirectingComponent, canActivate: [RedirectGuard], data: {externalUrl: 'https://github.com/Ascyt/rarities'}},
    {path: 'src', redirectTo: '/source', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}
];

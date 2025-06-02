import { Routes } from '@angular/router';
import { NewComponent } from '../features/new/new.component';
import { SummaryComponent } from '../features/summary/summary.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'new',
        pathMatch: 'full'
      },
      {
        path: 'new',
        component: NewComponent,
        data: { navLabel: 'Add New' }
      },
      {
        path: 'summary',
        component: SummaryComponent,
        data: { navLabel: 'Summary' }
      },
      {
        path: '**',
        redirectTo: 'new'
      }
];

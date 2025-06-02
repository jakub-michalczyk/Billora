import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { NavigationEnd, Route, Router } from '@angular/router';
import { routes } from '../../app/app.routes';
import { INavLink } from '../model/navigation.model';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private router = inject(Router);
  private rawRoutes: Route[] = routes;

  private lastNavEndUrl = signal<string>('');

  public readonly navLinks = computed<INavLink[]>(() => {
    const currentUrl = this.lastNavEndUrl();

    return this.rawRoutes
      .filter(route =>
        !route.redirectTo &&
        typeof route.path === 'string' &&
        !!route.data?.['navLabel']
      )
      .map(route => ({
        path: route.path!,
        label: route.data!['navLabel'] as string,
        isActive: currentUrl === `/${route.path}`
      }));
  });

  constructor() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((navEnd: NavigationEnd) => {
        this.lastNavEndUrl.set(navEnd.urlAfterRedirects);
      });
  }
}

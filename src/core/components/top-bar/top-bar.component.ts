import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { INavLink } from '../../model/navigation.model';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-top-bar',
  imports: [RouterLink, MatButtonModule],
  templateUrl: './top-bar.component.html'
})
export class TopBarComponent {
  private navigationService = inject(NavigationService);
  public routes = this.navigationService.navLinks;
}

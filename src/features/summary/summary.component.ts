import {
  Component,
  computed,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { FrameComponent } from '../../core/components/frame/frame.component';
import { ICompanyData, IInvoiceItem } from './summary.model';
import { CompanyService } from './summary.service';
import { CommonModule } from '@angular/common';
import { catchError, Observable, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-summary',
  imports: [FrameComponent, CommonModule, MatProgressSpinnerModule],
  host: { class: 'w-full block' },
  templateUrl: './summary.component.html',
})
export class SummaryComponent {
  public items: WritableSignal<IInvoiceItem[]> = signal([]);
  public loading = signal(true);
  public noItemsAdded = computed(() => this.items().length === 0);
  public companyData: Observable<ICompanyData | null> = of(null);
  private companyService = inject(CompanyService);
  private router = inject(Router);

  constructor() {
    this.getCompanyData();
    this.getInvoiceData();
  }

  private getCompanyData() {
    this.companyData = this.companyService.getCompanyInfo();

    this.companyData.subscribe({
      next: () => {
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      },
    });
  }

  private getInvoiceData() {
    const navState = this.router.getCurrentNavigation()?.extras.state as {
      items?: IInvoiceItem[];
    };

    navState && Array.isArray(navState.items)
      ? this.items.set(navState.items)
      : this.items.set([]);
  }

  public getTotal(): number {
    return this.items()
      .map((item) => (item.count ?? 0) * (item.price ?? 0))
      .reduce((sum, value) => sum + value, 0);
  }
}

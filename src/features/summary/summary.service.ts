import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ICompanyData, ICompanyDataDTO } from './summary.model';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private http = inject(HttpClient);
  private readonly URL = 'assets/company.json';

  getCompanyInfo(): Observable<ICompanyData | null> {
    return this.http.get<ICompanyDataDTO>(this.URL).pipe(
        map(data => {
            return {...data, phones: data.phones.join(', ')} as ICompanyData
        })
    );
  }
}

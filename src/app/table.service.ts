import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map} from 'rxjs/operators';
import { Dataset } from './dataset';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) { }

  APIUrl = 'http://localhost:3000'; // URL to web API de mi backend
  data:Dataset[] = [];

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

    // Get all Datasets
    getAll(): Observable<any> {
      const url = `${this.APIUrl}`;
      return this.http.get<any>(url)
      .pipe(
        map(data => data),
         catchError(this.handleError('getAll', []))
      );
    }
  
    /** GET Dataset by id */
    getDatasetbyId(id: string): Observable<any> {
      const url = `${this.APIUrl}/dataset/id=${id}`;
      return this.http.get<any>(url).pipe(
        catchError(this.handleError<Dataset>(`getDataset id=${id}`))
        );
    }

     // Get Exchange
     getExchange(): Observable<any> {
      const url = `${this.APIUrl}/exchange`;
      return this.http.get<any>(url)
      .pipe(
        map(data => data),
         catchError(this.handleError('getExchange', []))
      );
    }

    // Get Exchange
    getUpdates(): Observable<any> {
      const url = `${this.APIUrl}/seed`;
      return this.http.get<any>(url)
      .pipe(
        map(data => data),
         catchError(this.handleError('getUpdates', []))
      );
    }
}



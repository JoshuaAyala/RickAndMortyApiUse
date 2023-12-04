import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) { }

  public getCharacters(): Observable<any> {
    return this.http.get(`${this.apiUrl}?page=1`);
  }
  public getCharacterById(id: number): Observable<any> {
    const characterUrl = `${this.apiUrl}${id}`;
    return this.http.get(characterUrl);
  }
}

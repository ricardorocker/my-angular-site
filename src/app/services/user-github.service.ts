import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGithubService {
  private apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${username}`);
  }

  getRepositories(username: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${username}/repos`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info } from './info';
@Injectable({
  providedIn: 'root',
})
export class MyinfoService {
  constructor(private http: HttpClient) {}
  get() {
    return this.http.get<Info[]>('http://localhost:3000/info');
  }
  create(payload: Info) {
    return this.http.post<Info>('http://localhost:3000/info', payload);
  }
  getById(id: string) {
    return this.http.get<Info>(`http://localhost:3000/info/${id}`);
  }
  update(payload: Info) {
    return this.http.put(`http://localhost:3000/info/${payload.id}`, payload);
  }
  delete(id: string) {
    return this.http.delete<Info>(`http://localhost:3000/info/${id}`);
  }
}

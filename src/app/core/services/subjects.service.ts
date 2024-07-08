import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubjectsModel } from '../models/subjects-model';

@Injectable({
  providedIn: 'root',
})
export class SubjectsService {
  jsonUrl = 'assets/data/subject.json';
  constructor(private _http: HttpClient) {
    // console.log(this.getSubject());
  }

  ngOnInit() {
    // console.log(this.getSubject());
    // console.log(this.jsonUrl);
  }

  getSubject(): Observable<SubjectsModel[]> {
    return this._http.get<SubjectsModel[]>(this.jsonUrl);
  }
}

import { Injectable } from '@angular/core';
import { Formulario } from '../Models/form.models';
import { Observable,of } from 'rxjs'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

// const apiUrl = 'http://18.228.190.155:8080'
const apiUrl = 'http://54.207.75.182:8080'



@Injectable({
  providedIn: 'root'
})

export class ApiFormularioService {

  constructor(private http: HttpClient) {}

  formulario: Formulario = new Formulario()
  
  listar() : Observable<any>{
    return this.http.get(apiUrl + "/");     
  };
 
  postForm(form:Formulario): Observable<any>{ 
    return this.http.post(apiUrl + "/newForm",form);
  };

}

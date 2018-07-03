import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { URL_SERVICIOS } from '../../config/url.servicios';
import { HttpClientModule } from '@angular/common/http';

@Injectable()
export class LibrosProvider {

  constructor(public http: HttpClient) {
  }

  restApiGetTodosLosLibros(){
    return new Promise(resolve => {
      this.http.get(URL_SERVICIOS+'/libros').subscribe(libro=> {
        resolve(libro);
      }, error => {
        console.log(error);
      });
    });
  }

  restApiGetBuscarLibros(buscar){
    return new Promise(resolve => {
      this.http.get(URL_SERVICIOS+'/busqueda/libro/'+buscar).subscribe(libro=> {
        resolve(libro);
      }, error => {
        console.log(error);
      });
    });
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';

@Injectable()
export class HistorialProvider {

  historial:string[]=[];

  constructor(
    public http: HttpClient,
    private storage: Storage,
    private plarform: Platform) {

    console.log('Hello HistorialProvider Provider');
  }

  leerHistorial(){

    let promesa = new Promise( (resolve, reject) => {

      if (this.plarform.is("cordova")){
        //estamos en el dispositivo
        this.storage.ready().then( ()=> {
          this.storage.get("historial").then( (historial) => {
            this.historial = historial;
            resolve();
          });
        });
      }else{
        //estamos en la PC
        if (localStorage.getItem("historial")){
          this.historial = JSON.parse(localStorage.getItem("historial"));
          resolve();
        }
      }
    });

    return promesa;
  }

  agregar(busqueda:string){
    this.historial.push(busqueda);
    this.guardarHistorial();
  }

  guardarHistorial(){
    if (this.plarform.is("cordova")){
      //estamos en el dispositivo
      this.storage.ready().then( ()=> {
        this.storage.set("historial", this.historial);
      });
    }else{
      //estamos en la PC
      localStorage.setItem("historial", JSON.stringify(this.historial));
    }
  }
}

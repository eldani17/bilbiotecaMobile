import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';

import { Libro } from '../../modelos/libro';

@Injectable()
export class FavoritosProvider {

  favoritos:Libro[]=[];

  constructor(
    public http: HttpClient,
    private storage: Storage,
    private plarform: Platform) {

  }

  leerFavorito(){
    let promesa = new Promise( (resolve, reject) => {
      if (this.plarform.is("cordova")){
        //estamos en el dispositivo
        this.storage.ready().then( ()=> {
          this.storage.get("favoritos").then( (favoritos) => {
            this.favoritos = favoritos;
            resolve();
          });
        });
      }else{
        //estamos en la PC
        if (localStorage.getItem("favoritos")){
          this.favoritos = JSON.parse(localStorage.getItem("favoritos"));
          resolve();
        }
      }
    });

    return promesa;
  }

  agregar(libro:Libro){
    this.favoritos.push(libro);
    this.guardarFavorito();
  }

  elimnar(libro:Libro){
    var index = this.favoritos.findIndex(x => x.id==libro.id);
    if (index > -1) {
     this.favoritos.splice(index, 1);
     this.guardarFavorito();
    }
  }

  existeEnFavorito(id){
    let encontro:boolean=false;
    for (let libro of this.favoritos) {
      if(libro.id == id)
      {
        encontro = true;
        break;
      }
    }
    return encontro;
  }

  guardarFavorito(){
    if (this.plarform.is("cordova")){
      //estamos en el dispositivo
    }else{
      //estamos en la PC
      localStorage.setItem("favoritos", JSON.stringify(this.favoritos));
    }
  }
}

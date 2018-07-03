import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { Idioma } from '../../modelos/idioma';
import { Autor } from '../../modelos/autor';
import { Categoria } from '../../modelos/categoria';
import { Libro } from '../../modelos/libro';

import { FavoritosProvider } from '../../providers/favoritos/favoritos';

@IonicPage()
@Component({
  selector: 'page-detallelibro',
  templateUrl: 'detallelibro.html',
})
export class DetallelibroPage {

  libro;
  idiomas:string='';
  autores:string='';
  categorias:string='';

  esFavorito:boolean=false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private favoritosProvider: FavoritosProvider) {
      this.libro = this.navParams.get("libro");
      this.agruparInfo();
      this.favoritosProvider.leerFavorito();
      this.esFavorito = this.existeEnFavoritos(this.libro.id);
  }

  existeEnFavoritos(id: number): boolean {
    return this.favoritosProvider.existeEnFavorito(id);
  }

  agruparInfo(){
    for (var i = 0; i<this.libro.categorias.length;i++)
    {
      let categoria:Categoria = this.libro.categorias[i];
      this.categorias += categoria.nombre + ' - ';
    }

    for (var i = 0; i<this.libro.autores.length;i++)
    {
      let autor:Autor = this.libro.autores[i];
      this.autores += autor.apellido + ' ' + autor.nombre + ' - ';
    }

    this.categorias = this.categorias.substring(0,this.categorias.length - 3);
    this.autores = this.autores.substring(0,this.autores.length - 3);
  }

  agregarFavorito(libro:Libro){
    this.favoritosProvider.agregar(libro);
    this.esFavorito = this.existeEnFavoritos(this.libro.id);
  }

  eliminarFavorito(libro:Libro){
    this.favoritosProvider.elimnar(libro);
    this.esFavorito = this.existeEnFavoritos(this.libro.id);
  }

  cerrarDetalle(){
    this.viewCtrl.dismiss();
  }

}

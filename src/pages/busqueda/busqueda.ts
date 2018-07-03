import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { LibrosProvider } from '../../providers/libros/libros';
import { Autor } from '../../modelos/autor';
import { DetallelibroPage } from '../detallelibro/detallelibro';

import { HistorialProvider } from '../../providers/historial/historial';

@IonicPage()
@Component({
  selector: 'page-busqueda',
  templateUrl: 'busqueda.html',
})
export class BusquedaPage {

  listalibros;
  busqueda:string="";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    public libros: LibrosProvider,
    public loadingCtrl: LoadingController,
    private historialProvider: HistorialProvider) {
      this.cargarLibrosApi();
  }

  ionViewDidLoad() {
  }

  cargarLibrosApi(){
    let loading = this.loadingCtrl.create({
      content: 'Cargando los libros desde la API'
    });

    loading.present();

    return this.libros.restApiGetTodosLosLibros().then(libro => {
      this.listalibros = libro;
      loading.dismiss();
    }).catch(error => {
      console.log(error);
      loading.dismiss();
    });
  }

  detalleLibro(l){
    let modal = this.modalCtrl.create(DetallelibroPage, {libro: l});
    modal.present();
  }

  refrescarLista(refresher){
    this.busqueda='';
    this.cargarLibrosApi().then( data => {
      refresher.complete();
    });
  }

  buscarEnApi(){
    let loading = this.loadingCtrl.create({
      content: 'Buscando libros en la API'
    });

    loading.present();

    this.historialProvider.agregar(this.busqueda);

    return this.libros.restApiGetBuscarLibros(this.busqueda).then(libro => {
      this.listalibros = libro;
      loading.dismiss();
    }).catch(error => {
      console.log(error);
      loading.dismiss();
    });
  }

}

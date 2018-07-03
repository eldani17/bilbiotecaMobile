import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';
import { DetallelibroPage } from '../detallelibro/detallelibro';

@IonicPage()
@Component({
  selector: 'page-favorito',
  templateUrl: 'favorito.html',
})
export class FavoritoPage {
  listalibros;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private favoritosProvider: FavoritosProvider,
    private modalCtrl: ModalController,) {
  }

  ionViewDidEnter() {
    this.favoritosProvider.leerFavorito().then( ()=> {
      this.listalibros = this.favoritosProvider.favoritos;
    });
  }

  detalleLibro(l){
    let modal = this.modalCtrl.create(DetallelibroPage, {libro: l});
    modal.present();
  }

}

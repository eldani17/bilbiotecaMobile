import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HistorialProvider } from '../../providers/historial/historial';

@IonicPage()
@Component({
  selector: 'page-historial',
  templateUrl: 'historial.html',
})
export class HistorialPage {

  historial:string[]=[];
  historialTmp;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private historialProvider: HistorialProvider) {
  }

  ionViewDidEnter() {
    this.historialProvider.leerHistorial().then( ()=> {
      this.historialTmp = this.historialProvider.historial;
      this.ultimasCincoBusquedas();
    });
  }

  ultimasCincoBusquedas(){
    let cantidad:number=0;
    let tamanoLista:number=this.historialTmp.length;
    this.historial=[];
    while(cantidad <=5 && tamanoLista>=0){
      cantidad++;
      this.historial.push(this.historialTmp[tamanoLista]);
      tamanoLista--;
    }
  }

}

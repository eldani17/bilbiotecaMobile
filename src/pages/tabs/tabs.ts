import { Component } from '@angular/core';

import { BusquedaPage } from '../busqueda/busqueda';
import { HistorialPage } from '../historial/historial';
import { FavoritoPage } from '../favorito/favorito';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabBusqueda = BusquedaPage;
  tabHistorial = HistorialPage;
  tabFavorito = FavoritoPage;

  constructor() {

  }
}

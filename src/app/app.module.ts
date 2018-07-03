import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { BusquedaPage } from '../pages/busqueda/busqueda';
import { HistorialPage } from '../pages/historial/historial';
import { FavoritoPage } from '../pages/favorito/favorito';
import { TabsPage } from '../pages/tabs/tabs';
import { DetallelibroPage } from '../pages/detallelibro/detallelibro';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule } from '@angular/common/http';

//SERVICIOS
import { LibrosProvider } from '../providers/libros/libros';
import { FavoritosProvider } from '../providers/favoritos/favoritos';
import { HistorialProvider } from '../providers/historial/historial';

//PLUGINS
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    BusquedaPage,
    HistorialPage,
    FavoritoPage,
    TabsPage,
    DetallelibroPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BusquedaPage,
    HistorialPage,
    FavoritoPage,
    TabsPage,
    DetallelibroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LibrosProvider,
    FavoritosProvider,
    HistorialProvider
  ]
})
export class AppModule {}

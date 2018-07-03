import { Categoria } from './categoria';
import { Autor } from './autor';
import { Idioma } from './idioma';

export interface Libro {
  id: number;
  titulo: string;
  isbn: string;
  edicion:string;
  descripcion:string;
  editorial:string;
  categorias:Categoria[];
  autores:Autor[];
  idioma:Idioma;
}

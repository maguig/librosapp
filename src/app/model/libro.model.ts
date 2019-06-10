export class Libro {
  nombre: string;
  resena: string;
  img: string;
  autor: string;
  paginas: number;
  edicion: number;
  idioma: string;
  stock?: number;
  key$?: string;

  static convertToArray = function(objectoFirebase): any[] {
    return Object.keys(objectoFirebase).map(key => {
      var obj = objectoFirebase[key];
      obj.key$ = key;
      return obj;
    });
  };
}

export class LibroPedido {
  idUsuario: string;
  imgLibro: string;
  idLibro: string;
  fechaReserva?: Date;
  estado: string;
  key$?: string;

  constructor(idUsuario: string, idLibro: string, imgLibro: string) {
    this.imgLibro = imgLibro;
    this.idUsuario = idUsuario;
    this.idLibro = idLibro;
    this.fechaReserva = new Date(Date.now());
    this.estado = "pendiente";
  }

  static convertToArray = function(objectoFirebase): any[] {
    return Object.keys(objectoFirebase).map(key => {
      var obj = objectoFirebase[key];
      obj.key$ = key;
      return obj;
    });
  };
}

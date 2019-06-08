export class LibroPedido {
  idUsuario: string;
  nombreUsuario: string;
  imgLibro: string;
  nombreLibro: string;
  idLibro: string;
  fechaReserva?: Date;
  estado: string;
  key$?: string;

  constructor(
    idUsuario: string,
    idLibro: string,
    imgLibro: string,
    nombreLibro: string,
    nombreUsuario: string
  ) {
    this.nombreUsuario = nombreUsuario;
    this.nombreLibro = nombreLibro;
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

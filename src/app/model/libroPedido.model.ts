export class LibroPedido {
  idUsuario: string;
  nombreUsuario: string;
  mailUsuario: string;
  imgLibro: string;
  nombreLibro: string;
  idLibro: string;
  fechaReserva?: Date;
  fechaDevolucion?: Date;
  estado: string;
  key$?: string;

  constructor(
    idUsuario: string,
    idLibro: string,
    mailUsuario: string,
    imgLibro: string,
    nombreLibro: string,
    nombreUsuario: string
  ) {
    this.nombreUsuario = nombreUsuario;
    this.nombreLibro = nombreLibro;
    this.mailUsuario = mailUsuario;
    this.imgLibro = imgLibro;
    this.idUsuario = idUsuario;
    this.idLibro = idLibro;
    this.fechaReserva = new Date(Date.now());
    this.estado = "Pendiente";
  }

  static convertToArray = function(objectoFirebase): any[] {
    if (objectoFirebase) {
      return Object.keys(objectoFirebase).map(key => {
        var obj = objectoFirebase[key];
        obj.key$ = key;
        return obj;
      });
    } else {
      return [];
    }
  };
}

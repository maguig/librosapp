export class LibroPedido {
  idUsuario: string;
  idLibro: string;
  fechaReserva: number;
  estado: string;
  key$?: string;

  constructor(idUsuario: string, idLibro: string) {
    this.idUsuario = idUsuario;
    this.idLibro = idLibro;
    this.fechaReserva = Date.now();
    this.estado = "pendiente"
  }

  static convertToArray = function (objectoFirebase): any[] {
    return Object.keys(objectoFirebase).map(key => {
      var obj = objectoFirebase[key];
      obj.key$ = key;
      return obj;
    });
  };
}

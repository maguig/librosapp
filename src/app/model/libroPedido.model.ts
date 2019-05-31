export class LibroPedido {
  idUsuario: string;
  idLibro: string;
  fechaReserva: number;
  estado: string;
  cantidadPedida: number;
  Key$?: string;

  static convertToArray = function(objectoFirebase): any[] {
    return Object.keys(objectoFirebase).map(key => {
      var obj = objectoFirebase[key];
      obj.key$ = key;
      return obj;
    });
  };
}

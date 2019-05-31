export class Usuario {
  nombre: string;
  apellido: string;
  mail: string;
  contrasena: string;
  administrador?: boolean;
  key$?: string;

  constructor(
    nombre: string,
    apellido: string,
    mail: string,
    contrasena: string
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.mail = mail;
    this.contrasena = contrasena;
    this.administrador = false;
  }

  static convertToArray = function(objectoFirebase): any[] {
    return Object.keys(objectoFirebase).map(key => {
      var obj = objectoFirebase[key];
      obj.key$ = key;
      return obj;
    });
  };
}

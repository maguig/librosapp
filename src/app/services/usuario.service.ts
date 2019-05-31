import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Usuario } from "../model/usuario.model";

@Injectable({
  providedIn: "root"
})
export class UsuarioService {
  usuariosURL = "https://usuario-e59c7.firebaseio.com/usuario.json";
  usuarioURL = "https://usuario-e59c7.firebaseio.com/usuario";
  constructor(private http: HttpClient) {}

  nuevoUsuario(usuario: Usuario) {
    let body = JSON.stringify(usuario);
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    return this.http.post(this.usuariosURL, body, { headers });
  }

  actualizarUsuario(usuario: Usuario, key$: string) {
    let body = JSON.stringify(usuario);
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    let url = `${this.usuarioURL}/${key$}.json`;
    return this.http.put(url, body, { headers });
  }

  obtenerUsuario(key$: string) {
    let url = `${this.usuarioURL}/${key$}.json`;
    return this.http.get(url);
  }

  obtenerUsuarios() {
    return this.http.get(this.usuariosURL);
  }

  borrarUsuario(key$: string) {
    let url = `${this.usuarioURL}/${key$}.json`;
    return this.http.delete(url);
  }
  borrarUsuarioAdm(key$: string) {
    let url = `${this.usuarioURL}/${key$}.json`;
    return this.http.delete(url);
  }

  // crearSiNoExiste(usuario: Usuario) {
  //   this.obtenerUsuarios().subscribe((data: Array<any>) => {
  //     let existeUser = false;

  //     if (data) {
  //       Usuario.convertToArray(data).forEach(usr => {
  //         if (usr.mail === usuario.mail) {
  //           existeUser = true;
  //         }
  //       });
  //     }

  //     if (existeUser == false) {
  //       this.nuevoUsuario(usuario).subscribe(
  //         d => console.log(d),
  //         e => console.log(e)
  //       );
  //     }
  //   });
  // }
}

import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../../../model/usuario.model";
import { UsuarioService } from "src/app/services/usuario.service";

@Component({
  selector: "app-usuario-adm",
  templateUrl: "./usuario-adm.component.html",
  styleUrls: ["./usuario-adm.component.css"]
})
export class UsuarioAdmComponent implements OnInit {
  todosLosUsuarios: Usuario[];
  usuarios: Usuario[];
  usuario: Usuario = null;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuarioService
      .obtenerUsuarios()
      // .subscribe(this.cuandoRecibaLosusuarios, this.cuandoFalleLaBusqueda);
      .subscribe(
        data => {
          this.usuarios = Usuario.convertToArray(data);
        },
        error => console.error(error)
      );
  }

  buscarPorId(id: string) {
    let arrIdUsr: Usuario[] = [];

    for (let i = 0; i < this.usuarios.length; i++) {
      let usuario = this.usuarios[i];
      let usuarioId = usuario.key$;
      if (id === usuarioId) {
        arrIdUsr.push(usuario);
      }
    }

    this.usuarios = arrIdUsr;
  }

  verTodos() {
    this.usuarioService
      .obtenerUsuarios()
      // .subscribe(this.cuandoRecibaLosusuarios, this.cuandoFalleLaBusqueda);
      .subscribe(
        data => {
          this.usuarios = Usuario.convertToArray(data);
        },
        error => console.error(error)
      );
  }
}

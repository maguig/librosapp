import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Usuario } from "../../../model/usuario.model";
import { UsuarioService } from "../../../services/usuario.service";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  usuario: Usuario = null;
  existeUser = true;
  passwordIncorrecto: boolean = false;
  constructor(
    private usuarioService: UsuarioService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.usuario = {
      nombre: "",
      apellido: "",
      mail: "",
      contrasena: "",
      administrador: false
    };
  }

  ngOnInit() { }

  ingresarSiEstaRegistrado(usuario: Usuario) {
    this.usuarioService.obtenerUsuarios().subscribe((data: Array<any>) => {
      this.existeUser = false;

      if (data) {
        Usuario.convertToArray(data).forEach(usr => {

          //Primero valido que el user exista
          if (usr.mail === usuario.mail) {
            //El usuario existe
            this.existeUser = true;

            //Luego valido que el usuario haya ingresado la contraseña correcta
            if (usr.contrasena === usuario.contrasena) {
              //hago login del usuario (lo guardo en sesion)
              this.authService.login(usr);

              //llevo al usuario autenticado al catalogo
              this.router.navigate(["/catalogo"]);
            }
            else {
              this.passwordIncorrecto = true;
            }
          }

        });
      }
    });
  }
}

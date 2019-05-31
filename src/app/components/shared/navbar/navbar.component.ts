import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Usuario } from "../../../model/usuario.model";
import { UsuarioService } from "../../../services/usuario.service";
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent {
  agregar: boolean = false;
  profile: any;
  usuario: Usuario[] = [];
  username: string = "";
  userPicture: string = "";

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit() { }

  hayUsuarioLogueado(): boolean {
    if (this.authService.isAuthenticated() == true)
      return true;

    return false;
  }
}

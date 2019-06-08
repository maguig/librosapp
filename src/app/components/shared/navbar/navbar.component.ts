import { Component } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { LibrosPedidosService } from "src/app/services/libros-pedidos.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent {
  totalPedidosUsuario: number = 0;

  constructor(
    private router: Router,
    public authService: AuthService,
    public pedidoService: LibrosPedidosService
  ) {}

  ngOnInit() {}

  logout() {
    this.authService.logout();
    this.pedidoService.totalPedidosUsuario = 0;
    console.log(this.totalPedidosUsuario);
    this.router.navigateByUrl("/catalogo");
  }
}

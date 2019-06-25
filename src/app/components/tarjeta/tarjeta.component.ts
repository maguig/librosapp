import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LibrosService } from "../../Services/libros.service";
import { LibroPedido } from "../../model/libroPedido.model";
import { LibrosPedidosService } from "../../services/libros-pedidos.service";
import { AuthService } from "src/app/services/auth.service";
@Component({
  selector: "app-tarjeta",
  templateUrl: "./tarjeta.component.html",
  styleUrls: ["./tarjeta.component.css"]
})
export class TarjetaComponent implements OnInit {
  @Input() libros: any;
  @Input() libro: any = {};

  constructor(
    private router: Router,
    private librosService: LibrosService,
    private pedidosService: LibrosPedidosService,
    public authService: AuthService
  ) {}
  ngOnInit() {}
  borrarLibro(key$: string) {
    this.librosService.borrarLibro(key$).subscribe(error => {
      if (error) {
        console.error(error);
      } else {
        //Todo bien
        let idx = null;
        this.libros.forEach((libro, i) => {
          if (libro.key$ == key$) {
            idx = i;
          }
        });
        this.libros.splice(idx, 1);
      }
    });
  }
  verLibro(key: string) {
    this.router.navigate(["/libro", key]);
  }

  reservarLibro(idLibro: string, imgLibro: string, nombreLibro: string) {
    if (this.authService.isAuthenticated()) {
      var idUsuario = this.authService.usuarioLogueado.key$;
      var nombreUsuario = this.authService.usuarioLogueado.nombre;
      var mailUsuario = this.authService.usuarioLogueado.mail;
      var reserva = new LibroPedido(
        idUsuario,
        idLibro,
        mailUsuario,
        imgLibro,
        nombreLibro,
        nombreUsuario
      );
      this.pedidosService.nuevoPedido(reserva).subscribe(
        d => {
          console.log(d);
          this.pedidosService.actualizarTotalPedidosUsuario();
        },
        e => console.log(e)
      );
    } else {
      alert("Primero debe hacer login para poder reservar!");
      this.router.navigate(["/login"]);
    }
  }
}

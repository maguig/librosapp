import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LibroPedido } from "../../model/libroPedido.model";
import { LibrosPedidosService } from "../../services/libros-pedidos.service";
import { UsuarioService } from "../../services/usuario.service";
import { Usuario } from "src/app/model/usuario.model";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-pedidos",
  templateUrl: "./pedidos.component.html",
  styleUrls: ["./pedidos.component.css"]
})
export class PedidosComponent implements OnInit {
  pedidos: LibroPedido[];
  pedido: LibroPedido;
  usuario: Usuario;
  librosPedidos: LibroPedido[] = [];
  constructor(
    private usuarioService: UsuarioService,
    public pedidosService: LibrosPedidosService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.pedidosService.obtenerPedidos().subscribe(data => {
      this.pedidos = LibroPedido.convertToArray(data);
      this.pedidos.forEach(pedido => {
        if (pedido.idUsuario === this.authService.usuarioLogueado.key$) {
          this.librosPedidos.push(pedido);
        }
      });
      this.pedidos = this.librosPedidos;
    });
  }

  getFechaDevolucion(reserva: LibroPedido) {
    let fecha: Date;
    let fr = new Date(reserva.fechaReserva.toString());

    if (reserva.fechaReserva) {
      let day = fr.getDate();
      let month = fr.getMonth();
      let year = fr.getFullYear();

      fecha = new Date(year, month, day + 5);
    }

    return fecha;
  }

  borrarPedido(key$: string) {
    this.pedidosService.borrarPedido(key$).subscribe(error => {
      if (error) {
        console.error(error);
      } else {
        //Todo bien
        let idx = null;
        this.pedidos.forEach((pedido, i) => {
          if (pedido.key$ == key$) {
            idx = i;
          }
        });
        this.pedidos.splice(idx, 1);
      }
    });
  }

  volver() {
    this.router.navigateByUrl("/catalogo");
  }

  confirmarReserva() {
    for (let i = 0; i < this.pedidos.length; i++) {
      let libroPedido = this.pedidos[i];
      libroPedido.estado = "confirmado";

      this.pedidosService
        .actualizarPedido(libroPedido, libroPedido.key$)
        .subscribe(data => {});

      this.pedidosService.totalPedidosUsuario = 0;
    }

    this.pedidos = [];
  }
}

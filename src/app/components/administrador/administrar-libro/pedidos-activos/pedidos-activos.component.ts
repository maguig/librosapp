import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { LibrosPedidosService } from "src/app/services/libros-pedidos.service";
import { LibroPedido } from "src/app/model/libroPedido.model";

@Component({
  selector: "app-pedidos-activos",
  templateUrl: "./pedidos-activos.component.html",
  styleUrls: ["./pedidos-activos.component.css"]
})
export class PedidosActivosComponent implements OnInit {
  pedidos: LibroPedido[];
  pedido: LibroPedido = null;
  pedidosAceptados: LibroPedido[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private pedidosService: LibrosPedidosService
  ) {}

  ngOnInit() {
    this.pedidosService.obtenerPedidos().subscribe(data => {
      this.pedidos = LibroPedido.convertToArray(data);

      this.pedidos.forEach(pedido => {
        if (pedido.estado === "Aceptado") {
          this.pedidosAceptados.push(pedido);
        }
      });
      this.pedidos = this.pedidosAceptados;
    });
  }

  getFechaDevolucion(pedido: LibroPedido) {
    let fecha: Date;
    let fr = new Date(pedido.fechaReserva.toString());

    if (pedido.fechaReserva) {
      let day = fr.getDate();
      let month = fr.getMonth();
      let year = fr.getFullYear();

      fecha = new Date(year, month, day + 5);

      this.pedidosService.obtenerPedido(pedido.key$).subscribe(data => {
        if (data) {
          pedido.fechaDevolucion = fecha;
          this.pedidosService
            .actualizarPedido(pedido, pedido.key$)
            .subscribe(data => {});
        }
      });
    }
  }

  getColor(pedido: LibroPedido) {
    let fechaHoy = new Date(Date.now());
    let fechaDevolucion = new Date(pedido.fechaDevolucion.toString());
    if (fechaHoy >= fechaDevolucion) {
      return "red";
    }
  }

  insertarDevolucionLibro(pedido: LibroPedido) {
    this.pedidosService.obtenerPedido(pedido.key$).subscribe(data => {
      if (data) {
        pedido.estado = "Devuelto";
        this.pedidosService
          .actualizarPedido(pedido, pedido.key$)
          .subscribe(data => {
            console.log(data);
          });
      }
    });
  }

  buscarMorosos() {}
}

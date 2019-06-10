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
        if (pedido.estado === "aceptado") {
          this.pedidosAceptados.push(pedido);
        }
      });
      this.pedidos = this.pedidosAceptados;
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
}

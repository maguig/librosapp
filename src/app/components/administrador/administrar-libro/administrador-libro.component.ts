import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Libro } from "../../../model/libro.model";
import { LibrosService } from "../../../Services/libros.service";
import { LibrosPedidosService } from "src/app/services/libros-pedidos.service";
import { LibroPedido } from "../../../model/libroPedido.model";

@Component({
  selector: "app-administrador-libro",
  templateUrl: "./administrador-libro.component.html",
  styleUrls: ["./administrador-libro.component.css"]
})
export class AdministradorLibroComponent implements OnInit {
  libros: any[];

  constructor(
    public pedidosService: LibrosPedidosService,
    private librosService: LibrosService
  ) {}
  ngOnInit() {
    this.librosService.obtenerLibros().subscribe(
      data => {
        this.libros = Libro.convertToArray(data);

        this.actualizarStockPorProducto(this.libros);
      },
      error => console.error(error)
    );
  }

  actualizarStockPorProducto(libros: any[]) {
    this.pedidosService.obtenerPedidos().subscribe(data => {
      let pedidos = LibroPedido.convertToArray(data);

      libros.forEach(libro => {
        libro.stockDisponible = parseInt(libro.stock);

        pedidos.forEach(pedido => {
          if (pedido.estado === "Aceptado" && pedido.idLibro == libro.key$) {
            libro.stockDisponible--;
          } else if (
            pedido.estado === "Devuelto" &&
            pedido.idLibro == libro.key$
          ) {
            if (libro.stockDisponible > 200) {
              libro.stockDisponible++;
            }
          }
        });
      });
    });
  }

  getColor(libro) {
    if (libro.stockDisponible === 20) {
      return "orange";
    } else if (libro.stockDisponible === 0) {
      return "red";
    }
  }

  borrarLibroAdm(key$: string) {
    this.librosService.borrarLibro(key$).subscribe(error => {
      if (error) {
        console.error(error);
      } else {
        //Todo bien
        this.ngOnInit();
      }
    });
  }

  buscarLibro(termino: string) {
    termino = termino.toLowerCase();
    let libroEncontrado = [];

    for (let i = 0; i < this.libros.length; i++) {
      let libro = this.libros[i];

      let nombre = libro.nombre.toLowerCase();

      if (nombre.indexOf(termino) >= 0) {
        libroEncontrado.push(libro);
      }
    }
    this.libros = libroEncontrado;
  }

  verTodos() {
    this.librosService.obtenerLibros().subscribe(
      data => {
        this.libros = Libro.convertToArray(data);
      },
      error => console.error(error)
    );
  }

  buscarSinStock() {
    let librosSinStock = [];

    for (let i = 0; i < this.libros.length; i++) {
      let libro = this.libros[i];

      let stockLibro = this.libros[i].stock;

      if (stockLibro == 0) {
        librosSinStock.push(libro);
      }
    }

    this.libros = librosSinStock;
  }
}

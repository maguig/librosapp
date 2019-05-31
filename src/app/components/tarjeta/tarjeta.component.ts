import { Component, Input, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { LibrosService } from "../../services/libros.service";
import { Libro } from "../../model/libro.model";
import { LibroPedido } from "../../model/libroPedido.model";
import { LibrosPedidosService } from "../../services/libros-pedidos.service";
@Component({
  selector: "app-tarjeta",
  templateUrl: "./tarjeta.component.html",
  styleUrls: ["./tarjeta.component.css"]
})
export class TarjetaComponent implements OnInit {
  nuevo: boolean = false;
  pedido: LibroPedido = null;

  @Input() libros: any;
  @Input() libro: any = {};

  constructor(
    private router: Router,
    private librosService: LibrosService,
    private pedidosService: LibrosPedidosService,
    private activatedRoute: ActivatedRoute
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

  reservarLibro(idLibro: string) {
    console.log(idLibro);
  }
}

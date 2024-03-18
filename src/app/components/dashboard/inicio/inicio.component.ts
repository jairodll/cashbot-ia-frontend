import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ServicesService} from '../../../services.service';
import {catalogoTiposLimites} from '../../../general';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private generalService: ServicesService) { }
  catalogo_gastos: catalogoTiposLimites[] = [];
  form = this.fb.group({
    tipoLimite: [''],
  });
  ngOnInit(): void {
    this.getGastos();
  }

  getGastos() {
    this.generalService
        .getListCatalogoPresupuestos()
        .subscribe((res) => {
          this.catalogo_gastos = res;
        });
  }

}

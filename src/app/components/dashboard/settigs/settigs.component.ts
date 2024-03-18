import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../../services.service';
import {catalogoTiposLimites} from '../../../general';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-settigs',
  templateUrl: './settigs.component.html',
  styleUrls: ['./settigs.component.css']
})
export class SettigsComponent implements OnInit {

  constructor(
      private generalService: ServicesService,
      private fb: FormBuilder
  ) { }

  catalogo_limites: catalogoTiposLimites[] = [];
  form = this.fb.group({
        tipoLimite: [''],
  });

  ngOnInit(): void {
  this.getLimites();
  }

  getLimites() {
    this.generalService
        .getListCatalogoLimites()
        .subscribe((res) => {
          this.catalogo_limites = res;
        });
  }



}

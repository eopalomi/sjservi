import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {
  @Input() PAGE_CONFIG;   // Datos de la Pagina

  constructor() { }

  ngOnInit(): void {
    console.log(this.PAGE_CONFIG);
  }

  /**************** CONFIGURACION DE LA TABLA 02 ***************/
  // CONFIGURACION DE LA PAGINA
  PAGE_CONFIG1: { page_title: string, page_rows: any[], button_page: any[] } = {
    page_title: 'Filtros',
    page_rows: [{ 
      col01: 'Cartera', col01_type: 3, col01_cb: ['', 'Luisa Mori', 'Hilda Ponte'] 
    }],
    button_page: [{
      button_name: 'Filtrar', button_number: 1, button_color: 'blue'
    }]
  };
}

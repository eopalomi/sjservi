import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.css']
})
export class MasterPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  CONTENT: any = {
    conten_name: 'Cartera de Cliente',
    pages_cant: 4,
    pages: [
      {
        id_page: 1,
        type_page: 'F',
        row: 1,
        row_scale: 70,
        data_page: {
          page_title: 'Filtros',
          page_rows: [{ 
            col01: 'Cartera', col01_type: 3, col01_cb: ['', 'Luisa Mori', 'Hilda Ponte'] 
          }],
          button_page: [{
            button_name: 'Filtrar', button_number: 1, button_color: 'blue'
          }]
        }
      },
      {
        id_page: 2,
        type_page: 'R',
        row: 1,
        row_scale: 25,
        data_page: {
          page_title: 'Lista de Vendedores',
          page_rows: [
            { col01: 'Luisa Mori',       col02: '11', col03: '33', col04: '44', col05: '22', col06: '180' },
            { col01: 'Miriam Rodriguez', col02: '3',  col03: '33', col04: '44', col05: '21', col06: '180' },
            { col01: 'Pedro Palacion',   col02: '11', col03: '33', col04: '44', col05: '22', col06: '180' },
            { col01: 'Hilda Ponte',      col02: '18', col03: '33', col04: '44', col05: '23', col06: '180' },
          ],
          title_column: [{ 
            col01: 'Vendedor',    col02: 'Rend. 01', col03: 'Rend. 02', col04: 'Rend. 03',   col05: 'Rend. 04', col06: 'Total'
          }],
          type_column: [{ 
            col01: 1, col02: 1, col03: 1, col04: 1, col05: 1, col06: 1
          }],
          opc_page: [{
            paginator:false, cabecera: true, buscador: false
          }],
          button_page: [{
            button_name: 'Filtrar', button_number: 1, button_color: 'blue'
          }]
        }
      },
      {
        id_page: 2,
        type_page: 'R',
        row: 2,
        row_scale: 100,
        data_page: {
          page_title: 'Lista de Clientes',
          page_rows: [
            { col01: '1',  col02: 'PETRO', col03: 'LOG', col03_color: '#026DA5', col04: 'COMAS', col05: 'Sr. Juan Alore',  col06: 'LOG', col06_color: '#026DA5', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: 'blue', col09: '', col09_ico:'fas fa-paper-plane', col09_color: 'green', col10: '', col10_ico:'far fa-grin',  col10_color: '#026DA5', col11: '', col11_ico:'fas fa-search', col11_color: '#026DA5',},
            { col01: '2',  col02: 'PDVSA', col03: 'ALM', col03_color: '#778A42', col04: 'COMAS', col05: 'Sr. Juan Perez',  col06: 'VEN', col06_color: '#F40100', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: 'blue', col09: '', col09_ico:'fas fa-paper-plane', col09_color: 'green', col10: '', col10_ico:'far fa-tired', col10_color: '#026DA5', col11: '', col11_ico:'fas fa-search', col11_color: '#026DA5',},
            { col01: '3',  col02: 'ALMER', col03: 'CAL', col03_color: '#4BA5BB', col04: 'COMAS', col05: 'Ing. Juan Munip', col06: 'CAL', col06_color: '#4BA5BB', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: 'blue', col09: '', col09_ico:'fas fa-paper-plane', col09_color: 'green', col10: '', col10_ico:'far fa-grin',  col10_color: '#026DA5', col11: '', col11_ico:'fas fa-search', col11_color: '#026DA5',},
            { col01: '4',  col02: 'BONOR', col03: 'LOG', col03_color: '#026DA5', col04: 'COMAS', col05: 'Sr. Juan Perez',  col06: 'PRO', col06_color: '#692F98', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: 'blue', col09: '', col09_ico:'fas fa-paper-plane', col09_color: 'green', col10: '', col10_ico:'far fa-meh',   col10_color: '#026DA5', col11: '', col11_ico:'fas fa-search', col11_color: '#026DA5',},
            { col01: '5',  col02: 'AMBEV', col03: 'ALM', col03_color: '#778A42', col04: 'COMAS', col05: 'Sr. Juan Perez',  col06: 'PRO', col06_color: '#692F98', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: 'blue', col09: '', col09_ico:'fas fa-paper-plane', col09_color: 'green', col10: '', col10_ico:'far fa-angry', col10_color: '#026DA5', col11: '', col11_ico:'fas fa-search', col11_color: '#026DA5',},
            { col01: '6',  col02: 'GROUP', col03: 'PRO', col03_color: '#692F98', col04: 'COMAS', col05: 'Sr. Juan Abdur',  col06: 'LOG', col06_color: '#026DA5', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: 'blue', col09: '', col09_ico:'fas fa-paper-plane', col09_color: 'green', col10: '', col10_ico:'far fa-grin',  col10_color: '#026DA5', col11: '', col11_ico:'fas fa-search', col11_color: '#026DA5',},
            { col01: '7',  col02: 'GROUP', col03: 'PRO', col03_color: '#692F98', col04: 'COMAS', col05: 'Sr. Juan Perez',  col06: 'LOG', col06_color: '#026DA5', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: 'blue', col09: '', col09_ico:'fas fa-paper-plane', col09_color: 'green', col10: '', col10_ico:'far fa-grin',  col10_color: '#026DA5', col11: '', col11_ico:'fas fa-search', col11_color: '#026DA5',},
            { col01: '8',  col02: 'GROUP', col03: 'PRO', col03_color: '#692F98', col04: 'COMAS', col05: 'Ing. Juan Perez', col06: 'LOG', col06_color: '#026DA5', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: 'blue', col09: '', col09_ico:'fas fa-paper-plane', col09_color: 'green', col10: '', col10_ico:'far fa-grin',  col10_color: '#026DA5', col11: '', col11_ico:'fas fa-search', col11_color: '#026DA5',},
            { col01: '9',  col02: 'GROUP', col03: 'PRO', col03_color: '#692F98', col04: 'COMAS', col05: 'Sr. Juan Perez',  col06: 'LOG', col06_color: '#026DA5', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: 'blue', col09: '', col09_ico:'fas fa-paper-plane', col09_color: 'green', col10: '', col10_ico:'far fa-grin',  col10_color: '#026DA5', col11: '', col11_ico:'fas fa-search', col11_color: '#026DA5',},
            { col01: '10', col02: 'GROUP', col03: 'PRO', col03_color: '#692F98', col04: 'COMAS', col05: 'Sr. Juan Falco',  col06: 'LOG', col06_color: '#026DA5', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: 'blue', col09: '', col09_ico:'fas fa-paper-plane', col09_color: 'green', col10: '', col10_ico:'far fa-grin',  col10_color: '#026DA5', col11: '', col11_ico:'fas fa-search', col11_color: '#026DA5',},
            { col01: '11', col02: 'GROUP', col03: 'PRO', col03_color: '#692F98', col04: 'COMAS', col05: 'Sr. Juan Choka',  col06: 'LOG', col06_color: '#026DA5', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: 'blue', col09: '', col09_ico:'fas fa-paper-plane', col09_color: 'green', col10: '', col10_ico:'far fa-grin',  col10_color: '#026DA5', col11: '', col11_ico:'fas fa-search', col11_color: '#026DA5',},
            { col01: '12', col02: 'GROUP', col03: 'PRO', col03_color: '#692F98', col04: 'COMAS', col05: 'Sr. Juan Perez',  col06: 'LOG', col06_color: '#026DA5', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: 'blue', col09: '', col09_ico:'fas fa-paper-plane', col09_color: 'green', col10: '', col10_ico:'far fa-grin',  col10_color: '#026DA5', col11: '', col11_ico:'fas fa-search', col11_color: '#026DA5',},
            { col01: '13', col02: 'GROUP', col03: 'PRO', col03_color: '#692F98', col04: 'COMAS', col05: 'Sr. Juan Perez',  col06: 'LOG', col06_color: '#026DA5', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: 'blue', col09: '', col09_ico:'fas fa-paper-plane', col09_color: 'green', col10: '', col10_ico:'far fa-grin',  col10_color: '#026DA5', col11: '', col11_ico:'fas fa-search', col11_color: '#026DA5',},
            { col01: '14', col02: 'GROUP', col03: 'PRO', col03_color: '#692F98', col04: 'COMAS', col05: 'Ing. Juan Perez', col06: 'LOG', col06_color: '#026DA5', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: 'blue', col09: '', col09_ico:'fas fa-paper-plane', col09_color: 'green', col10: '', col10_ico:'far fa-grin',  col10_color: '#026DA5', col11: '', col11_ico:'fas fa-search', col11_color: '#026DA55',}
          ],
          title_column: [{ 
            col01: 'Item',    col02: 'Razon Social', col03: 'Sector Economico', col04: 'Ubicacion',   col05: 'Contacto', col06: 'Area', col07: 'Vendedor', 
            col08: 'Permiso', col09: 'Retornar',     col10: 'Rendimiento',      col11: 'Reporte'
          }],
          type_column: [{ 
            col01: 1, col02: 1, col03: 2, col04: 1, col05: 1, col06: 2, col07: 1, col08: 3,
            col09: 3, col10: 3, col11: 3
          }],
          opc_page: [{
            paginator:true, cabecera: true, buscador: true
          }],
          button_page: [{
            button_name: 'Filtrar', button_number: 1, button_color: 'blue'
          }]
        }
      }
    ]
  };

  log(val) { 
    console.log(Object.keys(val).length
    ); 
  }
}


/*
PAGE_CONFIG1: { page_title: string, page_rows: any[], button_page: any[] } = {
  page_title: 'Filtros',
  page_rows: [{ 
    col01: 'Cartera', col01_type: 3, col01_cb: ['', 'Luisa Mori', 'Hilda Ponte'] 
  }],
  button_page: [{
    button_name: 'Filtrar', button_number: 1, button_color: 'blue'
  }]
};
*/
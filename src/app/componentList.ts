export const appliCationComponentList  = [
 {
     name : "In Application Componet",
     className : "DemoSecoundComponent",
     moduleDetails: {
      module: null,
    },
     template: `<app-demo-secound [label] ='label' [disabled] = 'disabled' [data]></app-demo-secound>`,
     defaultProperties: {
      label: ''
     },
     properties:[
      { name : 'label', value: "", type: 'inputText'},
      { name : 'data', value: "", type: 'inputText'}
    ]
  },
  {
    name : "Prime NG",
    className : null,
    moduleDetails: {
      module: ["ButtonModule"],
      modulePath: `primeng/button`
    },
    template : `<button pButton type="button" icon="pi pi-check" [iconPos]='iconPos' [label]='label'></button>`,
    defaultProperties: {
      iconPos: 'right',
      label: 'Prime NG Button Demo'
    },
    properties:[
      { name : 'iconPos', value: ['left','right'], type: 'list'},
      { name : 'label', value: "", type: 'inputText'}
    ]
  },
  {
    name : "Defualt AM Button ",
    className : null,
    moduleDetails: {
      module: null,
    },
    template : `<button mat-raised-button [color]='color' [disabled]="disabled">AM Primary</button>`,
    defaultProperties: {
      color: 'primary',
      disabled: false,
    },
    properties:[
      { name : 'color', value: "", type: 'inputText'},
      { name : 'disabled', value:"true", type: 'checkbox'},
    ]
  },
  {
    name : "Defualt AM Menu List",
    className : null,
    moduleDetails: {
      module: ['MatButtonModule', 'MatIconModule', 'MatMenuModule'],
      template : `<button mat-button [matMenuTriggerFor]="menu">Menu</button> <mat-menu #menu="matMenu">
        <button mat-menu-item *ngFor="let shoe of typesOfShoes">{{shoe}}</button>
      </mat-menu>`,
    },
    template : `<button mat-button [matMenuTriggerFor]="menu">Menu</button> <mat-menu #menu="matMenu">
      <button mat-menu-item *ngFor="let shoe of typesOfShoes">{{shoe}}</button>
    </mat-menu>`,
    defaultProperties: {
      typesOfShoes: ['Boots', 'Clogs']
    },
    properties:[
      { name : 'typesOfShoes', value: "", type: 'Text'},
    ]
  }
]
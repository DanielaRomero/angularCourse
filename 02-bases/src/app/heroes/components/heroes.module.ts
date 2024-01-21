import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";

// Los common modules solo vienen por defecto en el app module
// El resto de modulos que utilicen los modulos deben importarlos

@NgModule({
  declarations:[
    HeroComponent,
    ListComponent
  ],
  exports:[
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule {}

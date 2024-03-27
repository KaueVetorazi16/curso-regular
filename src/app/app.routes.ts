import { Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';


export const routes: Routes = [
  {path: '', component: FirstComponentComponent},
  {path: 'list', component: ListRenderComponent},
  {path: 'list/:id', component: ItemDetailComponent},
  {path: 'if-render', component: IfRenderComponent},
  {path: 'list-render', component: ListRenderComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'parent-data', component: ParentDataComponent},
  {path: 'two-way-binding', component: TwoWayBindingComponent}
];

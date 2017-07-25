import { ChampionComponent }	from "./pages/champion/champion.component";
import { ListComponent }		from "./pages/list/list.component";
import { ListadoComponent }		from "./pages/listado/list.component";
import { BusquedaComponent }	from "./pages/busqueda/busqueda.component";
import { CampeonComponent }		from "./pages/campeon/campeon.component";

export const routes = [
	{ path: "", component:  BusquedaComponent },
	{ path: "champion", component: ChampionComponent },
	{ path: "campeon/:campeon", component: CampeonComponent },
	{ path: "lista", component: ListComponent },
	{ path: "listado", component: ListadoComponent },
	{ path: "listado/:busqueda", component: ListadoComponent },
	{ path: "buscar", component: BusquedaComponent }
];

export const navigatableComponents = [
	BusquedaComponent,
	ChampionComponent,
	CampeonComponent,
	ListComponent,
	ListadoComponent
];
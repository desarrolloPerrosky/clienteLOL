import { Informacion }		from "./informacion";
import { Status }			from "./status";
import { InfoImagen }		from "./info-imagen";
import { Skin }				from "./skin";
import { Pasiva }			from "./pasiva";
import { Recomendacion }	from "./recomendacion";
import { Hechizo }			from "./hechizo";

export class CampeonFull {
	constructor(
		public info: Informacion,
		public enemytips: Array<string>,
		public stats: Status,
		public name: string,
		public title: string,
		public image: InfoImagen,
		public tags: Array<string>,
		public partype: string,
		public skins: Array<Skin>, 
		public passive:Pasiva,
		public recommended: Array<Recomendacion>,
		public allytips: Array<string>, // tips de juego
		public key: string,
		public lore: string, // Historia + html
		public id: number,
		public blurb: string, // Historia corta ...
		public spells: Array<Hechizo>
	) { 
	}

	static NEW(dto:any):CampeonFull{
		return new CampeonFull(
			Informacion.NEW(dto.info),
			dto.enemytips,
			Status.NEW(dto.stats),
			dto.name,
			dto.title,
			InfoImagen.NEW( dto.image ),
			dto.tags,
			dto.partype,
			Skin.ALL(dto.skins),
			Pasiva.NEW(dto.passive),
			Recomendacion.ALL(dto.recommended),
			dto.allytips,
			dto.key,
			dto.lore,
			dto.id,
			dto.blurb,
			Hechizo.ALL(dto.spells)
		)
	}
}
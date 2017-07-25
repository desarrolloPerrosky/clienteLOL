import { Variable }    from "./variable";
import { TipPorNivel } from "./tip-por-nivel";
import { InfoImagen } from "./info-imagen";

export class Hechizo {
	constructor(
        public cooldownBurn : string, // "9/8/7/6/5"
        public key: string, // "MonkeyKingDoubleAttack",
        public resource: string, // "{{ cost }} de maná",
        
        // level tips
		public leveltip: TipPorNivel,

        public vars: Array<Variable>,
        public costType: string, // " de maná",
        public description: string, // "El siguiente ataque de Wukong causa daño físico adicional, aumenta el alcance y reduce la armadura del enemigo durante breve tiempo.",
        public sanitizedDescription: string, // "El siguiente ataque de Wukong causa daño físico adicional, aumenta el alcance y reduce la armadura del enemigo durante breve tiempo.",
        public sanitizedTooltip: string, // "El siguiente ataque de Wukong obtiene {{ e4 }} de alcance, causa {{ e1 }} (+{{ a1 }}) de daño físico adicional y reduce la armadura del enemigo un {{ e2 }}% durante {{ e3 }} s.",
        public effect: Array<Array<number>>, // [null,[30,60,90,120,150],[10,15,20,25,30],[3,3,3,3,3],[125,125,125,125,125],[6,6,6,6,6],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
        public tooltip: string, // "El siguiente ataque de Wukong obtiene {{ e4 }} de alcance, causa {{ e1 }} <span class=\"colorFF8C00\">(+{{ a1 }})</span> de daño físico adicional y reduce la armadura del enemigo un {{ e2 }}% durante {{ e3 }} s.",

        public maxrank: number, //5,
        public costBurn: number, // "40",
        public rangeBurn: number ,// "650",
        public range: Array<number>,//[650,650,650,650,650],
        public cost: Array<number>,//[40,40,40,40,40],
        public effectBurn: Array<string>,// ["","30/60/90/120/150","10/15/20/25/30","3","125","6","0","0","0","0","0"],
		public image: InfoImagen,
        public cooldown: Array<number>,// Enfriamiento ?[9,8,7,6,5]
		public name:string //  "Golpe aplastante"
    ){ 
    }
	static NEW(dto:any):Hechizo{
        return new Hechizo(
            dto.cooldownBurn,
            dto.key,
            dto.resource,
		    TipPorNivel.NEW(dto.leveltip),
            Variable.ALL(dto.vars),
            dto.costType,
            dto.description,
            dto.sanitizedDescription,
            dto.sanitizedTooltip,
            dto.effect,// Array<Array<number>>
            dto.tooltip,
            dto.maxrank,
            dto.costBurn,
            dto.rangeBurn,
            dto.range,
            dto.cost,
            dto.effectBurn,
		    InfoImagen.NEW(dto.image),
            dto.cooldown,
		    dto.name);
    }


    static ALL(dto:Array<any>):Array<Hechizo>{
        let arreglo:Array<Hechizo> = [];
        
        for(let _dto of dto){
            arreglo.push( Hechizo.NEW(_dto));
        }

        return arreglo;
    }
}
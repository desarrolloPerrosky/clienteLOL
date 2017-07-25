import { Blockeo }		from "./blockeo";

export class Recomendacion {
    constructor(
        public map: string,
        public blocks: Array<Blockeo>,
        public champion: string,
        public title: string,
        public mode: string,
        public type: string,
    ){
    }
    
    static NEW(dto:any): Recomendacion{
        return new Recomendacion(
            dto.map,
            Blockeo.ALL( dto.blocks ),
            dto.champion,
            dto.title,
            dto.mode,
            dto.type);
    }

    static ALL(dto:Array<any>):Array<Recomendacion>{
        let arreglo:Array<Recomendacion> = [];
        
        for(let _dto of dto){
            arreglo.push( Recomendacion.NEW(_dto));
        }

        return arreglo;
    }
}
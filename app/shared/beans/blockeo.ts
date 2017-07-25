// Creo que son bloqueos ?
import { Item }		from "./item";

export class Blockeo {
	constructor(
        public items: Array<Item>,
        public recMath: boolean,
        public type: string
    ){
        /**
         * beginner_starter
         * beginner_advanced
         * beginner_movementspeed
         * beginner_legendaryitem
         * beginner_morelegendaryitems
         * consumables
         * defensive
         * offensive
         * essential
         * startingjungle
         * starting
         */
        this.type =  '';
    }

    static NEW(dto:any):Blockeo{
        return new Blockeo(
            Item.ALL(dto.items),
            dto.recMath,
            dto.type
        );
    }
    static ALL(dto:Array<any>):Array<Blockeo>{
        let arreglo:Array<Blockeo> = [];
        
        for(let _dto of dto){
            arreglo.push( Blockeo.NEW(_dto));
        }

        return arreglo;
    }
}
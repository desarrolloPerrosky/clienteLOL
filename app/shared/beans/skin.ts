export class Skin {
	constructor(
        public num :number,
        public id :number,
        public name :string
    ){ 
    }
    static NEW(dto:any):Skin{
        return new Skin(
            dto.num,
            dto.id,
            dto.name
        );
    }
    static ALL(dto:Array<any>):Array<Skin>{
        let arreglo:Array<Skin> = [];
        
        for(let _dto of dto){
            arreglo.push( Skin.NEW(_dto));
        }

        return arreglo;
    }
}
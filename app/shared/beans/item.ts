export class Item {
	constructor(
        public count :number,
        public id :number
    ){ 
    }

    static NEW(dto:any):Item{
        return new Item(
            dto.count,
            dto.id
        );
    }

    static ALL(dto:Array<any>):Array<Item>{
        let arreglo:Array<Item> = [];
        
        for(let _dto of dto){
            arreglo.push( Item.NEW(_dto));
        }
        
        return arreglo;
    }
}
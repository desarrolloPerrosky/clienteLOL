export class Variable {
	constructor(
        public coeff :Array<number>, // Coeficiente?
        public link: string, // "attackdamage"
        public key :string
    ){ 
    }

    static NEW(dto:any): Variable{
        return new Variable(
            dto.coeff,
            dto.link,
            dto.key
        );
    }

    static ALL(dto ):Array<Variable>{
        if(dto && dto.length > 0){
            let arreglo:Array<Variable> = [];
            for(let _dto of dto){
                arreglo.push( Variable.NEW(_dto));
            }
            return arreglo;
        }    
        return [];
    }
}
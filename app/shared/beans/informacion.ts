export class Informacion {
	constructor(
        public difficulty: number,
        public attack: number,
        public defense: number,
        public magic: number
    ){ 
    }
	static NEW(dto:any): Informacion{
        return new Informacion(
            dto.difficulty,
            dto.attack,
            dto.defense,
            dto.magic
        ); 
    }
}
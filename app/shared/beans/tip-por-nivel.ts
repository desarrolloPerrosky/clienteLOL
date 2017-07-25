export class TipPorNivel {
	constructor(
        public effect :Array<string>, // Efectos?
        public label :Array<string>, // Nombres?
    ){ 
    }
    static NEW(dto:any):TipPorNivel{
        return new TipPorNivel(
            dto.effect,
            dto.label
        );
    }
}
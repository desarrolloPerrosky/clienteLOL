import { InfoImagen }	from "./info-imagen";

export class Pasiva {
    constructor(
        public image : InfoImagen,
        public sanitizedDescription :string,
		public name: string,
        public description: string
    ){
    }
    
    static NEW(dto:any):Pasiva{
        return new Pasiva(
            InfoImagen.NEW( dto.image),
            dto.sanitizedDescription,
            dto.name,
            dto.description
        );
    }
}
/**
 * "full": "MonkeyKingDoubleAttack.png",
 * "group": "spell",
 * "sprite": "spell7.png",
 * "h": 48,
 * "w": 48,
 * "y": 48,
 * "x": 336
 */
export class InfoImagen {
	constructor(
		public full: string,
		public group: string,
		public sprite: string,
		public h: number,
		public w: number,
		public y: number,
        public x: number
    ){
	}
	static NEW(dto:any):InfoImagen{
		return new InfoImagen(
			dto.full,
			dto.group,
			dto.sprite,
			dto.h,
			dto.w,
			dto.y,
			dto.x
		);
	}
}



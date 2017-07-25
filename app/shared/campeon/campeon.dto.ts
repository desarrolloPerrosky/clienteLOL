export class CampeonDto {
	public title: string;
	public name: string;
	public icono: string;
	
	
	constructor(
		public id: number,
		public nombre: string
	) {
		this.title = "Sin información";
		this.icono = "res://"+nombre.toLowerCase();
	}
}
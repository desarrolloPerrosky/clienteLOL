export class Status {

/*
            "stats": {
                "armorperlevel": 3.5, // Armadura por nivel
                "attackdamage": 58.46, // ataque inicial
                "mp per level": 45, // aumento de mana por nivel 
                "attack speed offset": 0, // Velocidad de ataque inicial 
                "mp": 245.6, // Mana ? combustible para los hechizos

                "armor": 22.88, // Armadura
                
                "hp": 517.76, // Vida
                "hp regen per level": 0.5, // regenracion de vida por nivel

                "attackspeedperlevel": 1, // Aumento de ataque por nivel
                "attackrange": 525,    // Rango de ataque
                "movespeed": 325, // Velocidad de movimiento
                "attack damage per level": 2.41, // Daño de ataque por nivel
                "mp regen per level": 1, // Regeneracion de mana * segundo
                
                "critperlevel": 0, // Criticos por nivel
                "spell block per level": 0.5,// Bloqueos Hechizo ???? 
                "crit": 0, // Criticos
                
                "mp regen": 6.68, // Regeneracion de Vida * tiempo
                "spellblock": 30, // Bloqueo de hechizos
                
                "hpregen": 5.84, // Por que ? por segundo minuto ?
                "hp per level": 82 // aumento de vida por nivel 
            },
*/
	constructor(
        public armorperlevel :number,
        public attackdamage :number,
        public mpperlevel :number,
        public attackspeedoffset :number,
        public mp :number,
        public armor :number,
        public hp :number,
        public hpregenperlevel :number,
        public attackspeedperlevel :number,
        public attackrange :number,
        public movespeed :number,
        public attackdamageperlevel :number,
        public mpregenperlevel :number,
        public critperlevel :number,
        public spellblockperlevel :number,
        public crit :number,
        public mpregen :number,
        public spellblock :number,
        public hpregen :number,
        public hpperlevel :number
    ){ 
    }

    static NEW (dto:any): Status{
        return new Status(
            dto.armorperlevel,
            dto.attackdamage,
            dto.mpperlevel,
            dto.attackspeedoffset,
            dto.mp,
            dto.armor,
            dto.hp,
            dto.hpregenperlevel,
            dto.attackspeedperlevel,
            dto.attackrange,
            dto.movespeed,
            dto.attackdamageperlevel,
            dto.mpregenperlevel,
            dto.critperlevel,
            dto.spellblockperlevel,
            dto.crit,
            dto.mpregen,
            dto.spellblock,
            dto.hpregen,
            dto.hpperlevel
        );
    }
}
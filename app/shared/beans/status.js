"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Status = (function () {
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
    function Status(armorperlevel, attackdamage, mpperlevel, attackspeedoffset, mp, armor, hp, hpregenperlevel, attackspeedperlevel, attackrange, movespeed, attackdamageperlevel, mpregenperlevel, critperlevel, spellblockperlevel, crit, mpregen, spellblock, hpregen, hpperlevel) {
        this.armorperlevel = armorperlevel;
        this.attackdamage = attackdamage;
        this.mpperlevel = mpperlevel;
        this.attackspeedoffset = attackspeedoffset;
        this.mp = mp;
        this.armor = armor;
        this.hp = hp;
        this.hpregenperlevel = hpregenperlevel;
        this.attackspeedperlevel = attackspeedperlevel;
        this.attackrange = attackrange;
        this.movespeed = movespeed;
        this.attackdamageperlevel = attackdamageperlevel;
        this.mpregenperlevel = mpregenperlevel;
        this.critperlevel = critperlevel;
        this.spellblockperlevel = spellblockperlevel;
        this.crit = crit;
        this.mpregen = mpregen;
        this.spellblock = spellblock;
        this.hpregen = hpregen;
        this.hpperlevel = hpperlevel;
    }
    Status.NEW = function (dto) {
        return new Status(dto.armorperlevel, dto.attackdamage, dto.mpperlevel, dto.attackspeedoffset, dto.mp, dto.armor, dto.hp, dto.hpregenperlevel, dto.attackspeedperlevel, dto.attackrange, dto.movespeed, dto.attackdamageperlevel, dto.mpregenperlevel, dto.critperlevel, dto.spellblockperlevel, dto.crit, dto.mpregen, dto.spellblock, dto.hpregen, dto.hpperlevel);
    };
    return Status;
}());
exports.Status = Status;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RhdHVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUE2QkU7SUFDRCxnQkFDYyxhQUFxQixFQUNyQixZQUFvQixFQUNwQixVQUFrQixFQUNsQixpQkFBeUIsRUFDekIsRUFBVSxFQUNWLEtBQWEsRUFDYixFQUFVLEVBQ1YsZUFBdUIsRUFDdkIsbUJBQTJCLEVBQzNCLFdBQW1CLEVBQ25CLFNBQWlCLEVBQ2pCLG9CQUE0QixFQUM1QixlQUF1QixFQUN2QixZQUFvQixFQUNwQixrQkFBMEIsRUFDMUIsSUFBWSxFQUNaLE9BQWUsRUFDZixVQUFrQixFQUNsQixPQUFlLEVBQ2YsVUFBa0I7UUFuQmxCLGtCQUFhLEdBQWIsYUFBYSxDQUFRO1FBQ3JCLGlCQUFZLEdBQVosWUFBWSxDQUFRO1FBQ3BCLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDbEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFRO1FBQ3pCLE9BQUUsR0FBRixFQUFFLENBQVE7UUFDVixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUNWLG9CQUFlLEdBQWYsZUFBZSxDQUFRO1FBQ3ZCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBUTtRQUMzQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQixjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBUTtRQUM1QixvQkFBZSxHQUFmLGVBQWUsQ0FBUTtRQUN2QixpQkFBWSxHQUFaLFlBQVksQ0FBUTtRQUNwQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQVE7UUFDMUIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ2xCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixlQUFVLEdBQVYsVUFBVSxDQUFRO0lBRTdCLENBQUM7SUFFTSxVQUFHLEdBQVYsVUFBWSxHQUFPO1FBQ2YsTUFBTSxDQUFDLElBQUksTUFBTSxDQUNiLEdBQUcsQ0FBQyxhQUFhLEVBQ2pCLEdBQUcsQ0FBQyxZQUFZLEVBQ2hCLEdBQUcsQ0FBQyxVQUFVLEVBQ2QsR0FBRyxDQUFDLGlCQUFpQixFQUNyQixHQUFHLENBQUMsRUFBRSxFQUNOLEdBQUcsQ0FBQyxLQUFLLEVBQ1QsR0FBRyxDQUFDLEVBQUUsRUFDTixHQUFHLENBQUMsZUFBZSxFQUNuQixHQUFHLENBQUMsbUJBQW1CLEVBQ3ZCLEdBQUcsQ0FBQyxXQUFXLEVBQ2YsR0FBRyxDQUFDLFNBQVMsRUFDYixHQUFHLENBQUMsb0JBQW9CLEVBQ3hCLEdBQUcsQ0FBQyxlQUFlLEVBQ25CLEdBQUcsQ0FBQyxZQUFZLEVBQ2hCLEdBQUcsQ0FBQyxrQkFBa0IsRUFDdEIsR0FBRyxDQUFDLElBQUksRUFDUixHQUFHLENBQUMsT0FBTyxFQUNYLEdBQUcsQ0FBQyxVQUFVLEVBQ2QsR0FBRyxDQUFDLE9BQU8sRUFDWCxHQUFHLENBQUMsVUFBVSxDQUNqQixDQUFDO0lBQ04sQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDLEFBaEZELElBZ0ZDO0FBaEZZLHdCQUFNIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFN0YXR1cyB7XHJcblxyXG4vKlxyXG4gICAgICAgICAgICBcInN0YXRzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYXJtb3JwZXJsZXZlbFwiOiAzLjUsIC8vIEFybWFkdXJhIHBvciBuaXZlbFxyXG4gICAgICAgICAgICAgICAgXCJhdHRhY2tkYW1hZ2VcIjogNTguNDYsIC8vIGF0YXF1ZSBpbmljaWFsXHJcbiAgICAgICAgICAgICAgICBcIm1wIHBlciBsZXZlbFwiOiA0NSwgLy8gYXVtZW50byBkZSBtYW5hIHBvciBuaXZlbCBcclxuICAgICAgICAgICAgICAgIFwiYXR0YWNrIHNwZWVkIG9mZnNldFwiOiAwLCAvLyBWZWxvY2lkYWQgZGUgYXRhcXVlIGluaWNpYWwgXHJcbiAgICAgICAgICAgICAgICBcIm1wXCI6IDI0NS42LCAvLyBNYW5hID8gY29tYnVzdGlibGUgcGFyYSBsb3MgaGVjaGl6b3NcclxuXHJcbiAgICAgICAgICAgICAgICBcImFybW9yXCI6IDIyLjg4LCAvLyBBcm1hZHVyYVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcImhwXCI6IDUxNy43NiwgLy8gVmlkYVxyXG4gICAgICAgICAgICAgICAgXCJocCByZWdlbiBwZXIgbGV2ZWxcIjogMC41LCAvLyByZWdlbnJhY2lvbiBkZSB2aWRhIHBvciBuaXZlbFxyXG5cclxuICAgICAgICAgICAgICAgIFwiYXR0YWNrc3BlZWRwZXJsZXZlbFwiOiAxLCAvLyBBdW1lbnRvIGRlIGF0YXF1ZSBwb3Igbml2ZWxcclxuICAgICAgICAgICAgICAgIFwiYXR0YWNrcmFuZ2VcIjogNTI1LCAgICAvLyBSYW5nbyBkZSBhdGFxdWVcclxuICAgICAgICAgICAgICAgIFwibW92ZXNwZWVkXCI6IDMyNSwgLy8gVmVsb2NpZGFkIGRlIG1vdmltaWVudG9cclxuICAgICAgICAgICAgICAgIFwiYXR0YWNrIGRhbWFnZSBwZXIgbGV2ZWxcIjogMi40MSwgLy8gRGHDsW8gZGUgYXRhcXVlIHBvciBuaXZlbFxyXG4gICAgICAgICAgICAgICAgXCJtcCByZWdlbiBwZXIgbGV2ZWxcIjogMSwgLy8gUmVnZW5lcmFjaW9uIGRlIG1hbmEgKiBzZWd1bmRvXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFwiY3JpdHBlcmxldmVsXCI6IDAsIC8vIENyaXRpY29zIHBvciBuaXZlbFxyXG4gICAgICAgICAgICAgICAgXCJzcGVsbCBibG9jayBwZXIgbGV2ZWxcIjogMC41LC8vIEJsb3F1ZW9zIEhlY2hpem8gPz8/PyBcclxuICAgICAgICAgICAgICAgIFwiY3JpdFwiOiAwLCAvLyBDcml0aWNvc1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcIm1wIHJlZ2VuXCI6IDYuNjgsIC8vIFJlZ2VuZXJhY2lvbiBkZSBWaWRhICogdGllbXBvXHJcbiAgICAgICAgICAgICAgICBcInNwZWxsYmxvY2tcIjogMzAsIC8vIEJsb3F1ZW8gZGUgaGVjaGl6b3NcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXCJocHJlZ2VuXCI6IDUuODQsIC8vIFBvciBxdWUgPyBwb3Igc2VndW5kbyBtaW51dG8gP1xyXG4gICAgICAgICAgICAgICAgXCJocCBwZXIgbGV2ZWxcIjogODIgLy8gYXVtZW50byBkZSB2aWRhIHBvciBuaXZlbCBcclxuICAgICAgICAgICAgfSxcclxuKi9cclxuXHRjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgYXJtb3JwZXJsZXZlbCA6bnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBhdHRhY2tkYW1hZ2UgOm51bWJlcixcclxuICAgICAgICBwdWJsaWMgbXBwZXJsZXZlbCA6bnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBhdHRhY2tzcGVlZG9mZnNldCA6bnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBtcCA6bnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBhcm1vciA6bnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBocCA6bnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBocHJlZ2VucGVybGV2ZWwgOm51bWJlcixcclxuICAgICAgICBwdWJsaWMgYXR0YWNrc3BlZWRwZXJsZXZlbCA6bnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBhdHRhY2tyYW5nZSA6bnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBtb3Zlc3BlZWQgOm51bWJlcixcclxuICAgICAgICBwdWJsaWMgYXR0YWNrZGFtYWdlcGVybGV2ZWwgOm51bWJlcixcclxuICAgICAgICBwdWJsaWMgbXByZWdlbnBlcmxldmVsIDpudW1iZXIsXHJcbiAgICAgICAgcHVibGljIGNyaXRwZXJsZXZlbCA6bnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBzcGVsbGJsb2NrcGVybGV2ZWwgOm51bWJlcixcclxuICAgICAgICBwdWJsaWMgY3JpdCA6bnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBtcHJlZ2VuIDpudW1iZXIsXHJcbiAgICAgICAgcHVibGljIHNwZWxsYmxvY2sgOm51bWJlcixcclxuICAgICAgICBwdWJsaWMgaHByZWdlbiA6bnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBocHBlcmxldmVsIDpudW1iZXJcclxuICAgICl7IFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBORVcgKGR0bzphbnkpOiBTdGF0dXN7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdGF0dXMoXHJcbiAgICAgICAgICAgIGR0by5hcm1vcnBlcmxldmVsLFxyXG4gICAgICAgICAgICBkdG8uYXR0YWNrZGFtYWdlLFxyXG4gICAgICAgICAgICBkdG8ubXBwZXJsZXZlbCxcclxuICAgICAgICAgICAgZHRvLmF0dGFja3NwZWVkb2Zmc2V0LFxyXG4gICAgICAgICAgICBkdG8ubXAsXHJcbiAgICAgICAgICAgIGR0by5hcm1vcixcclxuICAgICAgICAgICAgZHRvLmhwLFxyXG4gICAgICAgICAgICBkdG8uaHByZWdlbnBlcmxldmVsLFxyXG4gICAgICAgICAgICBkdG8uYXR0YWNrc3BlZWRwZXJsZXZlbCxcclxuICAgICAgICAgICAgZHRvLmF0dGFja3JhbmdlLFxyXG4gICAgICAgICAgICBkdG8ubW92ZXNwZWVkLFxyXG4gICAgICAgICAgICBkdG8uYXR0YWNrZGFtYWdlcGVybGV2ZWwsXHJcbiAgICAgICAgICAgIGR0by5tcHJlZ2VucGVybGV2ZWwsXHJcbiAgICAgICAgICAgIGR0by5jcml0cGVybGV2ZWwsXHJcbiAgICAgICAgICAgIGR0by5zcGVsbGJsb2NrcGVybGV2ZWwsXHJcbiAgICAgICAgICAgIGR0by5jcml0LFxyXG4gICAgICAgICAgICBkdG8ubXByZWdlbixcclxuICAgICAgICAgICAgZHRvLnNwZWxsYmxvY2ssXHJcbiAgICAgICAgICAgIGR0by5ocHJlZ2VuLFxyXG4gICAgICAgICAgICBkdG8uaHBwZXJsZXZlbFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iXX0=
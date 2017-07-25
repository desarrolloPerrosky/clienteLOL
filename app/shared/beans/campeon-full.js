"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var informacion_1 = require("./informacion");
var status_1 = require("./status");
var info_imagen_1 = require("./info-imagen");
var skin_1 = require("./skin");
var pasiva_1 = require("./pasiva");
var recomendacion_1 = require("./recomendacion");
var hechizo_1 = require("./hechizo");
var CampeonFull = (function () {
    function CampeonFull(info, enemytips, stats, name, title, image, tags, partype, skins, passive, recommended, allytips, // tips de juego
        key, lore, // Historia + html
        id, blurb, // Historia corta ...
        spells) {
        this.info = info;
        this.enemytips = enemytips;
        this.stats = stats;
        this.name = name;
        this.title = title;
        this.image = image;
        this.tags = tags;
        this.partype = partype;
        this.skins = skins;
        this.passive = passive;
        this.recommended = recommended;
        this.allytips = allytips;
        this.key = key;
        this.lore = lore;
        this.id = id;
        this.blurb = blurb;
        this.spells = spells;
    }
    CampeonFull.NEW = function (dto) {
        return new CampeonFull(informacion_1.Informacion.NEW(dto.info), dto.enemytips, status_1.Status.NEW(dto.stats), dto.name, dto.title, info_imagen_1.InfoImagen.NEW(dto.image), dto.tags, dto.partype, skin_1.Skin.ALL(dto.skins), pasiva_1.Pasiva.NEW(dto.passive), recomendacion_1.Recomendacion.ALL(dto.recommended), dto.allytips, dto.key, dto.lore, dto.id, dto.blurb, hechizo_1.Hechizo.ALL(dto.spells));
    };
    return CampeonFull;
}());
exports.CampeonFull = CampeonFull;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtcGVvbi1mdWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FtcGVvbi1mdWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQTZDO0FBQzdDLG1DQUFvQztBQUNwQyw2Q0FBNEM7QUFDNUMsK0JBQWlDO0FBQ2pDLG1DQUFvQztBQUNwQyxpREFBZ0Q7QUFDaEQscUNBQXNDO0FBRXRDO0lBQ0MscUJBQ1EsSUFBaUIsRUFDakIsU0FBd0IsRUFDeEIsS0FBYSxFQUNiLElBQVksRUFDWixLQUFhLEVBQ2IsS0FBaUIsRUFDakIsSUFBbUIsRUFDbkIsT0FBZSxFQUNmLEtBQWtCLEVBQ2xCLE9BQWMsRUFDZCxXQUFpQyxFQUNqQyxRQUF1QixFQUFFLGdCQUFnQjtRQUN6QyxHQUFXLEVBQ1gsSUFBWSxFQUFFLGtCQUFrQjtRQUNoQyxFQUFVLEVBQ1YsS0FBYSxFQUFFLHFCQUFxQjtRQUNwQyxNQUFzQjtRQWhCdEIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNqQixjQUFTLEdBQVQsU0FBUyxDQUFlO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUNuQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQUNsQixZQUFPLEdBQVAsT0FBTyxDQUFPO1FBQ2QsZ0JBQVcsR0FBWCxXQUFXLENBQXNCO1FBQ2pDLGFBQVEsR0FBUixRQUFRLENBQWU7UUFDdkIsUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUNYLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixPQUFFLEdBQUYsRUFBRSxDQUFRO1FBQ1YsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLFdBQU0sR0FBTixNQUFNLENBQWdCO0lBRTlCLENBQUM7SUFFTSxlQUFHLEdBQVYsVUFBVyxHQUFPO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLFdBQVcsQ0FDckIseUJBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUN6QixHQUFHLENBQUMsU0FBUyxFQUNiLGVBQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUNyQixHQUFHLENBQUMsSUFBSSxFQUNSLEdBQUcsQ0FBQyxLQUFLLEVBQ1Qsd0JBQVUsQ0FBQyxHQUFHLENBQUUsR0FBRyxDQUFDLEtBQUssQ0FBRSxFQUMzQixHQUFHLENBQUMsSUFBSSxFQUNSLEdBQUcsQ0FBQyxPQUFPLEVBQ1gsV0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQ25CLGVBQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUN2Qiw2QkFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQ2xDLEdBQUcsQ0FBQyxRQUFRLEVBQ1osR0FBRyxDQUFDLEdBQUcsRUFDUCxHQUFHLENBQUMsSUFBSSxFQUNSLEdBQUcsQ0FBQyxFQUFFLEVBQ04sR0FBRyxDQUFDLEtBQUssRUFDVCxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQ3ZCLENBQUE7SUFDRixDQUFDO0lBQ0Ysa0JBQUM7QUFBRCxDQUFDLEFBM0NELElBMkNDO0FBM0NZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5mb3JtYWNpb24gfVx0XHRmcm9tIFwiLi9pbmZvcm1hY2lvblwiO1xyXG5pbXBvcnQgeyBTdGF0dXMgfVx0XHRcdGZyb20gXCIuL3N0YXR1c1wiO1xyXG5pbXBvcnQgeyBJbmZvSW1hZ2VuIH1cdFx0ZnJvbSBcIi4vaW5mby1pbWFnZW5cIjtcclxuaW1wb3J0IHsgU2tpbiB9XHRcdFx0XHRmcm9tIFwiLi9za2luXCI7XHJcbmltcG9ydCB7IFBhc2l2YSB9XHRcdFx0ZnJvbSBcIi4vcGFzaXZhXCI7XHJcbmltcG9ydCB7IFJlY29tZW5kYWNpb24gfVx0ZnJvbSBcIi4vcmVjb21lbmRhY2lvblwiO1xyXG5pbXBvcnQgeyBIZWNoaXpvIH1cdFx0XHRmcm9tIFwiLi9oZWNoaXpvXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FtcGVvbkZ1bGwge1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHVibGljIGluZm86IEluZm9ybWFjaW9uLFxyXG5cdFx0cHVibGljIGVuZW15dGlwczogQXJyYXk8c3RyaW5nPixcclxuXHRcdHB1YmxpYyBzdGF0czogU3RhdHVzLFxyXG5cdFx0cHVibGljIG5hbWU6IHN0cmluZyxcclxuXHRcdHB1YmxpYyB0aXRsZTogc3RyaW5nLFxyXG5cdFx0cHVibGljIGltYWdlOiBJbmZvSW1hZ2VuLFxyXG5cdFx0cHVibGljIHRhZ3M6IEFycmF5PHN0cmluZz4sXHJcblx0XHRwdWJsaWMgcGFydHlwZTogc3RyaW5nLFxyXG5cdFx0cHVibGljIHNraW5zOiBBcnJheTxTa2luPiwgXHJcblx0XHRwdWJsaWMgcGFzc2l2ZTpQYXNpdmEsXHJcblx0XHRwdWJsaWMgcmVjb21tZW5kZWQ6IEFycmF5PFJlY29tZW5kYWNpb24+LFxyXG5cdFx0cHVibGljIGFsbHl0aXBzOiBBcnJheTxzdHJpbmc+LCAvLyB0aXBzIGRlIGp1ZWdvXHJcblx0XHRwdWJsaWMga2V5OiBzdHJpbmcsXHJcblx0XHRwdWJsaWMgbG9yZTogc3RyaW5nLCAvLyBIaXN0b3JpYSArIGh0bWxcclxuXHRcdHB1YmxpYyBpZDogbnVtYmVyLFxyXG5cdFx0cHVibGljIGJsdXJiOiBzdHJpbmcsIC8vIEhpc3RvcmlhIGNvcnRhIC4uLlxyXG5cdFx0cHVibGljIHNwZWxsczogQXJyYXk8SGVjaGl6bz5cclxuXHQpIHsgXHJcblx0fVxyXG5cclxuXHRzdGF0aWMgTkVXKGR0bzphbnkpOkNhbXBlb25GdWxse1xyXG5cdFx0cmV0dXJuIG5ldyBDYW1wZW9uRnVsbChcclxuXHRcdFx0SW5mb3JtYWNpb24uTkVXKGR0by5pbmZvKSxcclxuXHRcdFx0ZHRvLmVuZW15dGlwcyxcclxuXHRcdFx0U3RhdHVzLk5FVyhkdG8uc3RhdHMpLFxyXG5cdFx0XHRkdG8ubmFtZSxcclxuXHRcdFx0ZHRvLnRpdGxlLFxyXG5cdFx0XHRJbmZvSW1hZ2VuLk5FVyggZHRvLmltYWdlICksXHJcblx0XHRcdGR0by50YWdzLFxyXG5cdFx0XHRkdG8ucGFydHlwZSxcclxuXHRcdFx0U2tpbi5BTEwoZHRvLnNraW5zKSxcclxuXHRcdFx0UGFzaXZhLk5FVyhkdG8ucGFzc2l2ZSksXHJcblx0XHRcdFJlY29tZW5kYWNpb24uQUxMKGR0by5yZWNvbW1lbmRlZCksXHJcblx0XHRcdGR0by5hbGx5dGlwcyxcclxuXHRcdFx0ZHRvLmtleSxcclxuXHRcdFx0ZHRvLmxvcmUsXHJcblx0XHRcdGR0by5pZCxcclxuXHRcdFx0ZHRvLmJsdXJiLFxyXG5cdFx0XHRIZWNoaXpvLkFMTChkdG8uc3BlbGxzKVxyXG5cdFx0KVxyXG5cdH1cclxufSJdfQ==
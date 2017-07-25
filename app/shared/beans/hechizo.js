"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var variable_1 = require("./variable");
var tip_por_nivel_1 = require("./tip-por-nivel");
var info_imagen_1 = require("./info-imagen");
var Hechizo = (function () {
    function Hechizo(cooldownBurn, // "9/8/7/6/5"
        key, // "MonkeyKingDoubleAttack",
        resource, // "{{ cost }} de maná",
        // level tips
        leveltip, vars, costType, // " de maná",
        description, // "El siguiente ataque de Wukong causa daño físico adicional, aumenta el alcance y reduce la armadura del enemigo durante breve tiempo.",
        sanitizedDescription, // "El siguiente ataque de Wukong causa daño físico adicional, aumenta el alcance y reduce la armadura del enemigo durante breve tiempo.",
        sanitizedTooltip, // "El siguiente ataque de Wukong obtiene {{ e4 }} de alcance, causa {{ e1 }} (+{{ a1 }}) de daño físico adicional y reduce la armadura del enemigo un {{ e2 }}% durante {{ e3 }} s.",
        effect, // [null,[30,60,90,120,150],[10,15,20,25,30],[3,3,3,3,3],[125,125,125,125,125],[6,6,6,6,6],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
        tooltip, // "El siguiente ataque de Wukong obtiene {{ e4 }} de alcance, causa {{ e1 }} <span class=\"colorFF8C00\">(+{{ a1 }})</span> de daño físico adicional y reduce la armadura del enemigo un {{ e2 }}% durante {{ e3 }} s.",
        maxrank, //5,
        costBurn, // "40",
        rangeBurn, // "650",
        range, //[650,650,650,650,650],
        cost, //[40,40,40,40,40],
        effectBurn, // ["","30/60/90/120/150","10/15/20/25/30","3","125","6","0","0","0","0","0"],
        image, cooldown, // Enfriamiento ?[9,8,7,6,5]
        name //  "Golpe aplastante"
    ) {
        this.cooldownBurn = cooldownBurn;
        this.key = key;
        this.resource = resource;
        this.leveltip = leveltip;
        this.vars = vars;
        this.costType = costType;
        this.description = description;
        this.sanitizedDescription = sanitizedDescription;
        this.sanitizedTooltip = sanitizedTooltip;
        this.effect = effect;
        this.tooltip = tooltip;
        this.maxrank = maxrank;
        this.costBurn = costBurn;
        this.rangeBurn = rangeBurn;
        this.range = range;
        this.cost = cost;
        this.effectBurn = effectBurn;
        this.image = image;
        this.cooldown = cooldown;
        this.name = name; //  "Golpe aplastante"
    }
    Hechizo.NEW = function (dto) {
        return new Hechizo(dto.cooldownBurn, dto.key, dto.resource, tip_por_nivel_1.TipPorNivel.NEW(dto.leveltip), variable_1.Variable.ALL(dto.vars), dto.costType, dto.description, dto.sanitizedDescription, dto.sanitizedTooltip, dto.effect, // Array<Array<number>>
        dto.tooltip, dto.maxrank, dto.costBurn, dto.rangeBurn, dto.range, dto.cost, dto.effectBurn, info_imagen_1.InfoImagen.NEW(dto.image), dto.cooldown, dto.name);
    };
    Hechizo.ALL = function (dto) {
        var arreglo = [];
        for (var _i = 0, dto_1 = dto; _i < dto_1.length; _i++) {
            var _dto = dto_1[_i];
            arreglo.push(Hechizo.NEW(_dto));
        }
        return arreglo;
    };
    return Hechizo;
}());
exports.Hechizo = Hechizo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVjaGl6by5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlY2hpem8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBeUM7QUFDekMsaURBQThDO0FBQzlDLDZDQUEyQztBQUUzQztJQUNDLGlCQUNjLFlBQXFCLEVBQUUsY0FBYztRQUNyQyxHQUFXLEVBQUUsNEJBQTRCO1FBQ3pDLFFBQWdCLEVBQUUsd0JBQXdCO1FBRWpELGFBQWE7UUFDWixRQUFxQixFQUVmLElBQXFCLEVBQ3JCLFFBQWdCLEVBQUUsY0FBYztRQUNoQyxXQUFtQixFQUFFLDBJQUEwSTtRQUMvSixvQkFBNEIsRUFBRSwwSUFBMEk7UUFDeEssZ0JBQXdCLEVBQUUsc0xBQXNMO1FBQ2hOLE1BQTRCLEVBQUUsdUpBQXVKO1FBQ3JMLE9BQWUsRUFBRSx5TkFBeU47UUFFMU8sT0FBZSxFQUFFLElBQUk7UUFDckIsUUFBZ0IsRUFBRSxRQUFRO1FBQzFCLFNBQWlCLEVBQUUsU0FBUztRQUM1QixLQUFvQixFQUFDLHdCQUF3QjtRQUM3QyxJQUFtQixFQUFDLG1CQUFtQjtRQUN2QyxVQUF5QixFQUFDLDhFQUE4RTtRQUM5RyxLQUFpQixFQUNYLFFBQXVCLEVBQUMsNEJBQTRCO1FBQzFELElBQVcsQ0FBQyxzQkFBc0I7O1FBdkI1QixpQkFBWSxHQUFaLFlBQVksQ0FBUztRQUNyQixRQUFHLEdBQUgsR0FBRyxDQUFRO1FBQ1gsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUd0QixhQUFRLEdBQVIsUUFBUSxDQUFhO1FBRWYsU0FBSSxHQUFKLElBQUksQ0FBaUI7UUFDckIsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUNoQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQVE7UUFDNUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFRO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQXNCO1FBQzVCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFFZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUNoQixjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQ2pCLFVBQUssR0FBTCxLQUFLLENBQWU7UUFDcEIsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUNuQixlQUFVLEdBQVYsVUFBVSxDQUFlO1FBQy9CLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDWCxhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQzdCLFNBQUksR0FBSixJQUFJLENBQU8sQ0FBQyxzQkFBc0I7SUFFdkMsQ0FBQztJQUNHLFdBQUcsR0FBVixVQUFXLEdBQU87UUFDWCxNQUFNLENBQUMsSUFBSSxPQUFPLENBQ2QsR0FBRyxDQUFDLFlBQVksRUFDaEIsR0FBRyxDQUFDLEdBQUcsRUFDUCxHQUFHLENBQUMsUUFBUSxFQUNsQiwyQkFBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQ3ZCLG1CQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFDdEIsR0FBRyxDQUFDLFFBQVEsRUFDWixHQUFHLENBQUMsV0FBVyxFQUNmLEdBQUcsQ0FBQyxvQkFBb0IsRUFDeEIsR0FBRyxDQUFDLGdCQUFnQixFQUNwQixHQUFHLENBQUMsTUFBTSxFQUFDLHVCQUF1QjtRQUNsQyxHQUFHLENBQUMsT0FBTyxFQUNYLEdBQUcsQ0FBQyxPQUFPLEVBQ1gsR0FBRyxDQUFDLFFBQVEsRUFDWixHQUFHLENBQUMsU0FBUyxFQUNiLEdBQUcsQ0FBQyxLQUFLLEVBQ1QsR0FBRyxDQUFDLElBQUksRUFDUixHQUFHLENBQUMsVUFBVSxFQUNwQix3QkFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQ25CLEdBQUcsQ0FBQyxRQUFRLEVBQ2xCLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNaLENBQUM7SUFHTSxXQUFHLEdBQVYsVUFBVyxHQUFjO1FBQ3JCLElBQUksT0FBTyxHQUFrQixFQUFFLENBQUM7UUFFaEMsR0FBRyxDQUFBLENBQWEsVUFBRyxFQUFILFdBQUcsRUFBSCxpQkFBRyxFQUFILElBQUc7WUFBZixJQUFJLElBQUksWUFBQTtZQUNSLE9BQU8sQ0FBQyxJQUFJLENBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3BDO1FBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBQ0wsY0FBQztBQUFELENBQUMsQUE5REQsSUE4REM7QUE5RFksMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYXJpYWJsZSB9ICAgIGZyb20gXCIuL3ZhcmlhYmxlXCI7XHJcbmltcG9ydCB7IFRpcFBvck5pdmVsIH0gZnJvbSBcIi4vdGlwLXBvci1uaXZlbFwiO1xyXG5pbXBvcnQgeyBJbmZvSW1hZ2VuIH0gZnJvbSBcIi4vaW5mby1pbWFnZW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIZWNoaXpvIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgY29vbGRvd25CdXJuIDogc3RyaW5nLCAvLyBcIjkvOC83LzYvNVwiXHJcbiAgICAgICAgcHVibGljIGtleTogc3RyaW5nLCAvLyBcIk1vbmtleUtpbmdEb3VibGVBdHRhY2tcIixcclxuICAgICAgICBwdWJsaWMgcmVzb3VyY2U6IHN0cmluZywgLy8gXCJ7eyBjb3N0IH19IGRlIG1hbsOhXCIsXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gbGV2ZWwgdGlwc1xyXG5cdFx0cHVibGljIGxldmVsdGlwOiBUaXBQb3JOaXZlbCxcclxuXHJcbiAgICAgICAgcHVibGljIHZhcnM6IEFycmF5PFZhcmlhYmxlPixcclxuICAgICAgICBwdWJsaWMgY29zdFR5cGU6IHN0cmluZywgLy8gXCIgZGUgbWFuw6FcIixcclxuICAgICAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZywgLy8gXCJFbCBzaWd1aWVudGUgYXRhcXVlIGRlIFd1a29uZyBjYXVzYSBkYcOxbyBmw61zaWNvIGFkaWNpb25hbCwgYXVtZW50YSBlbCBhbGNhbmNlIHkgcmVkdWNlIGxhIGFybWFkdXJhIGRlbCBlbmVtaWdvIGR1cmFudGUgYnJldmUgdGllbXBvLlwiLFxyXG4gICAgICAgIHB1YmxpYyBzYW5pdGl6ZWREZXNjcmlwdGlvbjogc3RyaW5nLCAvLyBcIkVsIHNpZ3VpZW50ZSBhdGFxdWUgZGUgV3Vrb25nIGNhdXNhIGRhw7FvIGbDrXNpY28gYWRpY2lvbmFsLCBhdW1lbnRhIGVsIGFsY2FuY2UgeSByZWR1Y2UgbGEgYXJtYWR1cmEgZGVsIGVuZW1pZ28gZHVyYW50ZSBicmV2ZSB0aWVtcG8uXCIsXHJcbiAgICAgICAgcHVibGljIHNhbml0aXplZFRvb2x0aXA6IHN0cmluZywgLy8gXCJFbCBzaWd1aWVudGUgYXRhcXVlIGRlIFd1a29uZyBvYnRpZW5lIHt7IGU0IH19IGRlIGFsY2FuY2UsIGNhdXNhIHt7IGUxIH19ICgre3sgYTEgfX0pIGRlIGRhw7FvIGbDrXNpY28gYWRpY2lvbmFsIHkgcmVkdWNlIGxhIGFybWFkdXJhIGRlbCBlbmVtaWdvIHVuIHt7IGUyIH19JSBkdXJhbnRlIHt7IGUzIH19IHMuXCIsXHJcbiAgICAgICAgcHVibGljIGVmZmVjdDogQXJyYXk8QXJyYXk8bnVtYmVyPj4sIC8vIFtudWxsLFszMCw2MCw5MCwxMjAsMTUwXSxbMTAsMTUsMjAsMjUsMzBdLFszLDMsMywzLDNdLFsxMjUsMTI1LDEyNSwxMjUsMTI1XSxbNiw2LDYsNiw2XSxbMCwwLDAsMCwwXSxbMCwwLDAsMCwwXSxbMCwwLDAsMCwwXSxbMCwwLDAsMCwwXSxbMCwwLDAsMCwwXV1cclxuICAgICAgICBwdWJsaWMgdG9vbHRpcDogc3RyaW5nLCAvLyBcIkVsIHNpZ3VpZW50ZSBhdGFxdWUgZGUgV3Vrb25nIG9idGllbmUge3sgZTQgfX0gZGUgYWxjYW5jZSwgY2F1c2Ege3sgZTEgfX0gPHNwYW4gY2xhc3M9XFxcImNvbG9yRkY4QzAwXFxcIj4oK3t7IGExIH19KTwvc3Bhbj4gZGUgZGHDsW8gZsOtc2ljbyBhZGljaW9uYWwgeSByZWR1Y2UgbGEgYXJtYWR1cmEgZGVsIGVuZW1pZ28gdW4ge3sgZTIgfX0lIGR1cmFudGUge3sgZTMgfX0gcy5cIixcclxuXHJcbiAgICAgICAgcHVibGljIG1heHJhbms6IG51bWJlciwgLy81LFxyXG4gICAgICAgIHB1YmxpYyBjb3N0QnVybjogbnVtYmVyLCAvLyBcIjQwXCIsXHJcbiAgICAgICAgcHVibGljIHJhbmdlQnVybjogbnVtYmVyICwvLyBcIjY1MFwiLFxyXG4gICAgICAgIHB1YmxpYyByYW5nZTogQXJyYXk8bnVtYmVyPiwvL1s2NTAsNjUwLDY1MCw2NTAsNjUwXSxcclxuICAgICAgICBwdWJsaWMgY29zdDogQXJyYXk8bnVtYmVyPiwvL1s0MCw0MCw0MCw0MCw0MF0sXHJcbiAgICAgICAgcHVibGljIGVmZmVjdEJ1cm46IEFycmF5PHN0cmluZz4sLy8gW1wiXCIsXCIzMC82MC85MC8xMjAvMTUwXCIsXCIxMC8xNS8yMC8yNS8zMFwiLFwiM1wiLFwiMTI1XCIsXCI2XCIsXCIwXCIsXCIwXCIsXCIwXCIsXCIwXCIsXCIwXCJdLFxyXG5cdFx0cHVibGljIGltYWdlOiBJbmZvSW1hZ2VuLFxyXG4gICAgICAgIHB1YmxpYyBjb29sZG93bjogQXJyYXk8bnVtYmVyPiwvLyBFbmZyaWFtaWVudG8gP1s5LDgsNyw2LDVdXHJcblx0XHRwdWJsaWMgbmFtZTpzdHJpbmcgLy8gIFwiR29scGUgYXBsYXN0YW50ZVwiXHJcbiAgICApeyBcclxuICAgIH1cclxuXHRzdGF0aWMgTkVXKGR0bzphbnkpOkhlY2hpem97XHJcbiAgICAgICAgcmV0dXJuIG5ldyBIZWNoaXpvKFxyXG4gICAgICAgICAgICBkdG8uY29vbGRvd25CdXJuLFxyXG4gICAgICAgICAgICBkdG8ua2V5LFxyXG4gICAgICAgICAgICBkdG8ucmVzb3VyY2UsXHJcblx0XHQgICAgVGlwUG9yTml2ZWwuTkVXKGR0by5sZXZlbHRpcCksXHJcbiAgICAgICAgICAgIFZhcmlhYmxlLkFMTChkdG8udmFycyksXHJcbiAgICAgICAgICAgIGR0by5jb3N0VHlwZSxcclxuICAgICAgICAgICAgZHRvLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBkdG8uc2FuaXRpemVkRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIGR0by5zYW5pdGl6ZWRUb29sdGlwLFxyXG4gICAgICAgICAgICBkdG8uZWZmZWN0LC8vIEFycmF5PEFycmF5PG51bWJlcj4+XHJcbiAgICAgICAgICAgIGR0by50b29sdGlwLFxyXG4gICAgICAgICAgICBkdG8ubWF4cmFuayxcclxuICAgICAgICAgICAgZHRvLmNvc3RCdXJuLFxyXG4gICAgICAgICAgICBkdG8ucmFuZ2VCdXJuLFxyXG4gICAgICAgICAgICBkdG8ucmFuZ2UsXHJcbiAgICAgICAgICAgIGR0by5jb3N0LFxyXG4gICAgICAgICAgICBkdG8uZWZmZWN0QnVybixcclxuXHRcdCAgICBJbmZvSW1hZ2VuLk5FVyhkdG8uaW1hZ2UpLFxyXG4gICAgICAgICAgICBkdG8uY29vbGRvd24sXHJcblx0XHQgICAgZHRvLm5hbWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGF0aWMgQUxMKGR0bzpBcnJheTxhbnk+KTpBcnJheTxIZWNoaXpvPntcclxuICAgICAgICBsZXQgYXJyZWdsbzpBcnJheTxIZWNoaXpvPiA9IFtdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvcihsZXQgX2R0byBvZiBkdG8pe1xyXG4gICAgICAgICAgICBhcnJlZ2xvLnB1c2goIEhlY2hpem8uTkVXKF9kdG8pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhcnJlZ2xvO1xyXG4gICAgfVxyXG59Il19
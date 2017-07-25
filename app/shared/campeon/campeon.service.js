"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var campeon_dto_1 = require("./campeon.dto");
var campeon_full_1 = require("../beans/campeon-full");
var campeones_mock_1 = require("./campeones.mock");
var campeones_full_mock_1 = require("./campeones-full.mock");
var CampeonService = (function () {
    function CampeonService(http) {
        this.http = http;
        this.misCampeones = campeones_mock_1.CAMPEONES;
    }
    //	load() {
    //		let headers = new Headers();
    //		headers.append( "Authorization", "Bearer " + Config.token );
    //
    //		return this.http.get( Config.apiUrl + "Groceries", {
    //			headers: headers
    //		})
    //			.map( res => res.json() )
    //			.map( data => {
    //				let groceryList = [];
    //				data.Result.forEach(( grocery ) => {
    //					groceryList.push( new Grocery( grocery.Id, grocery.Name ) );
    //				});
    //				return groceryList;
    //			})
    //			.catch( this.handleErrors );
    //	}
    //
    CampeonService.prototype.busqueda = function (campeonBuscado) {
        var cb = campeonBuscado.toUpperCase();
        var seleccion = campeones_mock_1.CAMPEONES.filter(function (campeon, indice, arreglo) {
            return campeon.nombre.toUpperCase().indexOf(cb) >= 0;
        });
        seleccion.sort(function (primero, segundo) {
            if (primero.nombre < segundo.nombre) {
                return -1;
            }
            if (primero.nombre > segundo.nombre) {
                return 1;
            }
            return 0;
        });
        return Promise.resolve(seleccion);
    };
    CampeonService.prototype.busquedaDto = function (campeonBuscado) {
        var cb = campeonBuscado.toUpperCase();
        var seleccion = campeones_mock_1.CAMPEONES.filter(function (campeon, indice, arreglo) {
            return campeon.nombre.toUpperCase().indexOf(cb) >= 0;
        });
        var _seleccion = [];
        seleccion.forEach(function (campeon, indice, arreglo) {
            var cc = new campeon_dto_1.CampeonDto(campeon.id, campeon.nombre);
            cc.title = campeones_full_mock_1.CAMPEON[cc.nombre].title;
            cc.name = campeones_full_mock_1.CAMPEON[cc.nombre].name;
            _seleccion.push(cc);
        });
        _seleccion.sort(function (primero, segundo) {
            if (primero.nombre < segundo.nombre) {
                return -1;
            }
            if (primero.nombre > segundo.nombre) {
                return 1;
            }
            return 0;
        });
        return Promise.resolve(_seleccion);
    };
    CampeonService.prototype.findCampeonByName = function (campeonBuscado) {
        //let dto:any = CAMPEONES[campeonBuscado];
        //let resultado:CampeonFull = CampeonFull.NEW(dto);
        return Promise.resolve(campeon_full_1.CampeonFull.NEW(campeones_full_mock_1.CAMPEON[campeonBuscado]));
    };
    //	add( name: string ) {
    //		let headers = new Headers();
    //		headers.append( "Authorization", "Bearer " + Config.token );
    //		headers.append( "Content-Type", "application/json" );
    //
    //		return this.http.post(
    //			Config.apiUrl + "Groceries",
    //			JSON.stringify( { Name: name }),
    //			{ headers: headers }
    //		)
    //			.map( res => res.json() )
    //			.map( data => {
    //				return new Grocery( data.Result.Id, name );
    //			})
    //			.catch( this.handleErrors );
    //	}
    CampeonService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    return CampeonService;
}());
CampeonService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CampeonService);
exports.CampeonService = CampeonService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtcGVvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FtcGVvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw4QkFBcUM7QUFFckMsaUNBQStCO0FBQy9CLHVDQUFxQztBQUlyQyw2Q0FBMkM7QUFFM0Msc0RBQW9EO0FBRXBELG1EQUE2QztBQUM3Qyw2REFBaUQ7QUFHakQsSUFBYSxjQUFjO0lBRTFCLHdCQUFxQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUQvQixpQkFBWSxHQUFvQiwwQkFBUyxDQUFDO0lBQ04sQ0FBQztJQUN0QyxXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLGdFQUFnRTtJQUNoRSxFQUFFO0lBQ0Ysd0RBQXdEO0lBQ3hELHFCQUFxQjtJQUNyQixNQUFNO0lBQ04sOEJBQThCO0lBQzlCLG9CQUFvQjtJQUNwQiwyQkFBMkI7SUFDM0IsMENBQTBDO0lBQzFDLG1FQUFtRTtJQUNuRSxTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLE9BQU87SUFDUCxpQ0FBaUM7SUFDakMsSUFBSTtJQUNKLEVBQUU7SUFDRCxpQ0FBUSxHQUFSLFVBQVUsY0FBc0I7UUFDL0IsSUFBSSxFQUFFLEdBQVUsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQzVDLElBQUksU0FBUyxHQUFtQiwwQkFBUyxDQUFDLE1BQU0sQ0FBQyxVQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUUsT0FBTztZQUN4RSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQyxDQUFDO1FBRUgsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFDLE9BQWdCLEVBQUUsT0FBZTtZQUNoRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENB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QkFBQztBQUFELENBQUMsQUFqR0QsSUFpR0M7QUFqR1ksY0FBYztJQUQxQixpQkFBVSxFQUFFO3FDQUdlLFdBQUk7R0FGbkIsY0FBYyxDQWlHMUI7QUFqR1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuXHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XHJcblxyXG5pbXBvcnQgeyBDb25maWcgfVx0XHRmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IENhbXBlb24gfVx0XHRmcm9tIFwiLi9jYW1wZW9uXCI7XHJcbmltcG9ydCB7IENhbXBlb25EdG8gfVx0ZnJvbSBcIi4vY2FtcGVvbi5kdG9cIjtcclxuXHJcbmltcG9ydCB7IENhbXBlb25GdWxsIH1cdGZyb20gXCIuLi9iZWFucy9jYW1wZW9uLWZ1bGxcIjtcclxuXHJcbmltcG9ydCB7IENBTVBFT05FUyB9XHRmcm9tICcuL2NhbXBlb25lcy5tb2NrJztcclxuaW1wb3J0IHsgQ0FNUEVPTiB9XHRcdGZyb20gJy4vY2FtcGVvbmVzLWZ1bGwubW9jayc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDYW1wZW9uU2VydmljZSB7XHJcblx0bWlzQ2FtcGVvbmVzIDogQXJyYXk8Q2FtcGVvbj4gPSBDQU1QRU9ORVM7XHJcblx0Y29uc3RydWN0b3IoIHByaXZhdGUgaHR0cDogSHR0cCApIHsgfVxyXG4vL1x0bG9hZCgpIHtcclxuLy9cdFx0bGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4vL1x0XHRoZWFkZXJzLmFwcGVuZCggXCJBdXRob3JpemF0aW9uXCIsIFwiQmVhcmVyIFwiICsgQ29uZmlnLnRva2VuICk7XHJcbi8vXHJcbi8vXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KCBDb25maWcuYXBpVXJsICsgXCJHcm9jZXJpZXNcIiwge1xyXG4vL1x0XHRcdGhlYWRlcnM6IGhlYWRlcnNcclxuLy9cdFx0fSlcclxuLy9cdFx0XHQubWFwKCByZXMgPT4gcmVzLmpzb24oKSApXHJcbi8vXHRcdFx0Lm1hcCggZGF0YSA9PiB7XHJcbi8vXHRcdFx0XHRsZXQgZ3JvY2VyeUxpc3QgPSBbXTtcclxuLy9cdFx0XHRcdGRhdGEuUmVzdWx0LmZvckVhY2goKCBncm9jZXJ5ICkgPT4ge1xyXG4vL1x0XHRcdFx0XHRncm9jZXJ5TGlzdC5wdXNoKCBuZXcgR3JvY2VyeSggZ3JvY2VyeS5JZCwgZ3JvY2VyeS5OYW1lICkgKTtcclxuLy9cdFx0XHRcdH0pO1xyXG4vL1x0XHRcdFx0cmV0dXJuIGdyb2NlcnlMaXN0O1xyXG4vL1x0XHRcdH0pXHJcbi8vXHRcdFx0LmNhdGNoKCB0aGlzLmhhbmRsZUVycm9ycyApO1xyXG4vL1x0fVxyXG4vL1xyXG5cdGJ1c3F1ZWRhKCBjYW1wZW9uQnVzY2Fkbzogc3RyaW5nICk6IFByb21pc2U8QXJyYXk8Q2FtcGVvbj4+IHtcclxuXHRcdGxldCBjYjpzdHJpbmcgPSBjYW1wZW9uQnVzY2Fkby50b1VwcGVyQ2FzZSgpXHJcblx0XHRsZXQgc2VsZWNjaW9uOiBBcnJheTxDYW1wZW9uPiA9IENBTVBFT05FUy5maWx0ZXIoKGNhbXBlb24saW5kaWNlLCBhcnJlZ2xvKSA9PiB7XHJcblx0XHRcdHJldHVybiBjYW1wZW9uLm5vbWJyZS50b1VwcGVyQ2FzZSgpLmluZGV4T2YoY2IpID49IDA7XHJcblx0XHR9KTtcclxuXHJcblx0XHRzZWxlY2Npb24uc29ydCgocHJpbWVybzogQ2FtcGVvbiwgc2VndW5kbzpDYW1wZW9uKT0+e1xyXG5cdFx0XHRpZiAocHJpbWVyby5ub21icmUgPCBzZWd1bmRvLm5vbWJyZSkge1xyXG5cdFx0XHRcdHJldHVybiAtMTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocHJpbWVyby5ub21icmUgPiBzZWd1bmRvLm5vbWJyZSkge1xyXG5cdFx0XHRcdHJldHVybiAxO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiAwO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSggc2VsZWNjaW9uICk7XHJcblx0fVxyXG5cclxuXHRidXNxdWVkYUR0byggY2FtcGVvbkJ1c2NhZG86IHN0cmluZyApOiBQcm9taXNlPEFycmF5PENhbXBlb25EdG8+PiB7XHJcblx0XHRsZXQgY2I6c3RyaW5nID0gY2FtcGVvbkJ1c2NhZG8udG9VcHBlckNhc2UoKVxyXG5cdFx0bGV0IHNlbGVjY2lvbjogQXJyYXk8Q2FtcGVvbj4gPSBDQU1QRU9ORVMuZmlsdGVyKChjYW1wZW9uLGluZGljZSwgYXJyZWdsbykgPT4ge1xyXG5cdFx0XHRyZXR1cm4gY2FtcGVvbi5ub21icmUudG9VcHBlckNhc2UoKS5pbmRleE9mKGNiKSA+PSAwO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdGxldCBfc2VsZWNjaW9uOiBBcnJheTxDYW1wZW9uRHRvPiA9IFtdO1xyXG5cdFx0XHJcblx0XHRzZWxlY2Npb24uZm9yRWFjaCgoY2FtcGVvbixpbmRpY2UsIGFycmVnbG8pID0+IHtcclxuXHRcdFx0bGV0IGNjIDpDYW1wZW9uRHRvID0gbmV3IENhbXBlb25EdG8oY2FtcGVvbi5pZCwgY2FtcGVvbi5ub21icmUpO1x0XHRcdFxyXG5cclxuXHRcdFx0Y2MudGl0bGUgID0gQ0FNUEVPTltjYy5ub21icmVdLnRpdGxlO1xyXG5cdFx0XHRjYy5uYW1lICAgPSBDQU1QRU9OW2NjLm5vbWJyZV0ubmFtZTtcclxuXHRcdFx0XHJcblx0XHRcdF9zZWxlY2Npb24ucHVzaCggY2MgKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdF9zZWxlY2Npb24uc29ydCgocHJpbWVybzogQ2FtcGVvbkR0bywgc2VndW5kbzpDYW1wZW9uRHRvKT0+e1xyXG5cdFx0XHRpZiAocHJpbWVyby5ub21icmUgPCBzZWd1bmRvLm5vbWJyZSkge1xyXG5cdFx0XHRcdHJldHVybiAtMTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocHJpbWVyby5ub21icmUgPiBzZWd1bmRvLm5vbWJyZSkge1xyXG5cdFx0XHRcdHJldHVybiAxO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiAwO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoIF9zZWxlY2Npb24gKTtcclxuXHR9XHJcblxyXG5cdGZpbmRDYW1wZW9uQnlOYW1lKCBjYW1wZW9uQnVzY2Fkbzogc3RyaW5nICk6IFByb21pc2U8Q2FtcGVvbkZ1bGw+IHtcclxuXHRcdC8vbGV0IGR0bzphbnkgPSBDQU1QRU9ORVNbY2FtcGVvbkJ1c2NhZG9dO1xyXG5cdFx0Ly9sZXQgcmVzdWx0YWRvOkNhbXBlb25GdWxsID0gQ2FtcGVvbkZ1bGwuTkVXKGR0byk7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCBDYW1wZW9uRnVsbC5ORVcoQ0FNUEVPTltjYW1wZW9uQnVzY2Fkb10pKTtcclxuXHR9XHJcblx0XHJcbi8vXHRhZGQoIG5hbWU6IHN0cmluZyApIHtcclxuLy9cdFx0bGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4vL1x0XHRoZWFkZXJzLmFwcGVuZCggXCJBdXRob3JpemF0aW9uXCIsIFwiQmVhcmVyIFwiICsgQ29uZmlnLnRva2VuICk7XHJcbi8vXHRcdGhlYWRlcnMuYXBwZW5kKCBcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIiApO1xyXG4vL1xyXG4vL1x0XHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoXHJcbi8vXHRcdFx0Q29uZmlnLmFwaVVybCArIFwiR3JvY2VyaWVzXCIsXHJcbi8vXHRcdFx0SlNPTi5zdHJpbmdpZnkoIHsgTmFtZTogbmFtZSB9KSxcclxuLy9cdFx0XHR7IGhlYWRlcnM6IGhlYWRlcnMgfVxyXG4vL1x0XHQpXHJcbi8vXHRcdFx0Lm1hcCggcmVzID0+IHJlcy5qc29uKCkgKVxyXG4vL1x0XHRcdC5tYXAoIGRhdGEgPT4ge1xyXG4vL1x0XHRcdFx0cmV0dXJuIG5ldyBHcm9jZXJ5KCBkYXRhLlJlc3VsdC5JZCwgbmFtZSApO1xyXG4vL1x0XHRcdH0pXHJcbi8vXHRcdFx0LmNhdGNoKCB0aGlzLmhhbmRsZUVycm9ycyApO1xyXG4vL1x0fVxyXG5cclxuXHRoYW5kbGVFcnJvcnMoIGVycm9yOiBSZXNwb25zZSApIHtcclxuXHRcdGNvbnNvbGUubG9nKCBKU09OLnN0cmluZ2lmeSggZXJyb3IuanNvbigpICkgKTtcclxuXHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KCBlcnJvciApO1xyXG5cdH1cclxufSJdfQ==
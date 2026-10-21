"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Viking_1 = require("./Viking");
const CityName_1 = require("@civ-clone/core-civilization/CityName");
const CityNameRegistry_1 = require("@civ-clone/core-civilization/CityNameRegistry");
// The first is the capital.
[
    'Uppsala',
    'Birka',
    'Sigtuna',
    'Hedeby',
    'Ribe',
    'Roskilde',
    'Jelling',
    'Aarhus',
    'Lund',
    'Kaupang',
    'Nidaros',
    'Bergen',
    'Oslo',
    'Stavanger',
    'Tønsberg',
    'Borg',
    'Visby',
    'Trelleborg',
    'Aggersborg',
    'Fyrkat',
    'Skara',
    'Linköping',
    'Västerås',
    'Hamar',
    'Viborg',
    'Odense',
    'Reykjavík',
    'Brattahlíð',
    'Kirkwall',
    'Uppåkra',
].forEach((name, i) => CityNameRegistry_1.instance.register(new CityName_1.default(name, Viking_1.default, i === 0)));
//# sourceMappingURL=registerCityNames.js.map
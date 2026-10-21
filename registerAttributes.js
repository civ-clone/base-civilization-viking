"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Viking_1 = require("./Viking");
const Attribute_1 = require("@civ-clone/core-civilization/Attribute");
const AttributeRegistry_1 = require("@civ-clone/core-civilization/AttributeRegistry");
Object.entries({
    people: 'Viking',
    nation: 'Scandinavia',
    colors: ['#B0BEC5', '#212121'],
}).forEach(([name, value]) => AttributeRegistry_1.instance.register(new Attribute_1.default(Viking_1.default, name, value)));
//# sourceMappingURL=registerAttributes.js.map
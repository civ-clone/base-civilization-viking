"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RagnarLodbrok = void 0;
const Leader_1 = require("@civ-clone/core-civilization/Leader");
const Viking_1 = require("../Viking");
class RagnarLodbrok extends Leader_1.default {
    static civilization() {
        return Viking_1.default;
    }
    name() {
        return 'Ragnar Lodbrok';
    }
}
exports.RagnarLodbrok = RagnarLodbrok;
exports.default = RagnarLodbrok;
//# sourceMappingURL=RagnarLodbrok.js.map
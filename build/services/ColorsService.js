"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorsService = void 0;
class ColorsService {
    constructor() {
        this.colors = ["RED", "GREEN", "BLUE"];
    }
    /**
     * Returns a list of colors
     */
    getColors() {
        return this.colors;
    }
    /**
     * Inserts a new color in the colors array
     */
    addColor(color) {
        if (!color || this.colors.includes(color)) {
            throw new Error("Cannot add color");
        }
        this.colors.push(color);
        return this.getColors();
    }
}
exports.ColorsService = ColorsService;
//# sourceMappingURL=ColorsService.js.map
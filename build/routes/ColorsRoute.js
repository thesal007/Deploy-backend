"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorsRoute = void 0;
const express_1 = require("express");
class ColorsRoute {
    constructor(colorsController) {
        this.colorsController = colorsController;
    }
    createRouter() {
        const router = (0, express_1.Router)();
        router.get("/colors", this.colorsController.getColors.bind(this.colorsController));
        router.post("/colors", this.colorsController.addColor.bind(this.colorsController));
        return router;
    }
}
exports.ColorsRoute = ColorsRoute;
//# sourceMappingURL=ColorsRoute.js.map
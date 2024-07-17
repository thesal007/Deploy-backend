"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorsController = void 0;
class ColorsController {
    constructor(colorsService) {
        this.colorsService = colorsService;
    }
    getColors(_req, res) {
        const colors = this.colorsService.getColors();
        res.json({
            results: colors,
        });
    }
    addColor(req, res) {
        var _a;
        try {
            if (!req.is("application/json") || typeof ((_a = req.body) === null || _a === void 0 ? void 0 : _a.color) !== "string") {
                throw new Error("Invalid request body");
            }
            const { color } = req.body;
            const colors = this.colorsService.addColor(color.trim().toUpperCase());
            // 201 Created
            res.status(201).send({
                results: colors,
            });
        }
        catch (e) {
            console.error(e);
            // 400 Bad Request
            res.status(400).send();
        }
    }
}
exports.ColorsController = ColorsController;
//# sourceMappingURL=ColorsController.js.map
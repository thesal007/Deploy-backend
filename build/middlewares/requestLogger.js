"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestLoggerMiddleware = (req, _res, next) => {
    const now = new Date();
    console.log(`[${now.toISOString()}] ${req.method} ${req.url}`);
    next();
};
exports.default = requestLoggerMiddleware;
//# sourceMappingURL=requestLogger.js.map
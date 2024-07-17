"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockRespone = exports.mockRequest = void 0;
exports.myRouteHandler = myRouteHandler;
exports.mockRequest = {};
exports.mockRespone = {
    send: jest.fn(),
};
function myRouteHandler(_req, res) {
    res.send('Visal123');
}
//# sourceMappingURL=index.js.map
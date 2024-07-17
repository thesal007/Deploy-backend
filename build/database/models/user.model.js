"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Defind user schema
const userSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    category: { type: String, required: true },
    email: { type: String, required: true, unique: true },
});
// Create A mongoose model
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
//# sourceMappingURL=user.model.js.map
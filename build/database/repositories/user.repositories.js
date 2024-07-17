"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = getUserById;
exports.createUser = createUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.getUsers = getUsers;
const user_model_1 = __importDefault(require("../models/user.model"));
// Function to get a user by ID
function getUserById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield user_model_1.default.findById(id);
        }
        catch (error) {
            console.error(`Error fetching user with id ${id}:`, error);
            throw new Error(`Failed to get user with id ${id}`);
        }
    });
}
// Function to create a new user
function createUser(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const newUser = new user_model_1.default(data);
        return newUser.save();
    });
}
// Function to update a user by ID
function updateUser(id, data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updatedUser = yield user_model_1.default.findByIdAndUpdate(id, data, { new: true });
            return updatedUser;
        }
        catch (error) {
            console.error("Error updating user:", error);
            return null;
        }
    });
}
// Function to delete a user by ID
function deleteUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return user_model_1.default.findByIdAndDelete(id);
    });
}
// Function to get all users
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield user_model_1.default.find();
    });
}
//# sourceMappingURL=user.repositories.js.map
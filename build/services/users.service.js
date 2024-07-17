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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_repositories_1 = require("../database/repositories/user.repositories");
class UserService {
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield (0, user_repositories_1.getUserById)(id);
                return user;
            }
            catch (error) {
                console.error(`Error fetching user with id ${id}:`, error);
                throw new Error(`Failed to get user with id ${id}`);
            }
        });
    }
    createUser(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = yield (0, user_repositories_1.createUser)(params);
                return newUser;
            }
            catch (error) {
                console.error("Error creating user:", error);
                throw new Error("Failed to create user");
            }
        });
    }
    updateUser(id, params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedUser = yield (0, user_repositories_1.updateUser)(id, params);
                return updatedUser;
            }
            catch (error) {
                console.error("Error updating user:", error);
                throw new Error(`Failed to update user with id ${id}`);
            }
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deletedUser = yield (0, user_repositories_1.deleteUser)(id);
                return deletedUser;
            }
            catch (error) {
                console.error(`Error deleting user with id ${id}:`, error);
                throw new Error(`Failed to delete user with id ${id}`);
            }
        });
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield (0, user_repositories_1.getUsers)();
                return users;
            }
            catch (error) {
                console.error("Error fetching users:", error);
                throw new Error("Failed to fetch users");
            }
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=users.service.js.map
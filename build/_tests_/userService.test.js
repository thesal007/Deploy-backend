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
const _mocks_1 = require("../_mocks_");
const user_model_1 = __importDefault(require("../database/models/user.model"));
const user_repositories_1 = require("../database/repositories/user.repositories");
jest.mock('../database/models/user.model');
describe('getUsers', () => {
    const mockedUser = user_model_1.default;
    it('should return an array of users', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockUsers = [
            {
                id: 'user-id-1',
                name: 'John Doe',
                age: 30,
                gender: 'male',
                category: 'admin',
                email: 'john@example.com',
            },
            {
                _id: 'user-id-2',
                name: 'Jane Smith',
                age: 25,
                gender: 'female',
                category: 'user',
                email: 'jane@example.com',
            }
        ];
        mockedUser.find.mockResolvedValue(mockUsers);
        const users = yield (0, user_repositories_1.getUsers)();
        expect(users).toEqual(mockUsers);
        expect(mockedUser.find).toHaveBeenCalledTimes(1);
    }));
    it('should return an empty array if no users are found', () => __awaiter(void 0, void 0, void 0, function* () {
        mockedUser.find.mockResolvedValue([]);
        const users = yield (0, user_repositories_1.getUsers)();
        expect(users).toEqual([]);
        expect(mockedUser.find).toHaveBeenCalledTimes(2);
    }));
    it('should throw an error if find fails', () => __awaiter(void 0, void 0, void 0, function* () {
        mockedUser.find.mockRejectedValue(new Error('Database error'));
        yield expect((0, user_repositories_1.getUsers)()).rejects.toThrow('Database error');
        expect(mockedUser.find).toHaveBeenCalledTimes(3);
    }));
});
// Example Jest test
test('myRouteHandler sends "Hello, World!"', () => {
    (0, _mocks_1.myRouteHandler)(_mocks_1.mockRequest, _mocks_1.mockRespone);
    // Assert that send function was called with 'Hello, World!'
    expect(_mocks_1.mockRespone.send).toHaveBeenCalledWith('Visal123');
});
describe('getUserById', () => {
    const mockUser = {
        id: '1',
        name: 'John Doe',
        age: 30,
        gender: 'male',
        category: 'A',
        email: 'johndoe@example.com',
    };
    it('should return a user when found', () => __awaiter(void 0, void 0, void 0, function* () {
        user_model_1.default.findById.mockResolvedValue(mockUser);
        const user = yield (0, user_repositories_1.getUserById)('1');
        expect(user).toEqual(mockUser);
    }));
    it('should return null when user is not found', () => __awaiter(void 0, void 0, void 0, function* () {
        user_model_1.default.findById.mockResolvedValue(null);
        const user = yield (0, user_repositories_1.getUserById)('1');
        expect(user).toBeNull();
    }));
    it('should throw an error when there is a problem with the database call', () => __awaiter(void 0, void 0, void 0, function* () {
        const errorMessage = 'Database error';
        user_model_1.default.findById.mockRejectedValue(new Error(errorMessage));
        yield expect((0, user_repositories_1.getUserById)('1')).rejects.toThrow(`Failed to get user with id 1`);
    }));
    describe('deleteUser', () => {
        const mockUser = {
            id: '1',
            name: 'John Doe',
            age: 30,
            gender: 'male',
            category: 'A',
            email: 'johndoe@example.com',
        };
        it('should return the deleted user when found and deleted', () => __awaiter(void 0, void 0, void 0, function* () {
            user_model_1.default.findByIdAndDelete.mockResolvedValue(mockUser);
            const user = yield (0, user_repositories_1.deleteUser)('1');
            expect(user).toEqual(mockUser);
        }));
    });
    describe('updateUser', () => {
        const mockUser = {
            id: '1',
            name: 'John Doe',
            age: 30,
            gender: 'male',
            category: 'A',
            email: 'johndoe@example.com',
        };
        it('should return the updated user when update is successful', () => __awaiter(void 0, void 0, void 0, function* () {
            const updatedData = { name: 'Jane Doe' };
            const updatedUser = Object.assign(Object.assign({}, mockUser), updatedData);
            user_model_1.default.findByIdAndUpdate.mockResolvedValue(updatedUser);
            const user = yield (0, user_repositories_1.updateUser)('1', updatedData);
            expect(user).toEqual(updatedUser);
        }));
        it('should return null when user is not found', () => __awaiter(void 0, void 0, void 0, function* () {
            user_model_1.default.findByIdAndUpdate.mockResolvedValue(null);
            const user = yield (0, user_repositories_1.updateUser)('1', { name: 'Jane Doe' });
            expect(user).toBeNull();
        }));
        it('should return null and log an error when there is a problem with the database call', () => __awaiter(void 0, void 0, void 0, function* () {
            const errorMessage = 'Database error';
            user_model_1.default.findByIdAndUpdate.mockRejectedValue(new Error(errorMessage));
            console.error = jest.fn();
            const user = yield (0, user_repositories_1.updateUser)('1', { name: 'Jane Doe' });
            expect(user).toBeNull();
            expect(console.error).toHaveBeenCalledWith("Error updating user:", new Error(errorMessage));
        }));
    });
});
//# sourceMappingURL=userService.test.js.map
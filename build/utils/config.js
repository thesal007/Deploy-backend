"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const yup = __importStar(require("yup"));
// Function to load and validate environment variables
function loadConfig() {
    // Determine the environment and set the appropriate .env file
    const env = process.env.NODE_ENV || 'development';
    const envPath = path_1.default.resolve(__dirname, `../configs/.env.${env}`);
    dotenv_1.default.config({ path: envPath });
    // Define a schema for the environment variables using yup
    const envVarsSchema = yup.object().shape({
        NODE_ENV: yup.string().oneOf(['development', 'production', 'test']).default('development'),
        PORT: yup.number().default(3000),
        MONGODB_URL: yup.string().required(),
    }).required();
    // Validate the environment variables
    let envVars;
    try {
        envVars = envVarsSchema.validateSync(process.env, { stripUnknown: true });
    }
    catch (error) {
        throw new Error(`Config validation error: ${error}`);
    }
    return {
        env: envVars.NODE_ENV,
        port: envVars.PORT,
        mongodbUrl: envVars.MONGODB_URL,
    };
}
// Export the loaded configuration
const configs = loadConfig();
exports.default = configs;
//# sourceMappingURL=config.js.map
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
// @ts-ignore
const passport_1 = __importDefault(require("passport"));
const passport_azure_ad_oauth2_1 = require("passport-azure-ad-oauth2");
// @ts-ignore
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../config/env");
// Setup Passport Azure OAuth strategy for authentication
passport_1.default.use(new passport_azure_ad_oauth2_1.Strategy({
    clientID: env_1.config.CLIENT_ID,
    clientSecret: env_1.config.CLIENT_SECRET,
    callbackURL: env_1.config.CALLBACK_URL,
    authorizationURL: `https://login.microsoftonline.com/${env_1.config.TERNANT_ID}/oauth2/authorize`,
    tokenURL: `https://login.microsoftonline.com/${env_1.config.TERNANT_ID}/oauth2/token`,
}, (accessToken, refreshToken, params, profile, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = jsonwebtoken_1.default.decode(params.id_token);
        return done(null, user);
    }
    catch (err) {
        return done(err, false);
    }
})));
// Serialize user object to store in session
passport_1.default.serializeUser((user, done) => {
    done(null, user);
});
// Deserialize user object from session
passport_1.default.deserializeUser((user, done) => {
    done(null, user);
});
exports.default = passport_1.default;

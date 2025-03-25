// @ts-ignore
import passport from "passport";
import { Strategy as AzureStrategy } from "passport-azure-ad-oauth2";
// @ts-ignore
import jwt from "jsonwebtoken";
import { config } from "../config/env";


// Setup Passport Azure OAuth strategy for authentication
passport.use(
    new AzureStrategy(
        {
            clientID: config.CLIENT_ID,
            clientSecret: config.CLIENT_SECRET,
            callbackURL: config.CALLBACK_URL,
            authorizationURL: `https://login.microsoftonline.com/${config.TENANT_ID}/oauth2/authorize`,
            tokenURL: `https://login.microsoftonline.com/${config.TENANT_ID}/oauth2/token`,
        },
        async (accessToken, refreshToken, params, profile, done) => {
            try {
                const user = jwt.decode(params.id_token);
                return done(null, user);
            } catch (err) {
                return done(err, false);
            }
        }
    )
);

// Serialize user object to store in session
passport.serializeUser((user, done) => {
    done(null, user);
});

// Deserialize user object from session
passport.deserializeUser((user, done) => {
    done(null, user as any);
});

export default passport;
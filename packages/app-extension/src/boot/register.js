"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
// import { boot } from 'quasar/wrappers'
const quasar_ui_http_authentication_1 = __importDefault(require("quasar-ui-http-authentication"));
const boot = (({ app }) => {
    console.log("Registering http-authentication'");
    app.use(quasar_ui_http_authentication_1.default);
});
exports.default = boot;

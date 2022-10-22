"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./modules/user/user.module");
const config_1 = require("./config");
const config_2 = require("@nestjs/config");
const typeorm_config_service_1 = require("./database/typeorm.config.service");
const auth_module_1 = require("./modules/auth/auth.module");
const activity_module_1 = require("./modules/activity/activity.module");
const dictionary_module_1 = require("./modules/dictionary/dictionary.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_2.ConfigModule.forRoot({ isGlobal: true, load: [config_1.appConfig, config_1.databaseConfig] }),
            user_module_1.UserModule,
            typeorm_1.TypeOrmModule.forRootAsync({ imports: [config_2.ConfigModule], useClass: typeorm_config_service_1.TypeOrmConfigService }),
            auth_module_1.AuthModule,
            activity_module_1.ActivityModule,
            dictionary_module_1.DictionaryModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
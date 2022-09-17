"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activity = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
const activity_domain_1 = require("../activity.domain");
const user_entity_1 = require("../../user/entities/user.entity");
let Activity = class Activity extends typeorm_1.BaseEntity {
    toJSON() {
        return (0, class_transformer_1.instanceToPlain)(this);
    }
};
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'uniq id' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({ comment: 'uniq id' }),
    __metadata("design:type", Number)
], Activity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'calories burn per minute' }),
    (0, typeorm_1.Column)({ type: 'int', default: 10 }),
    __metadata("design:type", Number)
], Activity.prototype, "calorie_cost", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'activity name en' }),
    (0, typeorm_1.Column)({ type: 'varchar', default: null }),
    __metadata("design:type", String)
], Activity.prototype, "name_en", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'activity name ru' }),
    (0, typeorm_1.Column)({ type: 'varchar', default: null }),
    __metadata("design:type", String)
], Activity.prototype, "name_ru", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'activity icon' }),
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true, default: null }),
    __metadata("design:type", String)
], Activity.prototype, "icon", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'activity type', example: activity_domain_1.EActivityType.AEROBIC }),
    (0, typeorm_1.Column)({ type: 'enum', nullable: false, enum: activity_domain_1.EActivityType, default: activity_domain_1.EActivityType.ANAEROBIC }),
    (0, class_validator_1.Min)(activity_domain_1.EActivityType.ANAEROBIC),
    (0, class_validator_1.Max)(activity_domain_1.EActivityType.AEROBIC),
    __metadata("design:type", Number)
], Activity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_entity_1.User, (user) => user.activities),
    (0, typeorm_1.JoinTable)({ name: 'user_activities' }),
    __metadata("design:type", Array)
], Activity.prototype, "user", void 0);
__decorate([
    (0, class_transformer_1.Exclude)({ toPlainOnly: true }),
    (0, swagger_1.ApiProperty)({
        description: 'activity was created',
        example: '2022-07-31 22:13:20.794424'
    }),
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' }),
    __metadata("design:type", Date)
], Activity.prototype, "created_at", void 0);
__decorate([
    (0, class_transformer_1.Exclude)({ toPlainOnly: true }),
    (0, swagger_1.ApiProperty)({
        description: 'activity was updated',
        example: '2022-07-31 22:13:20.794424'
    }),
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)' }),
    __metadata("design:type", Date)
], Activity.prototype, "updated_at", void 0);
Activity = __decorate([
    (0, typeorm_1.Entity)({ name: 'activity' })
], Activity);
exports.Activity = Activity;
//# sourceMappingURL=activity.entity.js.map
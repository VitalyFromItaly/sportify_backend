import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { EStrategies } from './auth.constants';

@Injectable()
export class LocalAuthGuard extends AuthGuard(EStrategies.LOCAL) {}
import { Controller, Get, HttpCode } from '@nestjs/common';
import { ApiBearerAuth, ApiDefaultResponse, ApiOperation } from '@nestjs/swagger';
import { TDictionary } from './dictionary.domain';
import { DictionaryService } from './dictionary.service';
import { DictionaryDto } from './dto/dictionary.dto';

@Controller('dictionary')
export class DictionaryController {
  constructor(private readonly dictionaryService: DictionaryService) {}

  @Get()
  @ApiOperation({ operationId: 'read' })
  @ApiBearerAuth()
  @ApiDefaultResponse({ description: 'project dictionary', type: DictionaryDto })
  @HttpCode(200)
  async findAll(): Promise<TDictionary> {
    return await this.dictionaryService.findAll();
  }
}

import { Controller, Get, HttpCode } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiDefaultResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { TDictionary } from './dictionary.domain';
import { DictionaryService } from './dictionary.service';
import { DictionaryDto } from './dto/dictionary.dto';

@ApiTags('Dictionary')
@Controller('dictionary')
export class DictionaryController {
  constructor(private readonly dictionaryService: DictionaryService) {}

  @Get()
  @ApiOperation({ operationId: 'read' })
  @ApiBearerAuth()
  @ApiDefaultResponse({ description: 'project dictionary', type: DictionaryDto })
  @ApiCreatedResponse({ type: DictionaryDto })
  @HttpCode(200)
  async findAll(): Promise<TDictionary> {
    return await this.dictionaryService.findAll();
  }
}

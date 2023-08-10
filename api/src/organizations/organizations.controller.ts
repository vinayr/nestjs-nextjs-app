import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { TopicNotificationDto } from 'src/admin/dto/topic-notification.dto';

@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Post()
  create(@Body() organization: CreateOrganizationDto) {
    return this.organizationsService.create(organization);
  }

  @Get()
  findAll() {
    return this.organizationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.organizationsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() organization: UpdateOrganizationDto) {
    return this.organizationsService.update(id, organization);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.organizationsService.remove(id);
  }

  @Post(':id/notify')
  notify(@Param('id') id: string, @Body() notification: TopicNotificationDto) {
    return this.organizationsService.notify(id, notification);
  }
}

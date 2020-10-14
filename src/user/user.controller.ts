import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';
import { CreateUserDto } from './dto/user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Usuario')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Muestra todos los usuarios creados.' })
  @ApiResponse({ status: 200, description: 'OK.' })
  @ApiResponse({ status: 400, description: 'BAD REQUEST.' })
  @Get()
  async getAllUser(@Res() response: Response) {
    try {
      const users = await this.userService.getAllUser();
      return response.status(200).json({ ok: true, users });
    } catch (error) {
      return response.status(400).json({ ok: false, error });
    }
  }

  @ApiOperation({ summary: 'Crea un usuario.' })
  @ApiResponse({ status: 201, description: 'CREATED.' })
  @ApiResponse({ status: 400, description: 'BAD REQUEST.' })
  @Post()
  async createUser(@Body() body: CreateUserDto, @Res() response: Response) {
    try {
      const user = await this.userService.createUser(body);
      return response.status(201).json({ ok: true, user });
    } catch (error) {
      return response.status(400).json({ ok: false, error });
    }
  }

  @ApiOperation({ summary: 'Actualiza un usuario a través del ID.' })
  @ApiResponse({ status: 200, description: 'OK.' })
  @ApiResponse({ status: 400, description: 'BAD REQUEST.' })
  @Put()
  async updateUser(@Body() body: CreateUserDto, @Res() response: Response) {
    try {
      const user = await this.userService.updateUser(body);
      return response.status(200).json({ ok: true, user });
    } catch (error) {
      return response.status(400).json({ ok: false, error });
    }
  }

  @ApiOperation({ summary: 'Eliminar un usuario a través del ID.' })
  @ApiResponse({ status: 200, description: 'OK.' })
  @ApiResponse({ status: 400, description: 'BAD REQUEST.' })
  @Delete()
  async deleteUser(@Query('id') id: string, @Res() response: Response) {
    try {
      const user = await this.userService.deleteUser(id);
      return response.status(200).json({ ok: true, user });
    } catch (error) {
      return response.status(400).json({ ok: false, error });
    }
  }
}

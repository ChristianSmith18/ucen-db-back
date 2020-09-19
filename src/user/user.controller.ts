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

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUser(@Res() response: Response) {
    try {
      const users = await this.userService.getAllUser();
      return response.status(200).json({ ok: true, users });
    } catch (error) {
      return response.status(400).json({ ok: false, error });
    }
  }

  @Post()
  async createUser(@Body() body: CreateUserDto, @Res() response: Response) {
    try {
      const user = await this.userService.createUser(body);
      return response.status(200).json({ ok: true, user });
    } catch (error) {
      return response.status(400).json({ ok: false, error });
    }
  }

  @Put()
  async updateUser(
    @Query('id') id: string,
    @Body() body: CreateUserDto,
    @Res() response: Response,
  ) {
    try {
      const user = await this.userService.updateUser(id, body);
      return response.status(200).json({ ok: true, user });
    } catch (error) {
      return response.status(400).json({ ok: false, error });
    }
  }

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

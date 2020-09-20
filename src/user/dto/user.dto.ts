import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Nombre del usuario.',
    minLength: 3,
    type: String,
    required: true,
  })
  @MinLength(3, {
    message: 'El campo <name> debe contener al menos 3 caracteres.',
  })
  @IsString({ message: 'El campo <name> debe ser string.' })
  readonly name: string;

  @ApiProperty({
    description: 'Apellido del usuario.',
    minLength: 3,
    type: String,
    required: true,
  })
  @MinLength(3, {
    message: 'El campo <lastname> debe contener al menos 3 caracteres.',
  })
  @IsString({ message: 'El campo <lastname> debe ser string.' })
  readonly lastname: string;

  @ApiProperty({
    description: 'Número del usuario.',
    type: Number,
    required: true,
  })
  @IsNumber({}, { message: 'El campo <phonenumber> debe ser número.' })
  readonly phonenumber: number;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Max, Min, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Rut identificador del usuario.',
    type: Number,
    required: true,
    example: 12345678,
  })
  @Max(99999999, { message: 'El campo "rut" debe ser de máximo 8 caracteres.' })
  @Min(1000000, {
    message: 'El campo "rut" debe ser de al menos 7 caracteres.',
  })
  @IsNumber({}, { message: 'El campo "rut" debe ser número.' })
  readonly rut: number;

  @ApiProperty({
    description: 'Nombre del usuario.',
    minLength: 3,
    type: String,
    required: true,
    example: 'Juan',
  })
  @MinLength(3, {
    message: 'El campo "name" debe contener al menos 3 caracteres.',
  })
  @IsString({ message: 'El campo "name" debe ser string.' })
  readonly firstname: string;

  @ApiProperty({
    description: 'Apellido del usuario.',
    minLength: 3,
    type: String,
    required: true,
    example: 'Perez',
  })
  @MinLength(3, {
    message: 'El campo "lastname" debe contener al menos 3 caracteres.',
  })
  @IsString({ message: 'El campo "lastname" debe ser string.' })
  readonly lastname: string;

  @ApiProperty({
    description: 'Número del usuario.',
    type: Number,
    required: true,
    example: 87654321,
  })
  @Max(99999999, {
    message: 'El campo "phonenumber" debe ser de máximo 8 caracteres.',
  })
  @Min(10000000, {
    message: 'El campo "phonenumber" debe ser de al menos 8 caracteres.',
  })
  @IsNumber({}, { message: 'El campo "phonenumber" debe ser número.' })
  readonly phonenumber: number;
}

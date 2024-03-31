import { CreateCoffeeDto } from '../create-coffee.dto/create-coffee.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}

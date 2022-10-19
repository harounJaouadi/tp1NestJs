import { Injectable } from '@nestjs/common';
import {
  MinLength,
  MaxLength,
  IsNotEmpty,
  ValidationArguments,
  IsOptional,
} from 'class-validator';
import { validationMessage } from './validationMessages';

export class addTodoDto {
  @IsNotEmpty({message : validationMessage.notEmpty()})
  @MinLength(3, {
    message: (validationData: ValidationArguments) => {
      return validationMessage.lengthVal(validationData );
    },
  })
  @MaxLength(10, {
    message: (validationData: ValidationArguments) => {
      return validationMessage.lengthVal(validationData);
    },
  })
  name: string;
  @IsOptional()
  description: string;
  
}

import { PartialType } from "@nestjs/mapped-types";
import { IsEnum, IsOptional} from "class-validator";
import { TodoStatusEnum } from "../enum/todoStatusEnum";
import { addTodoDto } from "./addTodoDto";
import { validationMessage } from "./validationMessages";


export class updateTodoDto extends PartialType(addTodoDto) {
    @IsOptional({message : "this is optional"})
    @IsEnum(TodoStatusEnum , {message : validationMessage.enumVal()})
    status :TodoStatusEnum ; 
} ;
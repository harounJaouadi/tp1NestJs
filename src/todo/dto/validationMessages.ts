import { ValidationArguments } from "class-validator";

export class validationMessage {
    
    public static notEmpty() : string{
        return "it must not be empty" ; 
    }
    
    public static lengthVal(validationData: ValidationArguments ):string{
        return `la taille de votre ${validationData.property} ${validationData.value} est courte la taille de ${validationData.property} est ${validationData.constraints[0]}`;
    }
    public static enumVal():string{
        return "there is an enum problem " ; 
    }
}

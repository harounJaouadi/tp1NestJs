import { TodoStatusEnum } from "./todoStatusEnum";
import {v4 as uuidv4, v4} from 'uuid';

export class TodoModal {
    public id : string =uuidv4()  ; 
    public name : string ; 
    public description : string ; 
    public date_de_creation : Date=new Date()  ; 
    public status : TodoStatusEnum = TodoStatusEnum.waiting ;  

}
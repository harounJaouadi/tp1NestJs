
import { TodoStatusEnum } from "src/todo/enum/todoStatusEnum";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, VersionColumn } from "typeorm";

@Entity("todo")
export class TodoEntity{
    public constructor(name : string ,description : string ){
        this.name=name ; 
        this.description=description ; 
        
    } ; 
    @PrimaryGeneratedColumn()
    private id : Number ; 
    @Column()
    private name : string ; 
    @Column()
    private description : string ; 
    @CreateDateColumn()
    private createdAt : Date ; 
    @Column({
        type : "enum" , 
        enum : TodoStatusEnum , 
        default : TodoStatusEnum.waiting 
    })
    private status : TodoStatusEnum ; 
    @UpdateDateColumn()
    private updatedAt : Date ; 
    @DeleteDateColumn()
    private deleatedAt : Date ; 
    @VersionColumn() 
    private testVersion : Number ; 


}
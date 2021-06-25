import { Exclude } from "class-transformer";
import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('users')
class User {

    @PrimaryColumn('uuid')
    readonly id: string

    @Column()
    name: string

    @Column()
    email: string

    @Exclude()
    @Column()
    password: string

    @Column('boolean')
    admin: boolean

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export default User;

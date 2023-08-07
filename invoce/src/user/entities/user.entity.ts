import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password : string;

    @Column()
    contactNo: number;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    pincode: number;

}

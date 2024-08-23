import { IsEmail, IsNotEmpty, IsPhoneNumber } from "class-validator";

export class ApplicationDto {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsPhoneNumber()
    phone: string;

    comment: string;

    @IsNotEmpty()
    connect: string;
}
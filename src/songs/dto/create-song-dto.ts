import { IsArray, IsDateString, IsMilitaryTime, IsNotEmpty, IsString } from "class-validator";

export class CreateSongDTO {
    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @IsNotEmpty()
    @IsArray()
    readonly artists: string[];
    
    @IsDateString()
    @IsNotEmpty()
    readonly relaseDate: Date;
    
    @IsMilitaryTime()
    @IsNotEmpty()
    readonly duration: Date;
}
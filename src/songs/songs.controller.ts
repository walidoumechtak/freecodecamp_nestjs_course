import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
    constructor(
        private readonly songsService: SongsService
    ) {}

    @Get()
    findAll() {
        return this.songsService.findAll()
    }

    @Post()
    create(@Body() createSong: CreateSongDTO) {
        return this.songsService.create(createSong);
    }

    @Get(':id')
    findOne() {
        return "find one song"
    }

    @Put(':id')
    update() {
        return "update a song"
    }

    @Delete(':id')
    delete() {
        return "delete a song"
    }

   
}

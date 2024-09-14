import {Body, Controller, Get, Inject, Logger, Param, Post, Query, Req, Res, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { MediaService } from './media.service';

@Controller('media')
export class MediaController {
    constructor(private readonly mediaService:MediaService, @Inject(Logger) private readonly logger:Logger)
    {}

    @Get(':filename')
    getImage(@Param('filename') filename, @Res() res) {
        return res.sendFile(filename, { root: 'uploads' });
    }

}

import { BadRequestException, Body, Controller, Get, Header, HttpCode, HttpException, HttpStatus, Param, Post, Query, Redirect, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './users/dto/create-user.dto';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  @Get()
  async findAll(@Req() request: Request): Promise<any> {
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    // throw new BadRequestException('Something bad happened', { cause: new Error(), description: 'Some error description' })
    try {
      return 'This action returns /';
    } catch (error) { 
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });
    }
  }

  // @Get('/redirect')
  // @Redirect('https://nestjs.com', 301)

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  // @Get(':id')
  // findOne(@Param() params: any): string {
  //   console.log(params.id);
  //   return `This action returns a #${params.id} id`;
  // }

  // @Get('/he*lo')
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  // @Post('/add')
  // @HttpCode(401)
  // @Header('Cache-Control', 'none')
  // create() {
  //   return 'This action adds a new data';
  // }
}

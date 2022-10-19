import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Req,
  Request,
} from '@nestjs/common';

@Controller('premier')
export class PremierController {
  @Get()
  find(@Req() request: Request) {
    
    console.log(request.method);
    return request.method ; 
  }
  @Put()
  modify(@Req() request: Request) {
    console.log(request.method);
    return request.method ; 
  }
  @Post()
  add(@Req() request: Request) {
    console.log(request.method);
    return request.method ; 
  }
  @Patch()
  change(@Req() request: Request) {
    console.log(request.method);
    return request.method ; 
  }
  @Delete()
  delete(@Req() request: Request) {
    console.log(request.method);
    return request.method ; 
  }
}

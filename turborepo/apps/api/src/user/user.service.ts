import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor( private readonly prisma:PrismaService ){}
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findByEmail(email: string){
    this.prisma.users.findUnique({
      where: {
        email,
      },
    });
  }

}

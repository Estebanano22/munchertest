import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { createUSerDto } from './dto/createUser.dto';
import { UsersService } from "./users.service";
import { User } from "./interfaces/user";

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Get()
    getUsers(): User[] {
        return this.usersService.getUsers();
    }
    
    @Get(':id_user')
    getUser(@Param('id_user') id_user) {
        return this.usersService.getUser(id_user);
    }

    @Post()
    registerUsers(@Body() user: createUSerDto): {} {
        console.log(user.name);
        const json = {
            name: user.name,
            aprobacion: user.aprobacion
        };
        return json;
    }

    @Put(':id_user')
    updateUser(@Body() user: createUSerDto, @Param('id_user') id_user): string {
        console.log(id_user);
        console.log(user);
        return 'Usuarios actualizar';
    }

    @Delete(':user_id')
    deleteUser(@Param() id): string {
        console.log(id);
        return id;
    }

}

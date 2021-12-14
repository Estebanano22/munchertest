import { Injectable } from '@nestjs/common';
import { User } from "./interfaces/User";

@Injectable()
export class UsersService {

    user: User[] = [
        {
            id_user: "1",
            name: "Esteban",
            aprobacion: false,
            saldo: 0
        },
        {
            id_user: "2",
            name: "Daniel",
            aprobacion: true,
            saldo: 0
        },
        {
            id_user: "3",
            name: "Pedro",
            aprobacion: false,
            saldo: 0
        },
        {
            id_user: "4",
            name: "Nilson",
            aprobacion: true,
            saldo: 0
        }
    ];

    getUsers() {
        return this.user;
    }

    getUser(id_user: string): User {
        return this.user.find(user => user.id_user === id_user);
    }

}

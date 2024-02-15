import { Injectable } from "@angular/core";
import { LogginService } from "./logging.service";

// @Injectable() injetar um serviço dentro de outro
@Injectable()
export class UserService{
    users = [
        { name: 'José da Silva', status: 'ativo' },
        { name: 'Maria das Dores', status: 'inativo' },
        { name: 'Francisco Pereira', status: 'férias' }
    ];


    constructor(private loggingService: LogginService){}

    // criar usuario
    createUser(name: string, status: string){
        this.users.push({name: name, status: status});
        this.loggingService.logStatusChange(status) 
    }

    // atualizar status
    updateStatus(id: number, status: string){
        this.users[id].status = status;
        this.loggingService.logStatusChange(status) 
    }


}
import { Injectable } from "@angular/core";

// Injetando um serviço dentro de outro serviço
@Injectable()
export class LogginService{
    logStatusChange(status: string){
        console.log('Foi alterado status do usuário para ' + status);
    }
}
export class UserService{
    users = [
        { name: 'José da Silva', status: 'ativo' },
        { name: 'Maria das Dores', status: 'inativo' },
        { name: 'Francisco Pereira', status: 'férias' }
    ];

    // criar usuario
    createUser(name: string, status: string){
        this.users.push({name: name, status: status});
    }

    // atualizar status
    updateStatus(id: number, status: string){
        this.users[id].status = status;
    }
}
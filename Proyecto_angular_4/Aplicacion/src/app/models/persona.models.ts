export class Persona{
    name: string
    email: string
    password: string

    constructor(name: string,email:string,password:string){
        this.name = name,
        this.email = email,
        this.password = password
    }
    getName(): string{
        return this.name;
    }
    getEmail(): string{
        return this.email;
    }
    getPassword(): string{
        return this.password;
    }   
}
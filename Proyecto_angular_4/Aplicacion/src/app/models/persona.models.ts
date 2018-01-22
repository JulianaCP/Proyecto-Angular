export class Persona{
    name: string
    email: string
    password: string
    country: string

    constructor(name: string,email:string,password:string,country:string){
        this.name = name,
        this.email = email,
        this.password = password,
        this.country = country
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
    getCountry(): string{
        return this.country
    }
}
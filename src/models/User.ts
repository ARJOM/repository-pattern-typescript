export class User {

    private email: string;
    private nome: string;
    private senha: string;
 
    constructor(email: string, nome: string, senha: string){
        this.email = email;
        this.nome = nome;
        this.senha = senha;
    }

    public getEmail(): string {
        return this.email;
    }

    public getNome(): string {
        return this.nome;
    }

    public getSenha(): string {
        return this.senha;
    }

    public setEmail(value: string) {
        this.email = value;
    }

    public setNome(value: string) {
        this.nome = value;
    }

    public setSenha(value: string) {
        this.senha = value;
    }

    public toStringFinal(){
        return "{" +   
                "Email: " + this.email + "," +
                "Nome: " + this.nome + "," +
                "}"
    }

}
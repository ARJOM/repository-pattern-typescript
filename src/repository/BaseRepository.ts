import { CrudRepository } from '../interfaces/CrudRepository';


// TODO implementar crud básico com a lógica de banco de dados
export abstract class BaseRepository<T> implements CrudRepository<T> {

    create(item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    update(id: string, item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    find(item: T): Promise<T[]> {
        throw new Error("Method not implemented.");
    }

    findOne(id: string): Promise<T> {
        throw new Error("Method not implemented.");
    }

}
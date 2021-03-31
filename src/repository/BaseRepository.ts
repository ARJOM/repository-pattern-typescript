import { rejects } from 'assert';
import { resolve } from 'path';
import { CrudRepository } from '../interfaces/CrudRepository';


// TODO implementar crud básico com a lógica de banco de dados
export abstract class BaseRepository<T> implements CrudRepository<T> {

    save(item: T): Promise<T> {
        return new Promise((resolve, reject) => {
            console.log(`Salvando item ${item}`);
            if (item === null){
                reject('Objeto não pode ser nulo')
            } else {
                resolve({...item})
            }
        })
    }

    update(id: string, item: T): Promise<T> {
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
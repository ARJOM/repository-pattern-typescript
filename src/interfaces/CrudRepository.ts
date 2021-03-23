export interface CrudRepository<T> {
    create(item: T): Promise<boolean>;
    update(id: string, item: T): Promise<boolean>;
    delete(id: string): Promise<boolean>;
    find(item: T): Promise<T[]>;
    findOne(id: string): Promise<T>;
}
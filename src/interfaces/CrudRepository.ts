export interface CrudRepository<T> {
    save(item: T): Promise<T>;
    update(id: string, item: T): Promise<T>;
    delete(id: string): Promise<boolean>;
    find(item: T): Promise<T[]>;
    findOne(id: string): Promise<T>;
}
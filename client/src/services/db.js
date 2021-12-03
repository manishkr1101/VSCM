import Storage from "./storage";

class Table {
    constructor(tableName) {
        this.tableName = tableName;
    }

    insert(primaryKey, values) {
        Storage.updateItem(this.tableName, primaryKey, values);
    }

    findById(primaryKey) {
        const tableObject = Storage.getItem(this.tableName);
        if(tableObject) {
            return tableObject[primaryKey];
        }
        return null;
    }
}

export default Table;
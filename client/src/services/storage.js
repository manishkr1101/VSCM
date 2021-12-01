class Storage {
    static setItem(key, value) {
        window.localStorage.setItem(
            key,
            JSON.stringify(value)
        );
    }

    static appendItem(key, value) {
        let items = this.getItem(key);
        if(items) {
            items.push(value);
        }
        else {
            items = [value]
        }
        this.setItem(key, items);
        return items;
    }

    static updateItem(key, secondary_key, value) {
        const items = this.getItem(key) || {};
        items[secondary_key] = value;
        this.setItem(key, items);
    }

    static getItem(key) {
        const itemStringify = window.localStorage.getItem(key);
        return JSON.parse(itemStringify)
    }
}
window.st = Storage;
export default Storage;
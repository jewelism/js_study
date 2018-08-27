export class foo {
    constructor(name) {
        this.name = name;
    }

    fooPrint() {
        return this.name;
    }

    getData() {
        return new Promise((resolve) => {
            fetch('./data/newslist.json')
                .then(res => res.json())
                .then(res => resolve(res));
        });
    }
}
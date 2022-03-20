const { faker } = require('@faker-js/faker');


class User {
    constructor(){
        this.id = Math.floor(Math.random() * 100);
        this.firstName= faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNum = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
        this.image = faker.image.avatar();
    }
}


module.exports = User;
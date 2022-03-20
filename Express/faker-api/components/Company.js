const { faker } = require('@faker-js/faker');


class Company {
    constructor(){
        this.id = Math.floor(Math.random() * 100);
        this.company = faker.company.companyName();
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}



module.exports = Company;
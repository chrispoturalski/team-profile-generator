
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return 'Employee'
    }

    makeHTML(){
        switch(this.getRole()){
            case 'Manager':
                return /*html*/`
                <li>
                    <div>
                        <h1>Employee Name: ${this.getName()}</h1>
                        <a href="mailto:${this.getEmail()}">Employee Email: ${this.getEmail()}</a>
                        <p>Employee ID#: ${this.getId()}</p>
                        <a href="tel:${this.getOfficeNumber()}">Office Number: ${this.getOfficeNumber()}</a>
                    </div>
                </li>
                `
            case 'Engineer':
                return /*html*/`
                <li>
                    <div>
                        <h1>Employee Name: ${this.getName()}</h1>
                        <a href="mailto:${this.getEmail()}">Employee Email: ${this.getEmail()}</a>
                        <p>Employee ID#: ${this.getId()}</p>
                        <a href="https://www.github.com/${this.getGithub()}">Github Profile: ${this.getGithub()}</a>
                    </div>
                </li>`
            case 'Intern':
                return /*html*/`
                <li>
                    <div>
                        <h1>Employee Name: ${this.getName()}</h1>
                        <a href="mailto:${this.getEmail()}">Employee Email: ${this.getEmail()}</a>
                        <p>Employee ID#: ${this.getId()}</p>
                        <p>School Name - ${this.getSchool()}</p>
                    </div>
                </li>
                `
        }
    }
}

module.exports = Employee;

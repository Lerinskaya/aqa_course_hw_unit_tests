import { preProcessFile } from "typescript";

class Employee {
  #salary;

  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.#salary = salary;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (typeof value !== 'string') throw new Error('Invalid first name');
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (typeof value !== 'string') throw new Error('Invalid last name');
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    if (typeof value !== 'string') throw new Error('Invalid last name');
    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (typeof value !== 'number' || value <= 0) throw new Error('Invalid salary value');
    this.#salary = value;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Company {
  #employees;

  constructor(title, phone, address) {
    this.title = title;
    this.phone = phone;
    this.address = address;
    this.#employees = [];
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (typeof value !== 'string') throw new Error('Invalid title');
    this._title = value;
  }

  get phone() {
    return this._phone;
  }

  set phone(value) {
    if (typeof value !== 'number') throw new Error('Invalid phone');
    this._phone = value;
  }

  get address() {
    return this._address;
  }

  set address(value) {
    if (typeof value !== 'string') throw new Error('Invalid address');
    this._address = value;
  }

  #validateEmployee(employee) {
    if (!(employee instanceof Employee)) throw new Error('Invalid Employee');

    if (
      !employee.firstName || typeof employee.firstName !== 'string' ||
      !employee.lastName  || typeof employee.lastName  !== 'string' ||
      !employee.profession|| typeof employee.profession!== 'string' ||
      typeof employee.salary !== 'number' || employee.salary <= 0
    ) {
      throw new Error('Invalid Employee fields');
    }
  }

  addEmployee(employee) {
    this.#validateEmployee(employee);
    return this.#employees.push(employee);
  }

  getEmployees() {
    return this.#employees;
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }
}

export { Employee, Company };

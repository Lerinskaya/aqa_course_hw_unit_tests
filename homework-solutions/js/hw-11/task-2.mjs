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
    if (typeof value !== 'string' || !/^[A-Za-z]{2,50}$/.test(value)) {
      throw new Error('Имя должно содержать 2–50 латинских букв');
    }

    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (typeof value !== 'string' || !/^[A-Za-z]{2,50}$/.test(value)) {
      throw new Error('Фамилия должна содержать 2–50 латинских букв');
    }

    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    if (typeof value !== 'string' || !/^[A-Za-z ]+$/.test(value.trim())) {
      throw new Error('Профессия не может быть пустой, только латинские буквы и пробелы');
    }

    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (typeof value !== 'number' || isNaN(value) || value <= 0 || value >= 10000) {
      throw new Error('Зарплата должна быть в диапазоне 0-10000)');
    }

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
    // if (typeof value !== 'number') throw new Error('Invalid phone');
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

  findEmployeeByName(firstName) {
    let employee = this.#employees.find(employee => employee.firstName === firstName);
    if(!employee) throw new Error(`Сотрудник ${firstName} не найден`);
    return employee;
  }

  #getEmployeeIndex(firstName) {
    let index = this.#employees.findIndex(employee => employee.firstName === firstName);
    if(index === -1) throw new Error(`Сотрудник ${firstName} не найден`);
    return index;
  }

  removeEmployee(firstName) {
    let index = this.#getEmployeeIndex(firstName);
    return this.#employees.splice(index, 1);
  }

  getTotalSalary() {
    return this.#employees.reduce((sum, employee) => sum + employee.salary, 0);
  }
}

export { Employee, Company };


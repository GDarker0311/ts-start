// JavaScript代码
function greeter(person) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);

/**
 * string-类型注解
 * TypeScript工具带来的高级功能。 给 person函数的参数添加: string类型注解
 * @param person 
 */
function greeter1(person: string) {
    return "Hello, " + person;
}

let user1 = "Jane User";

document.body.innerHTML = greeter(user1);


/**
 * 数组-类型注解 
 * 类型注解：
 * TypeScript里的类型注解是一种轻量级的为函数或变量添加约束的方式
 * @param person 
 */
function greeter2(person: string) {
    return "Hello, " + person;
}

let user2 = [0, 1, 2];

document.body.innerHTML = greeter(user2);
//重新编译，你会看到产生了一个错误。
//greeter.ts(7,26): error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.



/**
 * 对象-类型注解
 * 接口
 */
interface Person {
    firstName: string;
    lastName: string;
}

function greeter3(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user3 = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = greeter(user3);

/**
 * 类
 * TypeScript支持JavaScript的新特性，比如支持基于类的面向对象编程。
 * 在构造函数的参数上使用public等同于创建了同名的成员变量。firstName、middleInitial、lastName 和 fullName -> string
 */
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter4(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user4 = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter4(user4);
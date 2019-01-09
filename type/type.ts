let isDone: boolean = false;

let str: string = 'kinsliy';

let list: number[] = [1];

let notSure: any = 21;

let list1: any[] = [1, "e2"];

function warnUser(): void {
  console.log("This is my waring message");
}

// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。

function error(message: string): never {
    throw new Error(message);
}

// never类型是任何类型的子类型，也可以赋值给任何类型；

declare function create(o: object | null): void;
create({ prop: 0 });


let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;








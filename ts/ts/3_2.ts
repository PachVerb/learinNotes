//指定接口方法参数类型
interface Comparable<T>{
    compareTo(b: T): number;
};

class MyObject implements Comparable<MyObject>{
    age: number;
    compareTo(b :MyObject): number {
        if(this.age == b.age){
            return 0;
        }
        return this.age > b.age ? 1 : -1;
    }
}

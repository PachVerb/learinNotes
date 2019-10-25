//属性名来自某个表达式的时候,就无法用对象字面量表达.属性名不固定.也结合symbol使用.
// [...]接受合法表达式.
let Ninfo = "name",Ageinfo = 'age'
let o = {
    ["my" + Ninfo]: "shanshan",
    ["my" + Ageinfo]:'18'
}

obj_o; //{ myname: 'shanshan', myage: '18' }
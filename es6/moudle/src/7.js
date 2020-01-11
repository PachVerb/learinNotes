Reflect.Loader.import('foo', { address: '../libs/m5.js' }).then((a) => {
    a.bar();
})
// import "babel-polyfill"
import test from 'tape'

test('incrementAsync Saga test', (t) => {
    t.plan(1)
    t.deepEqual(
        {asdf:'123'},
        {asdf:'123'},
        'incrementAsync Saga must call delay(1000)'
    )
});
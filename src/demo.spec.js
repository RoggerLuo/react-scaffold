// import "babel-polyfill"
import test from 'tape'

test('test demo', (t) => {
    t.plan(1)
    t.deepEqual({ abc: '123' }, { abc: '123' },
        'passed~~~'
    )
});
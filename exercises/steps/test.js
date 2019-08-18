const steps = require('./index');

beforeEach(() => {
  jest.spyOn(console, 'log');
});

afterEach(() => {
  console.log.mockRestore();
});

test('steps is a function', () => {
  expect(typeof steps).toEqual('function');
});

test('steps called with n = 1', () => {
  steps(1);
  expect(console.log.mock.calls[0][0]).toEqual('#');
  expect(console.log.mock.calls.length).toEqual(1);
});

test('steps called with n = 2', () => {
  steps(2);
  expect(console.log.mock.calls[0][0]).toEqual('# ');
  expect(console.log.mock.calls[1][0]).toEqual('##');
  expect(console.log.mock.calls.length).toEqual(2);
});

test('steps called with n = 3', () => {
  steps(3);
  expect(console.log.mock.calls[0][0]).toEqual('#  ');
  expect(console.log.mock.calls[1][0]).toEqual('## ');
  expect(console.log.mock.calls[2][0]).toEqual('###');
  expect(console.log.mock.calls.length).toEqual(3);
});

test('steps called with n = 1', () => {
  steps(1);
  expect(console.log.mock.calls.length).toEqual(1);
});
test('steps called with n = 10', () => {
  steps(10);
  expect(console.log.mock.calls.length).toEqual(10);
});
test('steps called with n = 100', () => {
  steps(100);
  expect(console.log.mock.calls.length).toEqual(100);
});
test('steps called with n = 1000', () => {
  steps(1000);
  expect(console.log.mock.calls.length).toEqual(1000);
});
// test('steps called with n = 10000', () => {
//   steps(10000);
//   expect(console.log.mock.calls.length).toEqual(10000);
// });
// test('steps called with n = 20000', () => {
//   steps(20000);
//   expect(console.log.mock.calls.length).toEqual(20000);
// });
// test('steps called with n = 30000', () => {
//   steps(30000);
//   expect(console.log.mock.calls.length).toEqual(30000);
// });

// Assuming this is the pureAddUser function's definition file
type SetState<T> = (value: T) => void;

export const pureAddUser = (
  name: string,
  setError: SetState<string>,
  setName: SetState<string>,
  addUserCallback: () => void
): void => {
  if (!name.trim()) {
    setError('Ошибка! Введите имя!');
    return;
  }
  setName('');
  setError('');
  addUserCallback();
};

// Test file

let name: string;
const setName = (a: string) => {
  name = a;
};
let error: string;
const setError = (a: string) => {
  error = a;
};
let added: boolean;
const addUserCallback = () => {
  added = true;
};

beforeEach(() => {
  name = '';
  error = '';
  added = false;
});

test('name 1', () => {
  name = '1';
  pureAddUser(name, setError, setName, addUserCallback);
  expect(name).toBe('');
  expect(error).toBe('');
  expect(added).toBe(true);
});

test('name 2', () => {
  name = '';
  pureAddUser(name, setError, setName, addUserCallback);
  expect(name).toBe('');
  expect(error).toBe('Ошибка! Введите имя!');
  expect(added).toBe(false);
});

test('name 3', () => {
  name = '    ';
  pureAddUser(name, setError, setName, addUserCallback);
  expect(name).toBe('    ');
  expect(error).toBe('Ошибка! Введите имя!');
  expect(added).toBe(false);
});

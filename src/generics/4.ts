type UserA = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: Partial<UserA>): UserA {
  const defaultUser: UserA = {
    name: '',
    surname: '',
    email: '',
    password: '',
  };
  return { ...defaultUser, ...initialValues };
}

createOrUpdateUser({
  email: 'user@mail.com',
  password: 'password123',
});

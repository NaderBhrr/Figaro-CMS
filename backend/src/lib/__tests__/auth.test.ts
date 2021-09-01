import { createToken } from '../auth';

describe('#createToken', () => {
  it('Should create a token', async () => {
    const user = {
      id: '1',
      username: 'foo',
      password: 'bar',
      email: 'foo@bar.com',
      privilege: 'user',
      active: true
    };

    const token = await createToken(user);
    console.log('Test:: token \n', token.length);
    expect(token.length).toBe(413);
  });
});

import { isFunction } from 'fogg-utils';
import user from '../user';

describe('#Query', () => {
  it('Should contain getUsers method', () => {
    expect(isFunction(user.Query.getUsers)).toBe(true);
  });
});

describe('#Mutation', () => {
  it('Should have createUser method', () => {
    expect(isFunction(user.Mutation.createUser)).toBe(true);
  });
});

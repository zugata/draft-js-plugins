import createStore from '../createStore';

describe('createStore', () => {
  it('allows to pass in initial state', () => {
    const store = createStore({ name: 'Ada' });
    expect(store.getItem('name')).toBe('Ada');
  });

  it('should be possible to update and get an item', () => {
    const store = createStore();
    store.updateItem('age', 74);
    expect(store.getItem('age')).toBe(74);
  });

  it('should be possible to subscribe to an update', (done) => {
    const store = createStore();
    store.subscribeToItem('name', (item) => {
      expect(item).toBe('Ada');
      done();
    });
    store.updateItem('name', 'Ada');
  });
});

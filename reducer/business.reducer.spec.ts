import * as fromReducer from './application.reducer'

fdescribe('Business Reducer tests', () => {
  it('should return the default state', () => {
    const { INITIAL_APPLICATION_STATE } = fromReducer;

    const action = { } as any;

    const state = fromReducer.storeReducer(undefined, action);

    expect(state).toEqual(INITIAL_APPLICATION_STATE);

  });

});

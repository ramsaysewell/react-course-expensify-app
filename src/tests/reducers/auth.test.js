import authReducer from '../../reducers/auth';

test('should set login state', () => {
    const action = {
        type: "LOGIN",
        uid: "abc123"
    }
    const state = authReducer(undefined, action);
    expect(state).toEqual({ uid: action.uid });
})

test('should set logout state', () => {
    const action = {
        type: "LOGOUT",
    }
    const state = authReducer(undefined, action);
    expect(state).toEqual({});
})
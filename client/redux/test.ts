import { configureStore } from '@reduxjs/toolkit';

interface Action {
    type: string;
    payload?: any;
}

function reducer(state = { value: 0 }, action: Action) {
    switch (action.type) {
        case 'INCREMENT':
            return { value: state.value + 1 };
        default:
            return state;
    }
}

const store = configureStore({
    reducer: reducer
});
console.log(store.getState());
store.dispatch({ type: 'INCREMENT' });
console.log(store.getState());
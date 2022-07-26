import { configureStore } from '@reduxjs/toolkit';
// import namespaceReducer from '../Components/namespace/namespaceSlice';
var store = configureStore({
    reducer: {
    // namespace: namespaceReducer,
    },
});
export default store;

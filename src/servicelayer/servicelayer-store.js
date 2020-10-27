/**
 * @description - Apply any middleware and configure store.
 * @author - Amonte
 */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { ServiceLayerSaga } from './servicelayer-sagas';
import { serviceLayerReducer } from './servicelayer-reducers';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        serviceLayerReducer,
        applyMiddleware(sagaMiddleware),
    );
    sagaMiddleware.run(ServiceLayerSaga);    
    return store;
}

export default configureStore;
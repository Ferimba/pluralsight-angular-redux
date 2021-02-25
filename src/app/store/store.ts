import { createStore, applyMiddleware, compose, GenericStoreEnhancer } from 'redux';
import { reducer } from './reducer';
import { IAppState } from './IAppState';
import freezeState from './freezeState';

declare var window:any;
const devToolsExtension : GenericStoreEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore<IAppState>(
    reducer, 
    compose(applyMiddleware(freezeState), devToolsExtension) as GenericStoreEnhancer
);
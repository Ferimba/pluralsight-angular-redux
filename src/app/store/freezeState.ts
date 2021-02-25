function deepfreeze(o: Object) {
    Object.freeze(o);

    Object.getOwnPropertyNames(o).forEach((prop) => {
        if(o.hasOwnProperty(prop) && o[prop] != null && (typeof o[prop] === 'object') && !Object.isFrozen(o[prop])) {
            deepfreeze(o[prop]);
        }
    });
    return o;
}

export default function freezeState(store) {
    return (next) => (action) => {
        const result = next(action);
        const state = store.getState();
        deepfreeze(state);
        return result;
    }
}
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
    legacy_createStore as createStore,
    applyMiddleware,
    compose,
} from "redux";
import rootReducer from "./reducers/rootReducer";
import { Provider, useSelector } from "react-redux";
import thunk from "redux-thunk";
import { createFirestoreInstance, getFirestore } from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import firebase from "./config/fbConfig";
import { isLoaded } from "react-redux-firebase";

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
    )
);

const rrfConfig = {
    useFirestoreForProfile: true,
    userProfile: "users",
};

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
};

function AuthIsLoaded({ children }) {
    const auth = useSelector((state) => state.firebase.auth);
    if (!isLoaded(auth)) return <div></div>;
    return children;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <AuthIsLoaded>
                <App />
            </AuthIsLoaded>
        </ReactReduxFirebaseProvider>
    </Provider>
);

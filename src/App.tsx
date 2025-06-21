//redux provider and store
import { Provider } from "react-redux";
import store from "./store";


function AuthProvider() {
  return (
    <Provider store={store}>
      hello
    </Provider>
    // hello
  );
}

export default AuthProvider;

import { StatusBar } from "expo-status-bar";
import Routes from "./AppRoutes/Routes";
import { Provider } from "react-redux";
import store from "./AppStore/store";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}

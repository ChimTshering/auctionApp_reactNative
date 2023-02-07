import { StatusBar } from "expo-status-bar";
import Routes from "./AppRoutes/Routes";
import { Provider } from "react-redux";
import store from "./AppStore/store";
import { ToastProvider } from "react-native-toast-notifications";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <ToastProvider>
          <Routes />
        </ToastProvider>
      </Provider>
    </>
  );
}

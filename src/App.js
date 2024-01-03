import { Provider } from "react-redux";
import "./App.css";
import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";
import appStore from "./Utils/Store/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <MainContainer />
      </div>
    </Provider>
  );
}

export default App;

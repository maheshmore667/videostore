import { Provider } from "react-redux";
import "./App.css";
import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";
import appStore from "./Utils/Store/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import VideoContainer from "./Components/VideoContainer";
import Watch from "./Components/Watch";

function App() {
  const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <MainContainer />,
      children : [
        {
          path : "/",
          element : <VideoContainer />
        },
        {
          path : "/watch",
          element : <Watch />
        }
      ]
    }
  ])
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;

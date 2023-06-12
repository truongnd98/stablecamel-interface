import React from "react";
import { hydrate, render } from "react-dom";
// import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./stores/store";
import App from "./App";
import "./index.css";

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
const container = document.getElementById("root")!;
// const root = createRoot(container);

// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />  const [load, setLoaded] = useState(true);
//     </Provider>
//   </React.StrictMode>
// );
if (container.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    container
  );
} else {
  render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    container
  );
}

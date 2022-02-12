import useInit from "./hooks/useInit";
import Header from "./components/Header/Header";
import ClientsContainer from "./components/clients/ClientsContainer";

const App = () => {
  useInit();

  return (
    <div className="app">
      <Header />
      <ClientsContainer />
    </div>
  );
};

export default App;

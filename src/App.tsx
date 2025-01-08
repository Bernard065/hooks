import Theme from "./components/theme/Theme";
import { ThemeProvider } from "./components/theme/ThemeProvider";
import FetchData from "./components/useEffect-hook/FetchData";

const App = () => {
  return (
    <ThemeProvider>
      <Theme />
      <FetchData />
    </ThemeProvider>
  );
};

export default App;

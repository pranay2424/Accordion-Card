import FirstFile from "./Components/stats-preview-card-component-main/library/FirstFile";
import SecondFile from "./Components/3-column-preview-card-component-main/library/SecondFile";
import ThirdFile from "./Components/profile-card-component-main/library/ThirdFile";
import FourthFile from "./Components/faq-accordion-card-main/library/FourthFile"
import "./App.css";


function App() {
  return (
    <div className="App">
      <FirstFile  width="100%" />
      <SecondFile  width="100%"/>
      <ThirdFile width="100%" />
      <FourthFile width="100" />
    </div>
  );
}

export default App;

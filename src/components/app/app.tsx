import MainPage from "../../pages/main-page/main-page";

type AccomodationNumber = {
  accomodationNumber: number;
}

function App({accomodationNumber} : AccomodationNumber) : JSX.Element {
  return (
    <MainPage accomodationNumber={accomodationNumber} />
  );
}

export default App;

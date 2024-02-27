import { Slider } from "../Slider/Slider";
import { Header } from "../Header/Header";
import { NavigationButtons } from "../NavigationButtons/NavigationButtons";
import { Footer } from "../Footer/Footer";
import { ProductBar } from "../ProductBar/ProductBar";

export const Main = () => {
  return (
    <div>
      <Slider />
      <NavigationButtons />
      <ProductBar />
    </div>
  );
};

import { AboutUs } from "./components/homepage/aboutus";
import { Hero } from "./components/homepage/hero";
import { ToggleTheme } from "./components/common/toggletheme";
import { Services } from "./components/homepage/services";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Services />
    </main>
  );
}

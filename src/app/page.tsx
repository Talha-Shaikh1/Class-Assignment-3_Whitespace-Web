import Resource from "./component/resources/Resource";
import Sponsor from "./component/sponsors/Sponsor";
import Hero from "./component/hero/Hero";
import Products from "./component/products/Products";
import Solution from "./component/solutions/Solution";
import Pricing from "./component/pricing/Pricing";



export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Solution />
      <Resource />
      <Pricing />
      <Sponsor />
     
    </>
  );
}

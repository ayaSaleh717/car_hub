import Hero from "./component/Hero/Hero";
import SearchBar from "./component/search/SearchBar";
import CarCard from "./component/carcard/CarCard";
import CustomFilter from "./component/customFilter/CustomFilter";
import { fetchCars } from "./utils";
import { HomeProps } from './component/customButton/typs'
import { fuels, yearsOfProduction } from "./component/constants/index";
// import {SearchBar} from './component/search/SearchBar'




export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });





  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      
    </main>
  );
}

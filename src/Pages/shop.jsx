import { Hero } from "../Components/Hero/hero";
import NewCollections from "../Components/NewCollections/newCollections";
import NewsLetter from "../Components/NewsLetter/newsLetter";
import { Offers } from "../Components/Offers/offers";
import { Popular } from "../Components/Popular/popular";

export function Shop() {
    return(
        <>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollections/>
            <NewsLetter/>
        </>
    )
}
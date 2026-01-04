import HeroPage from "./Hero"
import OverviewPage from "./overview"
import UpcomingMatch from "./UpcomingMatch"
import MerchPage from "./merch"
import TestiPage from "./testi"


export default function HomePage () {
    return (
        <>
            <HeroPage/>
            <OverviewPage/>
            <UpcomingMatch/>
            <MerchPage/>
            <TestiPage/>
        </>
    )
}
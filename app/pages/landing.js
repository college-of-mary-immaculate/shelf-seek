import LandingPageLayout from "../layouts/landingPage.js";
import Header from "../components/landing/header.js";
import Main from "../components/landing/main.js";

export default function Landing() {

    const { footer, header, main } = LandingPageLayout(this.root);

    Header(header);
    Main(main);

}
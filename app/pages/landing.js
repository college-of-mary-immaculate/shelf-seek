import LandingPageLayout from "../layouts/landingPage.js";
import Footer from "../components/landing/footer.js";
import Header from "../components/landing/header.js";
import Main from "../components/landing/main.js";
import Nav from "../components/landing/nav.js";

export default function Landing() {
    const { footer, header, main, nav} = LandingPageLayout(this.root);
    Footer(footer)
    Header(header);
    Main(main);
    Nav(nav)

}
import LandingPageLayout from "../layouts/landingPage";
import Header from "../components/landing/header";
import Footer from "../components/landing/footer";
import Main from "../components/landing/main";

export default function Landing() {
    const { footer, header, main } = LandingPageLayout(this.root);

    Footer(footer);
    Header(header);
    Main(main);

}
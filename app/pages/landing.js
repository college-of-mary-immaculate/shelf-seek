import LandingPageLayout from "../layouts/landingPage";
import Footer from "../components/landing/footer";
import Header from "../components/landing/header";
import Main from "../components/landing/main";
import Nav from "../components/landing/nav";

export default function Landing() {
    if (document && document.documentElement) {
        document.documentElement.style.overflowY = 'hidden';
    }
    const { footer, header, main, nav} = LandingPageLayout(this.root);
    Footer(footer)
    Header(header);
    Main(main, this.navigate);
    Nav(nav);

}
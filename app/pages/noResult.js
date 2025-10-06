// import LandingPageLayout from "../layouts/landingPage.js";
// import Header from "../components/landing/header.js";
// import Main from "../components/landing/main.js";
import NoResultPageLayout from "../layouts/noResultPage";
import Footer from "../components/not result/footer";
import Header from "../components/not result/header";
import Main from "../components/not result/main";
import Nav from "../components/not result/nav"



export default function NoResult() {
    const {footer, header, main, nav} = NoResultPageLayout(this.root);
    Footer(footer)
    Header(header)
    Main(main)
    Nav(nav)

    // const { footer, header, main } = LandingPageLayout(this.root);

}
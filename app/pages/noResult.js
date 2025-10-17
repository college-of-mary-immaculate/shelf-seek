import NoResultPageLayout from "../layouts/noResultPage";
import Footer from "../components/not result/footer";
import Header from "../components/not result/header";
import Main from "../components/not result/main";
import Nav from "../components/not result/nav"



export default function NoResult() {
    if (document && document.documentElement) {
        document.documentElement.style.overflowY = '';
    }
    const {footer, header, main, nav} = NoResultPageLayout(this.root);
    Header(header)
    Main(main)
    Footer(footer)
    Nav(nav)

    // const { footer, header, main } = LandingPageLayout(this.root);

}
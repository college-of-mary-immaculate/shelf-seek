import ResultPageLayout from "../layouts/resultPage.js";
// import Nav from "../components/result/nav.js";
import Header from "../components/result/header.js";
import Footer from "../components/result/footer.js";
import Main from "../components/result/main.js";

export default function Result() {
    const { nav, footer, header, main } = ResultPageLayout(this.root);

    // Nav(nav);
    Footer(footer);
    Header(header);
    Main(main);

}
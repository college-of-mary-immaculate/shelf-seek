import ResultPageLayout from "../layouts/resultPage.js";
// import Nav from "../components/result/nav.js";
import Header from "../components/result/header.js";
import Footer from "../components/result/footer.js";
import Main from "../components/result/main.js";

export default function Result() {
    const { nav, header, main, footer } = ResultPageLayout(this.root);

    Header(header);
    Main(main);
    Footer(footer);
}
import ResultPageLayout from "../layouts/resultPage";
import Nav from "../components/result/nav";
import Header from "../components/result/header";
import Footer from "../components/result/footer";
import Main from "../components/result/main";

export default function Result() {
    const { nav, footer, header, main } = ResultPageLayout(this.root);

    Nav(nav);
    Footer(footer);
    Header(header);
    Main(main);

}
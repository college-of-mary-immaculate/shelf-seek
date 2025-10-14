import AboutPageLayout from "../layouts/aboutPage";
import Footer from "../components/about/footer";
import Header from "../components/about/header";
import Main from "../components/about/main";

export default function About() {
    if (document && document.documentElement) {
        document.documentElement.style.overflowY = 'hidden';
    }
    const { footer, header, main} = AboutPageLayout(this.root);
    Footer(footer)
    Header(header);
    Main(main);


}
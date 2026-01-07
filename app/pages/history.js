import HistoryPageLayout from "../layouts/historyPage";
import Header from "../components/history/header";
import Main from "../components/history/main";

export default function History() {
    if (document && document.documentElement) {
        document.documentElement.style.overflowY = 'hidden';
    }
    const {header, main} = HistoryPageLayout(this.root);
    Header(header);
    Main(main);

}
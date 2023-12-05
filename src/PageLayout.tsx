import "./PageLayout.scss";
import Footer from "./features/Footer/Footer";
import Header from "./features/Header/Header";

type PageLayoutPropType = {
    children: React.ReactNode
}

export default function PageLayout({children}: PageLayoutPropType) {
  return (
    <>
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>
    </>
  )
}

import { Header } from "./Header"
import { Flags } from "./Flags"
import { About } from "./About";
import { Footer } from "./Footer";
type Props = {
    children: React.ReactNode;
};
const MarketingLayout = ({ children }: Props) => {
    return(
        <>
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 flex flex-col items-center justify-center">
            {children}
            </main>
           <Flags />
        </div>
        <About />
        <Footer />
        </>
    );
}
export default MarketingLayout;
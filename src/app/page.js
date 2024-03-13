import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Home() {
    return (
        <div className="min-h-[100vh] bg-white">
            <Header title="Landing"/> 
            <Sidebar />
            <Footer />
        </div>
    );
}

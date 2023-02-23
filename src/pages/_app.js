import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { Raleway } from "@next/font/google";
const raleway = Raleway({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={raleway.className}>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

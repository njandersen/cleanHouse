import NavBar from "../src/components/UI/NavBar";
import Sidebar from "../src/components/UI/Sidebar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-row">
      <div className="flex">
        <Sidebar />
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

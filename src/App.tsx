import { About, NailsAnatomy, Services, Manicure } from "./components/home";
import { Layout } from "./components/layout/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const handleRedirect = (url: string) => {
  window.open(url, "_blank");
};

function App() {
  return (
    <div className="flex flex-col items-cenbg-[#F0F0F0] gap-8">
      <Layout>
        <div className="absolute right-8 bottom-8">
          <FontAwesomeIcon
            icon={faWhatsapp}
            style={{ color: "#ffffff", height: 60, cursor: "pointer" }}
            onClick={() => handleRedirect("https://wa.link/hixbm9 ")}
          />
        </div>
        <About />
        <NailsAnatomy />
        <Services />
        <Manicure />
      </Layout>
    </div>
  );
}

export default App;

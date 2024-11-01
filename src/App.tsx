import { About, NailsAnatomy, Services, Manicure } from "./components/home";
import { Layout } from "./components/layout/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const handleRedirect = (url: string) => {
  window.open(url, "_blank");
};

function App() {
  return (
    <div className="relative flex flex-col items-cenbg-[#F0F0F0] gap-8">
      <Layout>
        <div className="fixed right-8 bottom-8">
          <FontAwesomeIcon
            icon={faWhatsapp}
            style={{
              color: "#ffffff",
              height: 50,
              cursor: "pointer",
              backgroundColor: "#25D366",
              borderRadius: "50%",
            }}
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

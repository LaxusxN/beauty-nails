import { About, NailsAnatomy, Services, Manicure } from "./components/home";
import { Layout } from "./components/layout/layout";

function App() {
  return (
    <div className="flex flex-col items-cenbg-[#F0F0F0] gap-8">
      <Layout>
        <About />
        <NailsAnatomy />
        <Services />
        <Manicure />
      </Layout>
    </div>
  );
}

export default App;

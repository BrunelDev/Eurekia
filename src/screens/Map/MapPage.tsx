import { FooterSection } from "../../components/FooterSection";
import { NavigationSection } from "../../components/NavigationSection";

export const MapPage = (): JSX.Element => {
  const mapUrl = "https://www.openstreetmap.org/export/embed.html?bbox=7.14187,43.68994,7.15187,43.69394&layer=mapnik&marker=43.69194,7.14687";

  return (
    <div className="w-full flex flex-col min-h-screen">
      <NavigationSection />
      <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-6xl text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Notre Emplacement</h1>
          <p className="text-lg text-gray-600 mt-2">Retrouvez nos bureaux à Cagnes-sur-Mer.</p>
        </div>
        <div className="w-full max-w-6xl h-[60vh] rounded-lg overflow-hidden shadow-2xl border">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src={mapUrl}
            title="Emplacement d'Eurêka Ingénierie"
          ></iframe>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};
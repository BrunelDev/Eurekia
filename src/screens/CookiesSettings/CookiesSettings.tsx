import { Activity, Cookie, Settings, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { FooterSection } from "../../components/FooterSection";
import { NavigationSection } from "../../components/NavigationSection";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

interface CookiePrefs {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

const defaultPrefs: CookiePrefs = {
  essential: true, // always true and disabled
  analytics: true,
  marketing: false,
  preferences: true,
};

const STORAGE_KEY = "eureka_cookie_prefs";

const CookiesSettings = (): JSX.Element => {
  const [prefs, setPrefs] = useState<CookiePrefs>(defaultPrefs);
  const [saved, setSaved] = useState<string>("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CookiePrefs;
        setPrefs({ ...defaultPrefs, ...parsed, essential: true });
      }
    } catch {}
  }, []);

  const updatePref = (key: keyof CookiePrefs, value: boolean) => {
    if (key === "essential") return; // cannot change essential
    setPrefs((p) => ({ ...p, [key]: value }));
  };

  const acceptAll = () => {
    const next = {
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    setPrefs(next);
    persist(next, "Toutes les catégories ont été activées.");
  };

  const rejectAll = () => {
    const next = {
      essential: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    setPrefs(next);
    persist(next, "Seuls les cookies essentiels sont conservés.");
  };

  const save = () => persist(prefs, "Vos préférences ont été enregistrées.");

  const persist = (val: CookiePrefs, msg: string) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(val));
      setSaved(msg);
      setTimeout(() => setSaved(""), 2500);
    } catch {}
  };

  return (
    <div className="min-h-screen bg-white">
      <NavigationSection />

      {/* Hero */}
      <section className="bg-[#fbf9eb]  py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center">
            <h1 className="font-display-h6 text-4xl sm:text-5xl lg:text-6xl text-[#1e1e1e] mb-6">
              Paramètres des cookies
            </h1>
            <p className="[font-family:'Open_Sans'] font-light text-[#1e1e1e] max-w-3xl mx-auto">
              Gérez vos préférences de cookies. Nous utilisons des cookies pour
              améliorer votre expérience, analyser l'audience et personnaliser
              le contenu.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-8">
            {/* Intro card */}
            <Card className="border-0 bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center">
                    <Cookie className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-[#1e1e1e] font-display-h6">
                    Comment nous utilisons les cookies
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0 [font-family:'Open_Sans'] font-light text-[#1e1e1e]">
                Les cookies nous aident à faire fonctionner le site, à mémoriser
                vos préférences, à comprendre l'utilisation et à améliorer nos
                services. Vous pouvez ajuster vos préférences ci-dessous à tout
                moment.
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="border-0 bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-[#1e1e1e] font-display-h6">
                    Catégories de cookies
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0 space-y-6">
                {/* Essential */}
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h4 className="font-display-h6 text-[#1e1e1e]">
                      Essentiels
                    </h4>
                    <p className="[font-family:'Open_Sans'] font-light text-[#1e1e1e] text-sm">
                      Indispensables au fonctionnement du site (sécurité,
                      connexion, navigation).
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input
                      type="checkbox"
                      checked
                      readOnly
                      className="w-5 h-5"
                    />
                    <Label className="[font-family:'Open_Sans'] font-light text-[#1e1e1e]">
                      Toujours actifs
                    </Label>
                  </div>
                </div>

                {/* Preferences */}
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h4 className="font-display-h6 text-[#1e1e1e]">
                      Préférences
                    </h4>
                    <p className="[font-family:'Open_Sans'] font-light text-[#1e1e1e] text-sm">
                      Mémorisent vos choix (langue, région) pour une expérience
                      personnalisée.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input
                      type="checkbox"
                      checked={prefs.preferences}
                      onChange={(e) =>
                        updatePref("preferences", e.target.checked)
                      }
                      className="w-5 h-5"
                    />
                    <Label className="[font-family:'Open_Sans'] font-light text-[#1e1e1e]">
                      Activer
                    </Label>
                  </div>
                </div>

                {/* Analytics */}
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h4 className="font-display-h6 text-[#1e1e1e]">
                      Statistiques
                    </h4>
                    <p className="[font-family:'Open_Sans'] font-light text-[#1e1e1e] text-sm">
                      Nous aident à comprendre l'utilisation du site pour
                      améliorer nos services.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input
                      type="checkbox"
                      checked={prefs.analytics}
                      onChange={(e) =>
                        updatePref("analytics", e.target.checked)
                      }
                      className="w-5 h-5"
                    />
                    <Label className="[font-family:'Open_Sans'] font-light text-[#1e1e1e]">
                      Activer
                    </Label>
                  </div>
                </div>

                {/* Marketing */}
                {/*<div className="flex items-start justify-between gap-6">
                  <div>
                    <h4 className="font-display-h6 text-[#1e1e1e]">Marketing</h4>
                    <p className="[font-family:'Open_Sans'] font-light text-[#1e1e1e] text-sm">
                      Utilisés pour le contenu et les offres personnalisées.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input
                      type="checkbox"
                      checked={prefs.marketing}
                      onChange={(e) => updatePref("marketing", e.target.checked)}
                      className="w-5 h-5"
                    />
                    <Label className="[font-family:'Open_Sans'] font-light text-[#1e1e1e]">Activer</Label>
                  </div>
                </div>*/}
              </CardContent>
            </Card>

            {/* Actions */}
            <Card className="border-0 bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-[#1e1e1e] font-display-h6">
                    Vos actions
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap items-center gap-3">
                  <Button
                    onClick={acceptAll}
                    className="bg-[#F6F2CB] hover:bg-[#EFE299] text-[#1e1e1e]"
                  >
                    Accepter tout
                  </Button>
                  <Button
                    onClick={rejectAll}
                    variant="outline"
                    className="border-primary-200 text-[#1e1e1e]"
                  >
                    Refuser tout
                  </Button>
                  <Button
                    onClick={save}
                    className="bg-gradient-to-r from-primary-500 to-primary-600 text-white"
                  >
                    Enregistrer mes préférences
                  </Button>
                </div>
                {saved && (
                  <div className="mt-4 inline-flex items-center gap-2 bg-success-50 text-success-800 border border-success-200 px-3 py-2 rounded-md [font-family:'Open_Sans'] text-sm">
                    <Activity className="w-4 h-4" /> {saved}
                  </div>
                )}
                <p className="mt-6 [font-family:'Open_Sans'] font-light text-[#1e1e1e] text-sm">
                  Pour en savoir plus, consultez notre{" "}
                  <a className="underline" href="/privacy-policy">
                    Politique de confidentialité
                  </a>{" "}
                  et nos{" "}
                  <a className="underline" href="/terms">
                    Conditions d'utilisation
                  </a>
                  .
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default CookiesSettings;

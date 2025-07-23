import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const BlogPresentationSection = (): JSX.Element => {
  // Blog post data for mapping
  const blogPosts = [
    {
      id: 1,
      image: "/placeholder-image-1.png",
      title: "Déclaration préalable : comment constituer votre dossier ?",
      date: "Publié le 12 mai 2025",
      url: "https://www.techinnovation.com",
    },
    {
      id: 2,
      image: "/placeholder-image-2.png",
      title: "Comprendre le rôle du CCTP dans un projet de rénovation.",
      date: "Publié le 12 mai 2025",
      url: "https://www.sustainabledesign.com",
    },
    {
      id: 3,
      image: "/placeholder-image-3.png",
      title: "Quelles obligations d'accessibilité pour les ERP ?",
      date: "Publié le 12 mai 2025",
      url: "https://www.uxtrends.com",
    },
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-10">
          {/* Header section */}
          <div className="flex items-end justify-between gap-3 w-full">
            <div className="flex flex-col items-start gap-5 flex-1">
              <h2 className="font-display-h4 font-[number:var(--display-h4-font-weight)] text-[#1e1e1e] text-[length:var(--display-h4-font-size)] tracking-[var(--display-h4-letter-spacing)] leading-[var(--display-h4-line-height)] [font-style:var(--display-h4-font-style)]">
                Apprenez, explorez, restez à jour
              </h2>
              <p className="font-text-medium font-[number:var(--text-medium-font-weight)] text-[#1e1e1e] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
                Retrouvez nos conseils, actualités et guides pour réussir tous
                vos projets.
              </p>
            </div>

            <Button
              variant="ghost"
              className="flex items-center gap-3 pr-2 h-10"
            >
              <span className="font-label-medium font-[number:var(--label-medium-font-weight)] text-[#1e1e1e] text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] [font-style:var(--label-medium-font-style)]">
                Lire le blog Archim&apos;aide
              </span>
              <div className="flex w-8 h-8 items-center justify-center rounded-[1000px] overflow-hidden [background:radial-gradient(50%_50%_at_50%_50%,rgba(249,229,185,1)_0%,rgba(248,227,181,1)_22%,rgba(246,224,172,1)_40%,rgba(242,218,155,1)_55%,rgba(237,210,131,1)_70%,rgba(231,199,101,1)_85%,rgba(223,186,65,1)_98%,rgba(222,184,59,1)_100%)]">
                <ArrowRightIcon className="w-5 h-5 text-black" />
              </div>
            </Button>
          </div>

          {/* Blog posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="border-none shadow-none">
                <CardContent className="flex flex-col items-start gap-5 p-0">
                  <div
                    className="w-full h-[380px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                  <div className="flex flex-col items-start gap-3 w-full">
                    <div className="flex flex-col items-start gap-1 w-full">
                      <h3 className="font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-[length:var(--heading-h5-font-size)] leading-[var(--heading-h5-line-height)] text-[#1e1e1e] tracking-[var(--heading-h5-letter-spacing)] [font-style:var(--heading-h5-font-style)]">
                        {post.title}
                      </h3>
                      <p className="font-text-smaller font-[number:var(--text-smaller-font-weight)] text-[length:var(--text-smaller-font-size)] leading-[var(--text-smaller-line-height)] text-[#1e1e1e] tracking-[var(--text-smaller-letter-spacing)] [font-style:var(--text-smaller-font-style)]">
                        {post.date}
                      </p>
                    </div>
                    <a
                      href={post.url}
                      className="font-text-underline font-[number:var(--text-underline-font-weight)] text-[#deb83b] text-[length:var(--text-underline-font-size)] tracking-[var(--text-underline-letter-spacing)] leading-[var(--text-underline-line-height)] underline [font-style:var(--text-underline-font-style)]"
                    >
                      {post.url}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

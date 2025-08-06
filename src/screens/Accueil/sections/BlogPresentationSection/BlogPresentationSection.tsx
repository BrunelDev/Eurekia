import { ArrowRightIcon } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";
import ArrowButton from "../../../../components/ArrowButton";
import { useRSSFeed } from "../../../../../services/blogService";
import { Skeleton } from "../../../../components/ui/skeleton";

export const BlogPresentationSection = (): JSX.Element => {

  // Blog post data for mapping
  const { data, loading, error, refetch } = useRSSFeed(
    "https://blog.eurekaingenierie.com/feed/"
  );

  console.log(data);
  const blogPosts =
    (data &&
      data?.posts.map((post, index) => ({
        id: index + 1,
        image: post.blogPhoto,
        title: post.title,
        date: "Publié le " + new Date(post.creationDate).toLocaleDateString("fr-FR", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }),
        url: post.link,
      }))) ||
    [];

  return (
    <section className="w-full py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-10">
          {/* Header section */}
          <div className="flex flex-wrap items-end justify-between gap-3 w-full">
            <div className="flex flex-col items-start gap-5 flex-1">
              <h2 className="font-display-h4 font-[number:var(--display-h4-font-weight)] text-[#1e1e1e] text-[length:var(--display-h4-font-size)] tracking-[var(--display-h4-letter-spacing)] leading-[var(--display-h4-line-height)] [font-style:var(--display-h4-font-style)]">
                Apprenez, explorez, restez à jour
              </h2>
              <p className="font-text-medium font-[number:var(--text-medium-font-weight)] text-[#1e1e1e] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
                Retrouvez nos conseils, actualités et guides pour réussir tous
                vos projets.
              </p>
            </div>

            <ArrowButton
              handleClick={() => window.location.href = "/blog"}
              text="Lire le blog Archim'aide"
              lucideIcon={
                <ArrowRightIcon className="w-5 h-5 text-black group-hover:text-[#cd9f25]" />
              }
            />
          </div>

          {/* Blog posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading &&
              [1, 2, 3].map((n) => (
                <Card key={n} className="border-none shadow-none">
                  <CardContent className="flex flex-col items-start gap-2 p-0">
                    <Skeleton className="h-48 w-full mb-4" />
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2 mb-2" />
                    <Skeleton className="h-4 w-1/3" />
                  </CardContent>
                </Card>
              ))}

            {!loading &&
              blogPosts.slice(0, 3).map((post) => (
                <Card key={post.id} className="border-none shadow-none">
                  <CardContent className="flex flex-col items-start gap-5 p-0">
                    <div
                      className="w-full h-[380px] bg-cover bg-center"
                      style={{ backgroundImage: `url(${post.image})` }}
                    />
                    <div className="flex flex-col items-start gap-3 w-full">
                      <div className="flex flex-col items-start gap-1 w-full">
                        <h3 className="font-heading-h5 min-h-[48px] font-display-h6 font-[number:var(--heading-h5-font-weight)] text-[length:var(--heading-h5-font-size)] leading-[var(--heading-h5-line-height)] text-[#1e1e1e] tracking-[var(--heading-h5-letter-spacing)] [font-style:var(--heading-h5-font-style)]">
                          {post.title}
                        </h3>
                        <p className="font-text-smaller [font-family:'Sofia_Pro-Light',Helvetica] font-[number:var(--text-smaller-font-weight)] text-[length:var(--text-smaller-font-size)] leading-[var(--text-smaller-line-height)] text-[#1e1e1e] tracking-[var(--text-smaller-letter-spacing)] [font-style:var(--text-smaller-font-style)]">
                          {post.date}
                        </p>
                      </div>
                      <a
                        href={post.url}
                        className="font-text-underline [font-family:'Sofia_Pro-Light',Helvetica] font-[number:var(--text-underline-font-weight)] text-[#deb83b] text-[length:var(--text-underline-font-size)] tracking-[var(--text-underline-letter-spacing)] leading-[var(--text-underline-line-height)] underline [font-style:var(--text-underline-font-style)]"
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

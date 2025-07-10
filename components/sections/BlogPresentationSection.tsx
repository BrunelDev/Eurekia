import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export const BlogPresentationSection = () => {
  // Blog post data for mapping
  const blogPosts = [
    {
      id: 1,
      image: "/placeholder-image-1.png",
      title: "Comprendre les CCTP : guide pour les débutants",
      description:
        "Le CCTP est au cœur de tout projet : apprenez à en décrypter les enjeux et à le structurer efficacement.",
      author: "Ronald Richards",
      avatar: "/avatar-image-1.png",
      date: "11 Jan 2022",
      readTime: "5 min read",
    },
    {
      id: 2,
      image: "/placeholder-image-2.png",
      title: "Droits et responsabilités du maître d'ouvrage",
      description:
        "Vous lancez un projet immobilier ? Voici ce que vous devez savoir pour rester en conformité et éviter les litiges.",
      author: "Ronald Richards",
      avatar: "/avatar-image-1.png",
      date: "11 Jan 2022",
      readTime: "5 min read",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="container max-w-[1160px] mx-auto px-4">
        <div className="flex items-end justify-between gap-2.5 w-full mb-10">
          <div className="flex flex-col items-start gap-5 flex-1">
            <h2 className="self-stretch [font-family:'Neulis_Alt-Regular',Helvetica] font-normal text-[#1e1e1e] text-4xl">
              Apprenez, explorez, restez à jour
            </h2>
            <p className="self-stretch [font-family:'Sofia_Pro-Light',Helvetica] font-light text-[#1e1e1e] text-base leading-5">
              Retrouvez nos conseils, actualités et guides pour réussir tous vos
              projets.
            </p>
          </div>

          <Button variant="ghost" className="h-10 gap-3 pl-0 pr-2 py-0">
            <span className="[font-family:'Sofia_Pro-Regular',Helvetica] font-normal text-[#1e1e1e] text-base leading-6 whitespace-nowrap">
              Lire le blog Archim&apos;aide
            </span>
            <div className="flex w-8 h-8 items-center justify-center bg-[#f7e1aa] rounded-full">
              <ArrowRightIcon className="w-5 h-5 text-black" />
            </div>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="border-none shadow-none">
              <CardContent className="p-0">
                <div className="flex flex-col gap-7">
                  <img
                    className="w-full h-[380px] object-cover"
                    alt="Blog post featured image"
                    src={post.image}
                  />

                  <div className="flex flex-col gap-2">
                    <h3 className="font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-[#483621] text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] [font-style:var(--heading-h3-font-style)]">
                      {post.title}
                    </h3>
                    <p className="[font-family:'Sofia_Pro-Light',Helvetica] font-light text-[#1e1e1e] text-base leading-5">
                      {post.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={post.avatar} alt="Author avatar" />
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="[font-family:'Sofia_Pro-Regular',Helvetica] font-normal text-[#cd9f25] text-lg leading-7">
                        {post.author}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="[font-family:'Sofia_Pro-Regular',Helvetica] font-normal text-[#6d6d6d] text-xs leading-4">
                          {post.date}
                        </span>
                        <span className="[font-family:'Sofia_Pro-Regular',Helvetica] font-normal text-[#6d6d6d] text-xs leading-4">
                          •
                        </span>
                        <span className="[font-family:'Sofia_Pro-Regular',Helvetica] font-normal text-[#6d6d6d] text-xs leading-4">
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

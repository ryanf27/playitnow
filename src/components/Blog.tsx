import React from "react";

import { BlogPost } from "@/types";
import Image from "next/image";

const blogPosts: BlogPost[] = [
  {
    title: "ESP Guitars Launches the New LTD EC-1000 Deluxe",
    date: "Jul 16, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1532543639288-75370b72d9e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxlcyUyMHBhdWwlMjBndWl0YXJ8ZW58MHx8MHx8fDA%3D",
    link: "https://prsguitars.com/blog/post/turn_heads_with_the_se_swamp_ash_ce_24_sandblasted_limited_edition",
    altText: "ESP Guitars Launches the New LTD EC-1000 Deluxe",
  },
  {
    title: "From the Factory Floor: How a PRS Neck Is Made",
    date: "Jul 11, 2024",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1677697323616-904e181b585b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGd1dGFyJTIwbHV0aGllcnxlbnwwfHwwfHx8MA%3D%3D",
    link: "https://prsguitars.com/blog/post/from_the_factory_floor_how_a_prs_neck_is_made",
    altText: "From the Factory Floor: How a PRS Neck Is Made",
  },
  {
    title:
      "Berlin's Ultimate Rock Music Fest Unleashes Electrifying Performances",
    date: "Jul 09, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1533137098665-47ca60257cec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZlc3RpdmFsJTIwbXVzaWN8ZW58MHx8MHx8fDA%3D",
    link: "https://prsguitars.com/blog/post/we_challenged_prs_employees_to_answer_a_quiz_question",
    altText:
      "Berlin's Ultimate Rock Music Fest Unleashes Electrifying Performances",
  },
  {
    title: "Virtual Jams: How VR is Revolutionizing the Music Experience",
    date: "Jun 24, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1466428996289-fb355538da1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMGluJTIwbXVzaWN8ZW58MHx8MHx8fDA%3D",
    link: "https://prsguitars.com/blog/post/celebrating_make_music_day_with_the_release_of_pauls_perfect_pour",
    altText: "Virtual Jams: How VR is Revolutionizing the Music Experience",
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="max-w-screen-2xl mx-auto my-20 px-4">
      <h2 className="text-center text-4xl mb-8">Latest News</h2>
      <div className="flex flex-wrap -mx-2">
        {blogPosts.map((post, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-2 mb-8">
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <a href={post.link}>
                <Image
                  width={500}
                  height={300}
                  src={post.imageUrl}
                  alt={post.altText}
                  className="w-full h-48 object-cover"
                />
              </a>
              <div className="p-4 text-white">
                <h3 className="text-lg font-bold leading-snug mb-2">
                  <a href={post.link} className="hover:underline">
                    {post.title}
                  </a>
                </h3>
                <p className="text-gray-400 text-sm">{post.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <a
          href="/blog/"
          className="bg-gold hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-6 rounded-md transition-colors duration-300"
        >
          Visit
        </a>
      </div>
    </section>
  );
};

export default BlogSection;

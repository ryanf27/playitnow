import React from "react";

interface BlogPost {
  title: string;
  date: string;
  imageUrl: string;
  link: string;
  altText: string;
}

const blogPosts: BlogPost[] = [
  {
    title:
      'Turn Heads With the SE Swamp Ash CE 24 "Sandblasted" Limited Edition',
    date: "Jul 16, 2024",
    imageUrl:
      "https://d2zap0z9ahyacn.cloudfront.net/eyJidWNrZXQiOiJwcnNpbWFnZXMiLCJrZXkiOiJibG9nL3NlX2NlMjRfc2FuZGJsYXN0ZWRfMTkyMHgxMjgwLmpwZy5qcGVnIiwiZWRpdHMiOnsianBlZyI6eyJxdWFsaXR5Ijo4MiwicHJvZ3Jlc3NpdmUiOnRydWUsInRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pemVTY2FucyI6dHJ1ZX0sInJlc2l6ZSI6eyJ3aWR0aCI6MTkyMCwiaGVpZ2h0IjoxMjgwLCJmaXQiOiJjb3ZlciJ9LCJzaGFycGVuIjp0cnVlfX0=",
    link: "https://prsguitars.com/blog/post/turn_heads_with_the_se_swamp_ash_ce_24_sandblasted_limited_edition",
    altText:
      'Turn Heads With the SE Swamp Ash CE 24 "Sandblasted" Limited Edition',
  },
  {
    title: "From the Factory Floor: How a PRS Neck Is Made",
    date: "Jul 11, 2024",
    imageUrl:
      "https://d2zap0z9ahyacn.cloudfront.net/eyJidWNrZXQiOiJwcnNpbWFnZXMiLCJrZXkiOiJibG9nL2JldGgtYmxvZy5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjgyLCJwcm9ncmVzc2l2ZSI6dHJ1ZSwidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWl6ZVNjYW5zIjp0cnVlfSwicmVzaXplIjp7IndpZHRoIjoxOTIwLCJoZWlnaHQiOjEyODAsImZpdCI6ImNvdmVyIn0sInNoYXJwZW4iOnRydWV9fQ==",
    link: "https://prsguitars.com/blog/post/from_the_factory_floor_how_a_prs_neck_is_made",
    altText: "From the Factory Floor: How a PRS Neck Is Made",
  },
  {
    title: "We Challenged PRS Employees to Answer A Quiz Question!",
    date: "Jul 09, 2024",
    imageUrl:
      "https://d2zap0z9ahyacn.cloudfront.net/eyJidWNrZXQiOiJwcnNpbWFnZXMiLCJrZXkiOiJibG9nL1NFX0RHVF9MaWZlc3R5bGUtMS5KUEcuanBlZyIsImVkaXRzIjp7ImpwZWciOnsicXVhbGl0eSI6ODIsInByb2dyZXNzaXZlIjp0cnVlLCJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXplU2NhbnMiOnRydWV9LCJyZXNpemUiOnsid2lkdGgiOjE5MjAsImhlaWdodCI6MTI4MiwiZml0IjoiY292ZXIifSwic2hhcnBlbiI6dHJ1ZX19",
    link: "https://prsguitars.com/blog/post/we_challenged_prs_employees_to_answer_a_quiz_question",
    altText: "We Challenged PRS Employees to Answer A Quiz Question!",
  },
  {
    title: "Celebrating Make Music Day With the Release of Paul's Perfect Pour",
    date: "Jun 24, 2024",
    imageUrl:
      "https://d2zap0z9ahyacn.cloudfront.net/eyJidWNrZXQiOiJwcnNpbWFnZXMiLCJrZXkiOiJibG9nL1BQUF9Ib3Jpem9udGFsLmpwZy5qcGVnIiwiZWRpdHMiOnsianBlZyI6eyJxdWFsaXR5Ijo4MiwicHJvZ3Jlc3NpdmUiOnRydWUsInRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pemVTY2FucyI6dHJ1ZX0sInJlc2l6ZSI6eyJ3aWR0aCI6MTkyMCwiaGVpZ2h0IjoxMjc5LCJmaXQiOiJjb3ZlciJ9LCJzaGFycGVuIjp0cnVlfX0=",
    link: "https://prsguitars.com/blog/post/celebrating_make_music_day_with_the_release_of_pauls_perfect_pour",
    altText:
      "Celebrating Make Music Day With the Release of Paul's Perfect Pour",
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="max-w-screen-2xl mx-auto my-20 px-4">
      <h2 className="text-center font-extrabold text-4xl uppercase mb-8">
        Latest News
      </h2>
      <div className="flex flex-wrap -mx-2">
        {blogPosts.map((post, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-2 mb-8">
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <a href={post.link}>
                <img
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
          className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-6 rounded-md transition-colors duration-300"
        >
          Visit
        </a>
      </div>
    </section>
  );
};

export default BlogSection;

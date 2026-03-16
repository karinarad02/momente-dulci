import { blogPosts } from "../data/posts";

export default function Blog() {
  return (
    <section className="bg-purple-50 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center text-purple-700 mb-12">
          Blog Cofetărie
        </h1>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold mb-3 text-purple-700">
                {post.title}
              </h2>
              <p className="text-gray-700">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

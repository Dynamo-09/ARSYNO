import { useParams, Link } from 'react-router-dom';
import { blogs } from '../data/blogData';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const blog = blogs.find(b => b.id === id);

  if (!blog) {
    return (
      <div className="pt-32 pb-20 text-center min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-navy-900 mb-4">Blog Post Not Found</h1>
        <Link to="/blog" className="text-techblue hover:underline">Return to Blog</Link>
      </div>
    );
  }

  const relatedBlogs = blogs.filter(b => b.id !== id).slice(0, 3);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Blog Header */}
      <div className="bg-gray-200 pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <span>{blog.category}</span>
            <span>|</span>
            <span>Accounting</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
            {blog.title}
          </h1>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-10 rounded-lg overflow-hidden border-2 border-navy-900 shadow-lg">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-auto object-cover max-h-[500px]"
          />
        </div>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          {blog.content.split('\n').map((paragraph, index) => {
            if (!paragraph.trim()) return null;
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              return <h3 key={index} className="text-xl font-bold text-navy-900 mt-8 mb-4">{paragraph.replace(/\*\*/g, '')}</h3>;
            }
            if (paragraph.match(/^\d+\./)) {
              return <p key={index} className="ml-4 mb-4">{paragraph}</p>;
            }
            return <p key={index} className="mb-6 leading-relaxed">{paragraph}</p>;
          })}
        </div>
      </div>

      {/* Related Articles */}
      <div className="bg-gray-100 py-16 mt-12 border-t border-gray-200">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-12">
          <h2 className="text-3xl font-bold text-black mb-10">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedBlogs.map((relatedBlog) => (
              <div key={relatedBlog.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-56 overflow-hidden border-b-4 border-navy-900">
                  <img 
                    src={relatedBlog.image} 
                    alt={relatedBlog.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {relatedBlog.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-navy-900 mb-3 line-clamp-2">
                    {relatedBlog.title}
                  </h3>
                  <Link 
                    to={`/blog/${relatedBlog.id}`} 
                    className="mt-auto text-orange-500 font-bold text-sm uppercase tracking-wider hover:text-orange-600 transition-colors"
                  >
                    Read More...
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

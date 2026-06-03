import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
    <div className="min-h-screen">
      {/* Blog Header */}
      <div className="pt-32 pb-16 bg-white/40 backdrop-blur-sm border-b border-gray-200/50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto px-6"
        >
          <div className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <span className="text-orange-500 font-bold">{blog.category}</span>
            <span>|</span>
            <span>Accounting</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight">
            {blog.title}
          </h1>
        </motion.div>
      </div>

      {/* Blog Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="max-w-3xl mx-auto px-6 py-12"
      >
        <div className="mb-10 rounded-2xl overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/50 bg-white/70 backdrop-blur-md">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-auto object-cover max-h-[500px]"
          />
        </div>
        
        <div className="prose prose-lg max-w-none text-gray-800 bg-white/70 backdrop-blur-md p-8 sm:p-12 rounded-2xl border border-gray-100 shadow-lg shadow-gray-200/50">
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
      </motion.div>

      {/* Related Articles */}
      <div className="py-16 mt-12 border-t border-gray-200/50 bg-white/30 backdrop-blur-sm">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-navy-900 mb-10 text-center md:text-left"
          >
            Related Articles
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedBlogs.map((relatedBlog, idx) => (
              <motion.div 
                key={relatedBlog.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/70 backdrop-blur-md border border-gray-100 rounded-2xl shadow-lg shadow-gray-200/50 overflow-hidden flex flex-col h-full hover:border-techblue/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden border-b-4 border-navy-900">
                  <img 
                    src={relatedBlog.image} 
                    alt={relatedBlog.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow-md">
                    {relatedBlog.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-navy-900 mb-3 line-clamp-2">
                    {relatedBlog.title}
                  </h3>
                  <Link 
                    to={`/blog/${relatedBlog.id}`} 
                    className="mt-auto text-orange-500 font-bold text-sm uppercase tracking-wider hover:text-orange-600 transition-colors inline-block w-fit"
                  >
                    Read More...
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

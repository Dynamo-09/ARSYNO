import { Link } from 'react-router-dom';
import { blogs } from '../data/blogData';

export default function Blog() {
  return (
    <div className="pt-28 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4 tracking-tight">Our <span className="text-techblue">Blog</span></h1>
          <p className="text-lg text-gray-600 max-w-2xl font-medium">
            Insights, news, and perspectives to help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white/70 backdrop-blur-md border border-gray-100 rounded-2xl shadow-lg shadow-gray-200/50 overflow-hidden flex flex-col h-full hover:border-techblue/30 transition-all duration-300 group cursor-pointer">
              <div className="relative h-64 overflow-hidden border-b-4 border-navy-900">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {blog.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-navy-900 mb-3 line-clamp-2">
                  {blog.title}
                </h2>
                <Link 
                  to={`/blog/${blog.id}`} 
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
  );
}

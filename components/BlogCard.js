function BlogCard({ image, title, excerpt, date, category, slug }) {
  const { Link } = ReactRouterDOM;

  return (
    <div className="blog-card bg-white rounded-lg shadow-md overflow-hidden" data-id="e7k91xcuj" data-path="components/BlogCard.js">
            <div className="relative overflow-hidden" style={{ height: '200px' }} data-id="4w2a6jyqn" data-path="components/BlogCard.js">
                <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110" data-id="4jucrwmg9" data-path="components/BlogCard.js" />

                <div className="absolute top-0 right-0 bg-accent-blue text-white text-xs font-bold px-3 py-1" data-id="mq4peu9z2" data-path="components/BlogCard.js">
                    {category}
                </div>
            </div>
            
            <div className="p-5" data-id="md27szsdw" data-path="components/BlogCard.js">
                <div className="text-gray-500 text-sm mb-2" data-id="y3emp0krg" data-path="components/BlogCard.js">
                    <i className="far fa-calendar-alt mr-2" data-id="30ck2j6kj" data-path="components/BlogCard.js"></i> {date}
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-3 hover:text-accent-blue transition-colors" data-id="ztnuk0yn1" data-path="components/BlogCard.js">
                    <Link to={`/blog/${slug}`}>{title}</Link>
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3" data-id="j6alatbdi" data-path="components/BlogCard.js">{excerpt}</p>
                
                <Link
          to={`/blog/${slug}`}
          className="inline-block text-accent-blue font-semibold hover:text-primary">

                    Read More <i className="fas fa-arrow-right ml-1" data-id="2e2bhf832" data-path="components/BlogCard.js"></i>
                </Link>
            </div>
        </div>);

}
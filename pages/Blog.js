function Blog() {
  const { useState } = React;

  const [filter, setFilter] = useState('all');

  const blogPosts = [
  {
    id: 1,
    title: "10 Web Development Trends to Watch in 2023",
    excerpt: "Stay ahead of the curve with the latest web development technologies and methodologies that are shaping the digital landscape in 2023.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, at fermentum nulla ultrices. Integer commodo sem nec tincidunt auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec at urna et mi hendrerit gravida vel eget enim.",
    date: "June 15, 2023",
    author: "David Chen",
    category: "Technology Trends",
    tags: ["web development", "trends", "technology"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    slug: "web-development-trends-2023"
  },
  {
    id: 2,
    title: "How to Improve Your Website's Load Time",
    excerpt: "Discover practical techniques to optimize your website's performance and reduce load times for better user experience and SEO rankings.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, at fermentum nulla ultrices. Integer commodo sem nec tincidunt auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec at urna et mi hendrerit gravida vel eget enim.",
    date: "May 28, 2023",
    author: "Sarah Johnson",
    category: "Web Development",
    tags: ["performance", "optimization", "web development"],
    image: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    slug: "improve-website-load-time"
  },
  {
    id: 3,
    title: "Essential Cybersecurity Measures for Small Businesses",
    excerpt: "Learn about the critical security steps small businesses should implement to protect their data and systems from cyber threats.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, at fermentum nulla ultrices. Integer commodo sem nec tincidunt auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec at urna et mi hendrerit gravida vel eget enim.",
    date: "May 12, 2023",
    author: "Michael Torres",
    category: "Data Security",
    tags: ["cybersecurity", "small business", "data protection"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    slug: "cybersecurity-small-businesses"
  },
  {
    id: 4,
    title: "The Role of AI in Modern Business Operations",
    excerpt: "Explore how artificial intelligence is transforming business processes and creating new opportunities for efficiency and innovation.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, at fermentum nulla ultrices. Integer commodo sem nec tincidunt auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec at urna et mi hendrerit gravida vel eget enim.",
    date: "April 30, 2023",
    author: "Jessica Lee",
    category: "Digital Transformation",
    tags: ["AI", "business", "innovation"],
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    slug: "ai-in-business-operations"
  },
  {
    id: 5,
    title: "Python vs. JavaScript: Choosing the Right Language for Your Project",
    excerpt: "A comprehensive comparison of Python and JavaScript to help you decide which programming language best suits your development needs.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, at fermentum nulla ultrices. Integer commodo sem nec tincidunt auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec at urna et mi hendrerit gravida vel eget enim.",
    date: "April 15, 2023",
    author: "Robert Kim",
    category: "Python Programming",
    tags: ["python", "javascript", "programming"],
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    slug: "python-vs-javascript"
  },
  {
    id: 6,
    title: "Building a Successful E-commerce Strategy",
    excerpt: "Key considerations and best practices for developing an effective e-commerce strategy that drives sales and enhances customer experience.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, at fermentum nulla ultrices. Integer commodo sem nec tincidunt auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec at urna et mi hendrerit gravida vel eget enim.",
    date: "March 28, 2023",
    author: "Emily Wilson",
    category: "Web Development",
    tags: ["e-commerce", "strategy", "business"],
    image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    slug: "ecommerce-strategy"
  }];


  const categories = [
  "Technology Trends",
  "Web Development",
  "Data Security",
  "Digital Transformation",
  "Python Programming"];


  const filteredPosts = filter === 'all' ?
  blogPosts :
  blogPosts.filter((post) => post.category === filter);

  return (
    <div data-id="tc8lyarfv" data-path="pages/Blog.js">
            {/* Page Header */}
            <section className="gradient-primary py-20 md:py-28 relative" data-id="2mirh9tmr" data-path="pages/Blog.js">
                <div className="container mx-auto px-4 relative z-10" data-id="qlqlniyxf" data-path="pages/Blog.js">
                    <div className="max-w-3xl mx-auto text-center text-white" data-id="rb14t6onb" data-path="pages/Blog.js">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6" data-id="c07f78o1v" data-path="pages/Blog.js">Our Blog</h1>
                        <p className="text-xl text-gray-200" data-id="rulb6iasb" data-path="pages/Blog.js">
                            Insights, tips, and updates from the world of technology
                        </p>
                    </div>
                </div>
                <div className="absolute inset-0 bg-black opacity-10" data-id="jr8xpezdj" data-path="pages/Blog.js"></div>
            </section>
            
            {/* Blog Content */}
            <section className="py-16 md:py-24" data-id="5nicp1d9x" data-path="pages/Blog.js">
                <div className="container mx-auto px-4" data-id="cbuylcyfb" data-path="pages/Blog.js">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" data-id="4wcs9815h" data-path="pages/Blog.js">
                        {/* Main Content */}
                        <div className="lg:col-span-8" data-id="uks1kob3o" data-path="pages/Blog.js">
                            {/* Category Filter Pills */}
                            <div className="flex flex-wrap gap-3 mb-10" data-id="fet43hpew" data-path="pages/Blog.js">
                                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'all' ?
                  'bg-primary text-white' :
                  'bg-gray-200 text-gray-800 hover:bg-gray-300'}`
                  } data-id="uuo8znds3" data-path="pages/Blog.js">

                                    All Categories
                                </button>
                                {categories.map((category, index) =>
                <button
                  key={index}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category ?
                  'bg-primary text-white' :
                  'bg-gray-200 text-gray-800 hover:bg-gray-300'}`
                  } data-id="hp0boxzhc" data-path="pages/Blog.js">

                                        {category}
                                    </button>
                )}
                            </div>
                            
                            {/* Blog Posts */}
                            <div className="grid grid-cols-1 gap-10" data-id="sjzdim94t" data-path="pages/Blog.js">
                                {filteredPosts.map((post) =>
                <BlogCard
                  key={post.id}
                  image={post.image}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  category={post.category}
                  slug={post.slug} />

                )}
                            </div>
                        </div>
                        
                        {/* Sidebar */}
                        <div className="lg:col-span-4" data-id="uvj2u92nh" data-path="pages/Blog.js">
                            {/* Search */}
                            <div className="bg-white rounded-lg shadow-md p-6 mb-8" data-id="3u1mldkgw" data-path="pages/Blog.js">
                                <h3 className="text-lg font-bold text-primary mb-4" data-id="jnrlf5o40" data-path="pages/Blog.js">Search</h3>
                                <div className="flex items-center" data-id="9ejumud4f" data-path="pages/Blog.js">
                                    <input
                    type="text"
                    placeholder="Search blog posts..."
                    className="w-full rounded-l-lg border-gray-300 focus:ring-0 focus:outline-none focus:border-accent-blue py-2 px-4" data-id="nhdjebd93" data-path="pages/Blog.js" />

                                    <button className="bg-primary text-white py-2 px-4 rounded-r-lg hover:bg-accent-blue" data-id="hsc348bpa" data-path="pages/Blog.js">
                                        <i className="fas fa-search" data-id="vrq8v6h20" data-path="pages/Blog.js"></i>
                                    </button>
                                </div>
                            </div>
                            
                            {/* Categories */}
                            <div className="bg-white rounded-lg shadow-md p-6 mb-8" data-id="0rqsobr8u" data-path="pages/Blog.js">
                                <h3 className="text-lg font-bold text-primary mb-4" data-id="22xbi51lb" data-path="pages/Blog.js">Categories</h3>
                                <ul className="space-y-2" data-id="8xsltewx4" data-path="pages/Blog.js">
                                    {categories.map((category, index) =>
                  <li key={index} className="flex items-center justify-between" data-id="glc473w92" data-path="pages/Blog.js">
                                            <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setFilter(category);
                      }}
                      className="text-gray-600 hover:text-accent-blue" data-id="b05fv9qpo" data-path="pages/Blog.js">

                                                {category}
                                            </a>
                                            <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-xs" data-id="k3qzgt66f" data-path="pages/Blog.js">
                                                {blogPosts.filter((post) => post.category === category).length}
                                            </span>
                                        </li>
                  )}
                                </ul>
                            </div>
                            
                            {/* Recent Posts */}
                            <div className="bg-white rounded-lg shadow-md p-6 mb-8" data-id="20uyv31bu" data-path="pages/Blog.js">
                                <h3 className="text-lg font-bold text-primary mb-4" data-id="11zjfkjlf" data-path="pages/Blog.js">Recent Posts</h3>
                                <ul className="space-y-4" data-id="cbgiw2190" data-path="pages/Blog.js">
                                    {blogPosts.slice(0, 3).map((post) =>
                  <li key={post.id} className="flex items-start space-x-3" data-id="zrjp6hwna" data-path="pages/Blog.js">
                                            <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0" data-id="x0fem06dz" data-path="pages/Blog.js">
                                                <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover" data-id="s1nzmg4h2" data-path="pages/Blog.js" />

                                            </div>
                                            <div data-id="9selloypr" data-path="pages/Blog.js">
                                                <h4 className="font-medium text-primary hover:text-accent-blue line-clamp-2" data-id="lpyt8qeve" data-path="pages/Blog.js">
                                                    <a href={`/blog/${post.slug}`} data-id="drtwpv5j2" data-path="pages/Blog.js">{post.title}</a>
                                                </h4>
                                                <p className="text-xs text-gray-500" data-id="op8uwgxbl" data-path="pages/Blog.js">{post.date}</p>
                                            </div>
                                        </li>
                  )}
                                </ul>
                            </div>
                            
                            {/* Tags */}
                            <div className="bg-white rounded-lg shadow-md p-6" data-id="wdb1ldcpm" data-path="pages/Blog.js">
                                <h3 className="text-lg font-bold text-primary mb-4" data-id="bo98bkmzn" data-path="pages/Blog.js">Popular Tags</h3>
                                <div className="flex flex-wrap gap-2" data-id="pzk5qu3hn" data-path="pages/Blog.js">
                                    {Array.from(new Set(blogPosts.flatMap((post) => post.tags))).map((tag, index) =>
                  <a
                    key={index}
                    href="#"
                    className="bg-gray-200 text-gray-700 hover:bg-primary hover:text-white px-3 py-1 rounded-full text-sm" data-id="ejkxfyx63" data-path="pages/Blog.js">

                                            {tag}
                                        </a>
                  )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Newsletter */}
            <section className="py-16 bg-gray-50" data-id="c2dbn0gf1" data-path="pages/Blog.js">
                <div className="container mx-auto px-4" data-id="zvbwj9vdv" data-path="pages/Blog.js">
                    <div className="max-w-3xl mx-auto" data-id="8hq7t507p" data-path="pages/Blog.js">
                        <NewsletterForm />
                    </div>
                </div>
            </section>
        </div>);

}
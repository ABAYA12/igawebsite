function Blog() {
  const { useState } = React;

  const [filter, setFilter] = useState('all');

  const blogPosts = [
  {
    id: 1,
    title: "5 Dashboard Metrics Every Business Leader Should Track",
    excerpt: "Learn how the right KPIs in your executive dashboards can drive smarter decisions and improve visibility.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, at fermentum nulla ultrices. Integer commodo sem nec tincidunt auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec at urna et mi hendrerit gravida vel eget enim.",
    date: "June 15, 2023",
    author: "David Chen",
    category: "Business Intelligence",
    tags: ["BI dashboards", "KPI", "reporting", "analytics"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    slug: "dashboard-metrics-business-leaders"
  },
  {
    id: 2,
    title: "Building Reliable Data Pipelines: Tools and Best Practices",
    excerpt: "A guide to building robust data pipelines using Python, SQL, and modern ETL frameworks.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, at fermentum nulla ultrices. Integer commodo sem nec tincidunt auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec at urna et mi hendrerit gravida vel eget enim.",
    date: "May 28, 2023",
    author: "Sarah Johnson",
    category: "Data Infrastructure",
    tags: ["data engineering", "ETL", "analytics", "data quality"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    slug: "building-reliable-data-pipelines"
  },
  {
    id: 3,
    title: "Forecasting Business Performance with Historical Data",
    excerpt: "How to apply time series forecasting and trend modeling to anticipate future outcomes.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, at fermentum nulla ultrices. Integer commodo sem nec tincidunt auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec at urna et mi hendrerit gravida vel eget enim.",
    date: "May 12, 2023",
    author: "Michael Torres",
    category: "Forecasting & Predictive Models",
    tags: ["forecasting", "machine learning", "analytics", "data engineering"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    slug: "forecasting-business-performance"
  },
  {
    id: 4,
    title: "Common Data Quality Issues and How to Fix Them",
    excerpt: "Real-world examples of data integrity challenges and strategies to resolve them.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, at fermentum nulla ultrices. Integer commodo sem nec tincidunt auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec at urna et mi hendrerit gravida vel eget enim.",
    date: "April 30, 2023",
    author: "Jessica Lee",
    category: "Data Strategy & Governance",
    tags: ["data quality", "governance", "ETL", "reporting"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    slug: "data-quality-issues-solutions"
  },
  {
    id: 5,
    title: "What Is a Modern Data Stack? Explained Simply",
    excerpt: "An introduction to modern analytics architecture and how businesses can benefit from tools like dbt, Snowflake, and Airbyte.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, at fermentum nulla ultrices. Integer commodo sem nec tincidunt auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec at urna et mi hendrerit gravida vel eget enim.",
    date: "April 15, 2023",
    author: "Robert Kim",
    category: "Analytics Engineering",
    tags: ["data engineering", "BI dashboards", "analytics", "data quality"],
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    slug: "modern-data-stack-explained"
  }];


  const categories = [
  "Business Intelligence",
  "Data Infrastructure",
  "Forecasting & Predictive Models",
  "Data Strategy & Governance",
  "Analytics Engineering"];


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
                            Insights, stories, and practical guidance in analytics, data strategy, and intelligent systems.
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
function Portfolio() {
  const { useState } = React;

  const [filter, setFilter] = useState('all');

  const projects = [
  {
    id: 1,
    title: "Executive Sales Dashboard",
    category: "Business Intelligence",
    tags: ["dashboards", "bi"],
    description: "A comprehensive executive dashboard providing real-time sales KPIs, revenue tracking, and performance analytics.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    client: "TechCorp Solutions",
    challenge: "Creating a unified view of sales performance across multiple regions and product lines for executive decision-making.",
    solution: "Developed an interactive Power BI dashboard with real-time data integration, drill-down capabilities, and automated reporting.",
    results: "50% faster executive reporting, improved sales forecasting accuracy, and better strategic decision-making."
  },
  {
    id: 2,
    title: "Customer Analytics Platform",
    category: "Data Engineering",
    tags: ["data", "analytics"],
    description: "A scalable data platform consolidating customer data from multiple touchpoints for comprehensive analytics.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    client: "RetailMax Inc.",
    challenge: "Integrating customer data from e-commerce, in-store, and marketing channels to create a 360-degree customer view.",
    solution: "Built a cloud-based data warehouse with automated ETL pipelines, data quality monitoring, and real-time analytics.",
    results: "40% improvement in customer segmentation accuracy, 25% increase in marketing ROI, and faster insights delivery."
  },
  {
    id: 3,
    title: "Financial Forecasting Model",
    category: "Predictive Analytics",
    tags: ["modeling", "forecasting"],
    description: "Advanced forecasting models for revenue prediction and budget planning using machine learning techniques.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    client: "FinanceFirst Corp",
    challenge: "Improving financial forecasting accuracy to support better budget planning and strategic investments.",
    solution: "Implemented machine learning models using historical data, market indicators, and seasonality patterns.",
    results: "30% improvement in forecast accuracy, reduced budget variance, and enhanced strategic planning capabilities."
  },
  {
    id: 4,
    title: "Supply Chain Analytics",
    category: "Business Analytics",
    tags: ["analytics", "operations"],
    description: "Comprehensive supply chain analytics solution for inventory optimization and demand forecasting.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    client: "LogiFlow Systems",
    challenge: "Optimizing inventory levels and reducing supply chain costs while maintaining service levels.",
    solution: "Developed analytics models for demand forecasting, inventory optimization, and supplier performance tracking.",
    results: "20% reduction in inventory costs, 15% improvement in service levels, and better supplier relationships."
  },
  {
    id: 5,
    title: "Healthcare Performance Dashboard",
    category: "Dashboards & Reports",
    tags: ["dashboards", "healthcare"],
    description: "Real-time healthcare performance dashboard tracking patient outcomes, operational efficiency, and quality metrics.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    client: "MediCare Hospital Group",
    challenge: "Providing healthcare administrators with real-time visibility into operational performance and patient outcomes.",
    solution: "Created interactive Tableau dashboards with automated data refresh, alerting systems, and mobile accessibility.",
    results: "25% reduction in administrative time, improved patient care coordination, and enhanced operational efficiency."
  },
  {
    id: 6,
    title: "Marketing Attribution Analysis",
    category: "Data Infrastructure",
    tags: ["data", "marketing"],
    description: "Multi-touch attribution system tracking customer journey across digital channels for marketing optimization.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    client: "DigitalGrowth Agency",
    challenge: "Understanding the complete customer journey and attributing conversions to the right marketing channels.",
    solution: "Built a data pipeline integrating multiple marketing platforms with advanced attribution modeling.",
    results: "35% improvement in marketing spend efficiency, better channel optimization, and increased ROI tracking."
  }];


  const filteredProjects = filter === 'all' ?
  projects :
  projects.filter((project) => project.tags.includes(filter));

  return (
    <div data-id="u2y5ee6c2" data-path="pages/Portfolio.js">
            {/* Page Header */}
            <section className="gradient-primary py-20 md:py-28 relative" data-id="2sfq436er" data-path="pages/Portfolio.js">
                <div className="container mx-auto px-4 relative z-10" data-id="6tgr728l2" data-path="pages/Portfolio.js">
                    <div className="max-w-3xl mx-auto text-center text-white" data-id="wqg1q5ng5" data-path="pages/Portfolio.js">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6" data-id="mophat2q0" data-path="pages/Portfolio.js">Featured Projects</h1>
                        <p className="text-xl text-gray-200" data-id="e0hso00cy" data-path="pages/Portfolio.js">
                            Explore select projects focused on data systems, reporting dashboards, analytics automation, and business intelligence. Delivered across sectors such as finance, insurance, retail, and development programs.
                        </p>
                    </div>
                </div>
                <div className="absolute inset-0 bg-black opacity-10" data-id="l77d2abah" data-path="pages/Portfolio.js"></div>
            </section>
            
            {/* Portfolio Gallery */}
            <section className="py-16 md:py-24" data-id="o8x31fxms" data-path="pages/Portfolio.js">
                <div className="container mx-auto px-4" data-id="bzurxwshh" data-path="pages/Portfolio.js">
                    <div className="max-w-3xl mx-auto text-center mb-16" data-id="rdf2267qo" data-path="pages/Portfolio.js">
                        <h2 className="text-3xl font-bold text-primary mb-6" data-id="jiq77x1cd" data-path="pages/Portfolio.js">Featured Projects</h2>
                        <p className="text-lg text-gray-600 mb-8" data-id="dr8oc97gr" data-path="pages/Portfolio.js">
                            Browse through our collection of successful data projects delivered for clients across various industries.
                        </p>
                        
                        {/* Filter Buttons */}
                        <div className="flex flex-wrap justify-center gap-4 mb-8" data-id="kph1z2j62" data-path="pages/Portfolio.js">
                            <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'all' ?
                'bg-primary text-white' :
                'bg-gray-200 text-gray-800 hover:bg-gray-300'}`
                } data-id="z1xd7btj1" data-path="pages/Portfolio.js">

                                All Projects
                            </button>
                            <button
                onClick={() => setFilter('dashboards')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'dashboards' ?
                'bg-primary text-white' :
                'bg-gray-200 text-gray-800 hover:bg-gray-300'}`
                } data-id="h229t3xfb" data-path="pages/Portfolio.js">

                                Dashboards & Reports
                            </button>
                            <button
                onClick={() => setFilter('data')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'data' ?
                'bg-primary text-white' :
                'bg-gray-200 text-gray-800 hover:bg-gray-300'}`
                } data-id="qpj2cd3py" data-path="pages/Portfolio.js">

                                Data Infrastructure
                            </button>
                            <button
                onClick={() => setFilter('analytics')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'analytics' ?
                'bg-primary text-white' :
                'bg-gray-200 text-gray-800 hover:bg-gray-300'}`
                } data-id="kar411jj6" data-path="pages/Portfolio.js">

                                Business Analytics Projects
                            </button>
                            <button
                onClick={() => setFilter('modeling')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'modeling' ?
                'bg-primary text-white' :
                'bg-gray-200 text-gray-800 hover:bg-gray-300'}`
                } data-id="lrhkznt8j" data-path="pages/Portfolio.js">

                                API/Data Integrations
                            </button>
                        </div>
                    </div>
                    
                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-id="w6jmv4vt7" data-path="pages/Portfolio.js">
                        {filteredProjects.map((project) =>
            <PortfolioCard
              key={project.id}
              image={project.image}
              title={project.title}
              category={project.category}
              description={project.description} />

            )}
                    </div>
                </div>
            </section>
            
            {/* Case Studies */}
            <section className="py-16 md:py-24 bg-gray-50" data-id="7remo8qg6" data-path="pages/Portfolio.js">
                <div className="container mx-auto px-4" data-id="o123z4079" data-path="pages/Portfolio.js">
                    <div className="max-w-3xl mx-auto text-center mb-16" data-id="41dilmau4" data-path="pages/Portfolio.js">
                        <h2 className="text-3xl font-bold text-primary mb-6" data-id="ysxdouiyl" data-path="pages/Portfolio.js">Case Studies</h2>
                        <p className="text-lg text-gray-600" data-id="btkntn4bl" data-path="pages/Portfolio.js">
                            Detailed insights into selected projects, highlighting challenges, solutions, and results
                        </p>
                    </div>
                    
                    <div className="space-y-16" data-id="wg3h3echc" data-path="pages/Portfolio.js">
                        {projects.slice(0, 3).map((project, index) =>
            <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden" data-id="h2rdz0bzu" data-path="pages/Portfolio.js">
                                <div className="grid grid-cols-1 lg:grid-cols-5" data-id="w86skrn00" data-path="pages/Portfolio.js">
                                    <div className="lg:col-span-2" data-id="2rx563hm2" data-path="pages/Portfolio.js">
                                        <div className="h-full" data-id="8cu53pvx1" data-path="pages/Portfolio.js">
                                            <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      style={{ minHeight: '300px' }} data-id="y0j8i8612" data-path="pages/Portfolio.js" />

                                        </div>
                                    </div>
                                    
                                    <div className="lg:col-span-3 p-8" data-id="45oe5m8cp" data-path="pages/Portfolio.js">
                                        <div className="flex flex-wrap gap-2 mb-4" data-id="hm8asaysk" data-path="pages/Portfolio.js">
                                            <span className="inline-block bg-primary text-white text-xs px-3 py-1 rounded-full" data-id="ndv2j3a42" data-path="pages/Portfolio.js">
                                                {project.category}
                                            </span>
                                            {project.tags.map((tag, i) =>
                    <span key={i} className="inline-block bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full" data-id="k52ebdu1g" data-path="pages/Portfolio.js">
                                                    {tag}
                                                </span>
                    )}
                                        </div>
                                        
                                        <h3 className="text-2xl font-bold text-primary mb-2" data-id="vs90xxrxk" data-path="pages/Portfolio.js">{project.title}</h3>
                                        <p className="text-gray-500 mb-6" data-id="xnpbvsye0" data-path="pages/Portfolio.js">Client: {project.client}</p>
                                        
                                        <div className="space-y-4 mb-6" data-id="f3iprajhb" data-path="pages/Portfolio.js">
                                            <div data-id="to5p0wk4u" data-path="pages/Portfolio.js">
                                                <h4 className="text-lg font-semibold text-primary mb-2" data-id="w3hqw1gro" data-path="pages/Portfolio.js">The Challenge</h4>
                                                <p className="text-gray-600" data-id="emde2qwln" data-path="pages/Portfolio.js">{project.challenge}</p>
                                            </div>
                                            
                                            <div data-id="l55x162we" data-path="pages/Portfolio.js">
                                                <h4 className="text-lg font-semibold text-primary mb-2" data-id="qii9ovhn2" data-path="pages/Portfolio.js">Our Solution</h4>
                                                <p className="text-gray-600" data-id="l8s3ne2vq" data-path="pages/Portfolio.js">{project.solution}</p>
                                            </div>
                                            
                                            <div data-id="oamn6btpk" data-path="pages/Portfolio.js">
                                                <h4 className="text-lg font-semibold text-primary mb-2" data-id="ri51wrnns" data-path="pages/Portfolio.js">The Results</h4>
                                                <p className="text-gray-600" data-id="oesgwlqyw" data-path="pages/Portfolio.js">{project.results}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
            )}
                    </div>
                </div>
            </section>
            
            {/* Call to Action */}
            <section className="gradient-primary py-16 md:py-20 text-white" data-id="ui8dgl2bv" data-path="pages/Portfolio.js">
                <div className="container mx-auto px-4" data-id="epe31s9ht" data-path="pages/Portfolio.js">
                    <div className="max-w-3xl mx-auto text-center" data-id="5u44nfli0" data-path="pages/Portfolio.js">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6" data-id="0hvis4k0s" data-path="pages/Portfolio.js">Ready to Build Your Next Project?</h2>
                        <p className="text-xl text-gray-200 mb-8" data-id="l5exbtrjv" data-path="pages/Portfolio.js">
                            Let's discuss how we can help bring your ideas to life with our expertise and solutions.
                        </p>
                        <a
              href="/contact"
              className="btn bg-white text-primary font-bold py-3 px-8 rounded-full hover:bg-accent-blue hover:text-white inline-block" data-id="bhzlhq6zw" data-path="pages/Portfolio.js">

                            Start Your Project
                        </a>
                    </div>
                </div>
            </section>
        </div>);

}
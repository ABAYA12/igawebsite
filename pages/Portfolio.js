function Portfolio() {
  const { useState } = React;

  const [filter, setFilter] = useState('all');

  const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    tags: ["website", "e-commerce"],
    description: "A feature-rich e-commerce platform with integrated payment gateways, inventory management, and customer analytics.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    client: "FashionHub",
    challenge: "Creating a scalable e-commerce solution that provides a seamless shopping experience across all devices.",
    solution: "Developed a responsive website with optimized product pages, secure payment integration, and a user-friendly admin dashboard.",
    results: "50% increase in online sales, 30% reduction in cart abandonment, and improved customer satisfaction."
  },
  {
    id: 2,
    title: "Financial Management App",
    category: "Application Development",
    tags: ["application", "finance"],
    description: "A comprehensive financial management application for personal and small business expense tracking and budgeting.",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    client: "BudgetWise",
    challenge: "Building an intuitive finance app that simplifies complex financial tracking and provides actionable insights.",
    solution: "Created a cross-platform application with expense categorization, budget forecasting, and customizable financial reports.",
    results: "Over 10,000 downloads in the first month, with users reporting an average of 15% savings on monthly expenses."
  },
  {
    id: 3,
    title: "Educational Platform Redesign",
    category: "Website Design",
    tags: ["website", "education", "design"],
    description: "A complete redesign of an educational platform to improve user experience and content accessibility.",
    image: "https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    client: "LearnQuest Academy",
    challenge: "Transforming an outdated educational website into a modern, engaging learning platform.",
    solution: "Implemented a clean, intuitive design with improved navigation, multimedia content integration, and mobile compatibility.",
    results: "70% increase in user engagement, 45% longer session duration, and positive feedback from students and educators."
  },
  {
    id: 4,
    title: "Restaurant Branding Package",
    category: "Graphic Design",
    tags: ["graphic", "branding"],
    description: "A comprehensive branding package including logo design, menu layouts, signage, and marketing materials.",
    image: "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwdmlzdWFsbHklMjBhcHBlYWxpbmclMjBpbWFnZSUyMHNob3djYXNpbmclMjBhJTIwcmVzdGF1cmFudCUyMGJyYW5kaW5nJTIwcGFja2FnZSUyQyUyMGluY2x1ZGluZyUyMGxvZ28lMjBkZXNpZ24lMkMlMjBtZW51JTIwbGF5b3V0cyUyQyUyMHNpZ25hZ2UlMkMlMjBhbmQlMjBtYXJrZXRpbmclMjBtYXRlcmlhbHMufGVufDB8fHx8MTc0NjYyNDM1N3ww&ixlib=rb-4.1.0&q=80&w=200$w=1350",
    client: "Savory Bistro",
    challenge: "Creating a distinctive brand identity that reflects the restaurant's unique fusion cuisine and upscale atmosphere.",
    solution: "Designed a cohesive branding package with a sophisticated color palette, custom typography, and elegant visual elements.",
    results: "Successful brand launch with strong visual recognition, positive press coverage, and increased customer foot traffic."
  },
  {
    id: 5,
    title: "Inventory Management System",
    category: "Python Programming",
    tags: ["python", "data"],
    description: "A custom inventory management system with real-time tracking, predictive ordering, and detailed analytics.",
    image: "https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    client: "GlobalSupply Inc.",
    challenge: "Developing an efficient inventory system to replace manual processes and reduce stock discrepancies.",
    solution: "Built a Python-based solution with barcode integration, automated reorder points, and comprehensive reporting features.",
    results: "40% reduction in inventory costs, 60% decrease in stockouts, and improved supply chain efficiency."
  },
  {
    id: 6,
    title: "Healthcare Data Integration",
    category: "Data Engineering",
    tags: ["data", "healthcare"],
    description: "A data integration solution that consolidates patient information from multiple systems into a unified dashboard.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    client: "MediCare Hospital Group",
    challenge: "Integrating disparate healthcare data systems to provide a complete view of patient information for improved care.",
    solution: "Implemented a secure data warehouse with ETL processes, real-time sync capabilities, and HIPAA-compliant access controls.",
    results: "25% reduction in administrative time, improved diagnostic accuracy, and enhanced patient care coordination."
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
                        <h1 className="text-4xl md:text-5xl font-bold mb-6" data-id="mophat2q0" data-path="pages/Portfolio.js">Our Portfolio</h1>
                        <p className="text-xl text-gray-200" data-id="e0hso00cy" data-path="pages/Portfolio.js">
                            Showcasing our work across various industries and technologies
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
                            Browse through our collection of successful projects delivered for clients across various industries.
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
                onClick={() => setFilter('website')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'website' ?
                'bg-primary text-white' :
                'bg-gray-200 text-gray-800 hover:bg-gray-300'}`
                } data-id="h229t3xfb" data-path="pages/Portfolio.js">

                                Websites
                            </button>
                            <button
                onClick={() => setFilter('application')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'application' ?
                'bg-primary text-white' :
                'bg-gray-200 text-gray-800 hover:bg-gray-300'}`
                } data-id="qpj2cd3py" data-path="pages/Portfolio.js">

                                Applications
                            </button>
                            <button
                onClick={() => setFilter('design')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'design' ?
                'bg-primary text-white' :
                'bg-gray-200 text-gray-800 hover:bg-gray-300'}`
                } data-id="kar411jj6" data-path="pages/Portfolio.js">

                                Design
                            </button>
                            <button
                onClick={() => setFilter('data')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'data' ?
                'bg-primary text-white' :
                'bg-gray-200 text-gray-800 hover:bg-gray-300'}`
                } data-id="lrhkznt8j" data-path="pages/Portfolio.js">

                                Data Solutions
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
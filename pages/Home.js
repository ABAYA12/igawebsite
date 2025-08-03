function Home() {
  const { Link } = ReactRouterDOM;

  const services = [
  {
    icon: "fas fa-chart-bar",
    title: "Business Intelligence Dashboards",
    description: "Executive-ready dashboards and reports with clear KPIs and interactive analytics. Built with Power BI, Tableau, or Looker Studio."
  },
  {
    icon: "fas fa-cogs",
    title: "Data Engineering & Automation",
    description: "Clean, scalable pipelines and structured storage (SQL, Python ETL, cloud platforms). Ensure data quality, flow, and performance."
  },
  {
    icon: "fas fa-lightbulb",
    title: "Analytics Strategy & Consulting",
    description: "Data audits, architecture reviews, and analytics roadmaps to support smarter business decisions."
  },
  {
    icon: "fas fa-brain",
    title: "Predictive Insights & Modeling",
    description: "Advanced analysis including forecasting, segmentation, fraud detection, and operational modeling."
  }
];



  const testimonials = [
  
  {
    content: "We've been working with InsightGrid Analytics for over two years, and they continue to impress us with their technical expertise and data-driven solutions.",
    name: "Amina Diallo",
    role: "CEO",
    company: "Horizon Ventures",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }];


  return (
    <div data-id="539lu1an8" data-path="pages/Home.js">
            {/* Hero Section */}
            <Hero />
            
            {/* Intro Section */}
            <section className="py-16 md:py-24" data-id="zi1ahy4ym" data-path="pages/Home.js">
                <div className="container mx-auto px-4" data-id="jpfhgkaof" data-path="pages/Home.js">
                    <div className="max-w-3xl mx-auto text-center" data-id="vyytpsodp" data-path="pages/Home.js">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6" data-id="3ldnerk1y" data-path="pages/Home.js">Welcome to InsightGrid Analytics</h2>
                        <p className="text-lg text-gray-600 mb-10" data-id="sy3wx84q4" data-path="pages/Home.js">
                            InsightGrid Analytics is a modern data consulting and engineering firm helping businesses structure, analyze, and act on their data. We focus on scalable solutions—dashboards, data pipelines, forecasting models, and strategic reporting—that support decision-making and business growth.
                        </p>
                        <Link
              to="/about"
              className="btn bg-primary text-white py-3 px-8 rounded-full hover:bg-accent-blue inline-block">

                            Learn More About Us
                        </Link>
                    </div>
                </div>
            </section>
            
            {/* Services Section */}
            <section className="py-16 md:py-24 bg-gray-50" data-id="x8jj2aud1" data-path="pages/Home.js">
                <div className="container mx-auto px-4" data-id="le0mp93rd" data-path="pages/Home.js">
                    <div className="max-w-3xl mx-auto text-center mb-16" data-id="bf3ucsym9" data-path="pages/Home.js">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6" data-id="ruzfwi02j" data-path="pages/Home.js">Our Services</h2>
                        <p className="text-lg text-gray-600" data-id="8ywk4p4sz" data-path="pages/Home.js">
                            We offer comprehensive data solutions designed to help your business thrive through intelligent decision-making.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-id="bl009whbd" data-path="pages/Home.js">
                        {services.map((service, index) =>
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description} />

            )}
                    </div>
                    
                    <div className="text-center mt-12" data-id="7he18s9g5" data-path="pages/Home.js">
                        <Link
              to="/services"
              className="btn bg-primary text-white py-3 px-8 rounded-full hover:bg-accent-blue inline-block">

                            View All Services
                        </Link>
                    </div>
                </div>
            </section>
            
            {/* About Section */}
            <section className="py-16 md:py-24" data-id="6iahylm3s" data-path="pages/Home.js">
                <div className="container mx-auto px-4" data-id="0m0j939am" data-path="pages/Home.js">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-id="ouiag5hs4" data-path="pages/Home.js">
                        <div data-id="s0dmgrr65" data-path="pages/Home.js">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 section-title" data-id="1lamg3sz4" data-path="pages/Home.js">About Us</h2>
                            <p className="text-gray-600 mb-6" data-id="y8zvk0n66" data-path="pages/Home.js">
                                InsightGrid Analytics is a modern data consulting and engineering firm helping businesses structure, analyze, and act on their data. We focus on scalable solutions—dashboards, data pipelines, forecasting models, and strategic reporting—that support decision-making and business growth.
                            </p>
                            <div className="mb-8" data-id="oyjkvui5c" data-path="pages/Home.js">
                                <h3 className="text-xl font-bold text-primary mb-3" data-id="2atrqgpbv" data-path="pages/Home.js">Our Mission</h3>
                                <p className="text-gray-600" data-id="4t3t4wcy7" data-path="pages/Home.js">
                                    Empower organizations with intelligent, actionable data systems that support long-term performance.
                                </p>
                            </div>
                            <div className="mb-8" data-id="2bva0qymq" data-path="pages/Home.js">
                                <h3 className="text-xl font-bold text-primary mb-3" data-id="c227rdsgq" data-path="pages/Home.js">Our Vision</h3>
                                <p className="text-gray-600" data-id="2nh1faixl" data-path="pages/Home.js">
                                    To become a trusted partner for organizations seeking clarity and structure in how they use their data.
                                </p>
                            </div>
                            <Link
                to="/about"
                className="btn bg-primary text-white py-3 px-8 rounded-full hover:bg-accent-blue inline-block">

                                More About Us
                            </Link>
                        </div>
                        <div className="relative" data-id="fvg9cm8uu" data-path="pages/Home.js">
                            <div className="bg-accent-purple rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-xl" data-id="zjqok3etk" data-path="pages/Home.js">
                                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="InsightGrid Analytics Team"
                  className="w-full h-full object-cover" data-id="kljorhx8j" data-path="pages/Home.js" />

                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-accent-blue p-6 rounded-tl-3xl rounded-br-3xl text-white" data-id="jx97t6z0h" data-path="pages/Home.js">
                                <div className="text-2xl font-bold mb-1" data-id="486xv683e" data-path="pages/Home.js">4+</div>
                                <div className="text-sm" data-id="ukja54ulk" data-path="pages/Home.js">Years of Experience</div>
                            </div>
                            <div className="absolute -top-6 -right-6 bg-primary p-6 rounded-tl-3xl rounded-br-3xl text-white" data-id="a7e958k5h" data-path="pages/Home.js">
                                <div className="text-2xl font-bold mb-1" data-id="dyktf7lqb" data-path="pages/Home.js">70+</div>
                                <div className="text-sm" data-id="v1d5vmcyn" data-path="pages/Home.js">Satisfied Clients</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Testimonials Section */}
            <section className="py-16 md:py-24 gradient-primary text-white" data-id="op9c9o2t3" data-path="pages/Home.js">
                <div className="container mx-auto px-4" data-id="nkpjck025" data-path="pages/Home.js">
                    <div className="max-w-3xl mx-auto text-center mb-16" data-id="vf7aoghvc" data-path="pages/Home.js">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6" data-id="hk679mfte" data-path="pages/Home.js">What Our Clients Say</h2>
                        <p className="text-lg text-gray-200" data-id="c286447c3" data-path="pages/Home.js">
                            Don't just take our word for it. Hear what our clients have to say about working with InsightGrid Analytics.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-id="yaiowhw24" data-path="pages/Home.js">
                        {testimonials.map((testimonial, index) =>
            <TestimonialCard
              key={index}
              content={testimonial.content}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              image={testimonial.image} />

            )}
                    </div>
                </div>
            </section>
            
            {/* Contact & Newsletter Section */}
            <section className="py-16 md:py-24 bg-gray-50" data-id="bq0b94ry3" data-path="pages/Home.js">
                <div className="container mx-auto px-4" data-id="xtf77c9ja" data-path="pages/Home.js">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-id="i20fyvujw" data-path="pages/Home.js">
                        <ContactForm />
                        
                        <div className="flex flex-col justify-center" data-id="4p9goh8n4" data-path="pages/Home.js">
                            <div className="mb-8" data-id="ke4gxe9rj" data-path="pages/Home.js">
                                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 section-title" data-id="3meg56ida" data-path="pages/Home.js">Get in Touch</h2>
                                <p className="text-gray-600 mb-8" data-id="mrhk3me4s" data-path="pages/Home.js">
                                    Get in touch with InsightGrid Analytics today. We'll help you unlock the power of your data.
                                </p>
                                
                                <div className="space-y-4" data-id="ynr1qgb9n" data-path="pages/Home.js">
                                    <div className="flex items-start space-x-4" data-id="4n8rk284i" data-path="pages/Home.js">
                                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0" data-id="b1tqu131c" data-path="pages/Home.js">
                                            <i className="fas fa-phone-alt" data-id="9vt2iyhn4" data-path="pages/Home.js"></i>
                                        </div>
                                        <div data-id="83elslphc" data-path="pages/Home.js">
                                            <h3 className="text-lg font-semibold text-primary" data-id="ycuq1whcp" data-path="pages/Home.js">Phone/WhatsApp</h3>
                                            <p className="text-gray-600" data-id="f9z61jpxf" data-path="pages/Home.js">+233243069237</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start space-x-4" data-id="q0fou8hml" data-path="pages/Home.js">
                                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0" data-id="oij0ifbyd" data-path="pages/Home.js">
                                            <i className="fas fa-envelope" data-id="xmdbtsndf" data-path="pages/Home.js"></i>
                                        </div>
                                        <div data-id="izolppubp" data-path="pages/Home.js">
                                            <h3 className="text-lg font-semibold text-primary" data-id="y35tp4jsk" data-path="pages/Home.js">Email Address</h3>
                                            <p className="text-gray-600" data-id="2cjtgwf43" data-path="pages/Home.js">hello@insightgridanalytic.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <NewsletterForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>);

}
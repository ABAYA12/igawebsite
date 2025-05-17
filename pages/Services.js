function Services() {
  const services = [
  {
    id: 1,
    icon: "fas fa-laptop-code",
    title: "Website Development",
    description: "Custom, responsive websites tailored to your brand and business goals. Optimized for performance, search engines, and conversion.",
    features: [
    "Responsive design for all devices",
    "SEO optimization",
    "Content management systems",
    "E-commerce functionality",
    "Custom web applications",
    "Website maintenance & support"],

    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 2,
    icon: "fas fa-mobile-alt",
    title: "Mobile or Application Development",
    description: "Custom applications that automate processes and solve business challenges across web, mobile, and desktop platforms.",
    features: [
    "Web applications",
    "Mobile apps (iOS & Android)",
    "Desktop applications",
    "Cross-platform development",
    "API integration",
    "Maintenance & updates"],

    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 3,
    icon: "fas fa-palette",
    title: "Web Design",
    description: "Visually stunning designs with intuitive user experiences that drive action and strengthen your brand.",
    features: [
    "UI/UX design",
    "Wireframing & prototyping",
    "Landing page design",
    "Responsive web design",
    "Design systems",
    "Usability testing"],

    image: "https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 4,
    icon: "fas fa-pencil-ruler",
    title: "Graphic Design",
    description: "Compelling visual content from logos to marketing materials that effectively communicates your brand message.",
    features: [
    "Logo & brand identity",
    "Marketing materials",
    "Social media graphics",
    "Infographics",
    "Print design",
    "Packaging design"],

    image: "https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 5,
    icon: "fab fa-python",
    title: "Python (Backend) Programming",
    description: "Efficient, scalable solutions for data analysis, automation, web applications, and more.",
    features: [
    "Web development (Django, Flask)",
    "Data analysis & visualization",
    "Machine learning & AI",
    "Process automation",
    "API development",
    "Custom Python solutions"],

    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },

  {id: 6,
    icon: "fas fa-chart-line",
    title: "Data Analytics Service",
    description: "Transforming raw data into actionable insights to drive business decisions and strategies.",
    features: [
    "Data collection & cleaning",
    "Statistical analysis",
    "Predictive modeling",
    "Data visualization",
    "Business intelligence dashboards",
    "Custom analytics solutions"],

    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"

  },
  {
    id: 7,
    icon: "fas fa-database",
    title: "Data Engineering",
    description: "Robust data infrastructures transforming raw data into valuable business insights.",
    features: [
    "Database design & optimization",
    "ETL process development",
    "Data warehousing",
    "Business intelligence",
    "Big data solutions",
    "Data visualization"],

    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }];


  return (
    <div data-id="bqaga0ys8" data-path="pages/Services.js">
            {/* Page Header */}
            <section className="gradient-primary py-20 md:py-28 relative" data-id="kzw16zyzu" data-path="pages/Services.js">
                <div className="container mx-auto px-4 relative z-10" data-id="xu7exfsfv" data-path="pages/Services.js">
                    <div className="max-w-3xl mx-auto text-center text-white" data-id="i4kyodfpf" data-path="pages/Services.js">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6" data-id="hut481jg2" data-path="pages/Services.js">Our Services</h1>
                        <p className="text-xl text-gray-200" data-id="l3y8bmmw9" data-path="pages/Services.js">
                            Comprehensive IT solutions designed to help your business thrive
                        </p>
                    </div>
                </div>
                <div className="absolute inset-0 bg-black opacity-10" data-id="r70ywjgtv" data-path="pages/Services.js"></div>
            </section>
            
            {/* Services Overview */}
            <section className="py-16 md:py-24" data-id="ca5rx2hev" data-path="pages/Services.js">
                <div className="container mx-auto px-4" data-id="a6qugfci1" data-path="pages/Services.js">
                    <div className="max-w-3xl mx-auto text-center mb-16" data-id="qser8c6r5" data-path="pages/Services.js">
                        <h2 className="text-3xl font-bold text-primary mb-6" data-id="17gtc37zx" data-path="pages/Services.js">How We Can Help Your Business</h2>
                        <p className="text-lg text-gray-600" data-id="pfrj01yhh" data-path="pages/Services.js">
                            At KabuTech, we offer a wide range of IT services designed to help your business grow, 
                            improve efficiency, and stay competitive in today's digital landscape.
                        </p>
                    </div>
                    
                    <div className="space-y-24" data-id="urym7vz86" data-path="pages/Services.js">
                        {services.map((service, index) =>
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`} data-id="a7pbwv9kj" data-path="pages/Services.js">

                                <div className={index % 2 !== 0 ? 'lg:order-2' : ''} data-id="vfrksmxl3" data-path="pages/Services.js">
                                    <div className="flex items-center mb-4" data-id="3tb6tjkci" data-path="pages/Services.js">
                                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl mr-4" data-id="h4txsdh6c" data-path="pages/Services.js">
                                            <i className={service.icon} data-id="ihtq15tbf" data-path="pages/Services.js"></i>
                                        </div>
                                        <h3 className="text-2xl font-bold text-primary" data-id="ckpigq8as" data-path="pages/Services.js">{service.title}</h3>
                                    </div>
                                    
                                    <p className="text-gray-600 mb-6" data-id="ilcg9xppu" data-path="pages/Services.js">{service.description}</p>
                                    
                                    <h4 className="text-lg font-semibold text-primary mb-4" data-id="z97n9wer0" data-path="pages/Services.js">Key Features:</h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8" data-id="pslvqab2b" data-path="pages/Services.js">
                                        {service.features.map((feature, i) =>
                  <li key={i} className="flex items-start" data-id="45avwhphn" data-path="pages/Services.js">
                                                <i className="fas fa-check-circle text-accent-blue mt-1 mr-2" data-id="c8aj6oqiv" data-path="pages/Services.js"></i>
                                                <span data-id="hmwzbfyfr" data-path="pages/Services.js">{feature}</span>
                                            </li>
                  )}
                                    </ul>
                                    
                                    <a
                  href="/contact"
                  className="btn bg-primary text-white py-3 px-8 rounded-full hover:bg-accent-blue inline-block" data-id="uea8xquag" data-path="pages/Services.js">

                                        Inquire About This Service
                                    </a>
                                </div>
                                
                                <div className={`rounded-lg overflow-hidden shadow-xl ${index % 2 !== 0 ? 'lg:order-1' : ''}`} data-id="3x440pbfz" data-path="pages/Services.js">
                                    <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover" data-id="2olvz7cjg" data-path="pages/Services.js" />

                                </div>
                            </div>
            )}
                    </div>
                </div>
            </section>
            
            {/* Process Section */}
            <section className="py-16 md:py-24 bg-gray-50" data-id="kiy49dqme" data-path="pages/Services.js">
                <div className="container mx-auto px-4" data-id="k2bmg6ieo" data-path="pages/Services.js">
                    <div className="max-w-3xl mx-auto text-center mb-16" data-id="gx1ic1e33" data-path="pages/Services.js">
                        <h2 className="text-3xl font-bold text-primary mb-6" data-id="c1n774khr" data-path="pages/Services.js">Our Process</h2>
                        <p className="text-lg text-gray-600" data-id="wl5lzrc6x" data-path="pages/Services.js">
                            We follow a structured approach to ensure the successful delivery of every project
                        </p>
                    </div>
                    
                    <div className="relative" data-id="0egvvysd3" data-path="pages/Services.js">
                        {/* Process Timeline */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary" data-id="ifhpq3vbt" data-path="pages/Services.js"></div>
                        
                        <div className="space-y-8 md:space-y-0 relative" data-id="mwts3ms8i" data-path="pages/Services.js">
                            {/* Step 1 */}
                            <div className="md:flex items-center justify-between mb-16" data-id="6xwep6cly" data-path="pages/Services.js">
                                <div className="md:w-5/12 text-right mb-8 md:mb-0" data-id="hh7cwvsx5" data-path="pages/Services.js">
                                    <h3 className="text-xl font-bold text-primary mb-3" data-id="6fb5sd5r7" data-path="pages/Services.js">Discovery & Analysis</h3>
                                    <p className="text-gray-600" data-id="niww5f3c9" data-path="pages/Services.js">
                                        We begin by understanding your business, goals, and challenges to define the scope of your project.
                                    </p>
                                </div>
                                
                                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-accent-blue text-white text-center leading-10 font-bold z-10" data-id="4z4nrrcl7" data-path="pages/Services.js">
                                    1
                                </div>
                                
                                <div className="md:w-5/12" data-id="62hw4bilx" data-path="pages/Services.js">
                                    <div className="bg-white p-6 rounded-lg shadow-md" data-id="u1uucqzj5" data-path="pages/Services.js">
                                        <ul className="text-gray-600 space-y-2" data-id="6s3nkkrzr" data-path="pages/Services.js">
                                            <li className="flex items-start" data-id="hyxydj0lp" data-path="pages/Services.js">
                                                <i className="fas fa-angle-right text-accent-blue mr-2 mt-1" data-id="vqpe26ygt" data-path="pages/Services.js"></i>
                                                <span data-id="qbzij04j0" data-path="pages/Services.js">Initial consultation</span>
                                            </li>
                                            <li className="flex items-start" data-id="h8ijg6usu" data-path="pages/Services.js">
                                                <i className="fas fa-angle-right text-accent-blue mr-2 mt-1" data-id="u0db0tztm" data-path="pages/Services.js"></i>
                                                <span data-id="ay59b7a0r" data-path="pages/Services.js">Requirements gathering</span>
                                            </li>
                                            <li className="flex items-start" data-id="tg6s5y2nc" data-path="pages/Services.js">
                                                <i className="fas fa-angle-right text-accent-blue mr-2 mt-1" data-id="uuphly16l" data-path="pages/Services.js"></i>
                                                <span data-id="l7ey87uz5" data-path="pages/Services.js">Business needs analysis</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Step 2 */}
                            <div className="md:flex items-center justify-between mb-16 flex-row-reverse" data-id="3pklwy5ov" data-path="pages/Services.js">
                                <div className="md:w-5/12 mb-8 md:mb-0" data-id="swj0mcaoj" data-path="pages/Services.js">
                                    <h3 className="text-xl font-bold text-primary mb-3" data-id="dhwnkjbta" data-path="pages/Services.js">Planning & Strategy</h3>
                                    <p className="text-gray-600" data-id="c01ivtuyt" data-path="pages/Services.js">
                                        We develop a detailed project plan and strategy tailored to meet your specific needs and objectives.
                                    </p>
                                </div>
                                
                                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-accent-blue text-white text-center leading-10 font-bold z-10" data-id="4ovuehl9r" data-path="pages/Services.js">
                                    2
                                </div>
                                
                                <div className="md:w-5/12" data-id="lxp1tgfyh" data-path="pages/Services.js">
                                    <div className="bg-white p-6 rounded-lg shadow-md" data-id="t2teni48w" data-path="pages/Services.js">
                                        <ul className="text-gray-600 space-y-2" data-id="xc6l32m4m" data-path="pages/Services.js">
                                            <li className="flex items-start" data-id="g58ggydbb" data-path="pages/Services.js">
                                                <i className="fas fa-angle-right text-accent-blue mr-2 mt-1" data-id="ddwt69w1b" data-path="pages/Services.js"></i>
                                                <span data-id="zu19g1ud7" data-path="pages/Services.js">Solution design</span>
                                            </li>
                                            <li className="flex items-start" data-id="v0li9d5fj" data-path="pages/Services.js">
                                                <i className="fas fa-angle-right text-accent-blue mr-2 mt-1" data-id="ddcnpbd71" data-path="pages/Services.js"></i>
                                                <span data-id="g3dlojx7t" data-path="pages/Services.js">Project roadmap</span>
                                            </li>
                                            <li className="flex items-start" data-id="vjm0bd4bx" data-path="pages/Services.js">
                                                <i className="fas fa-angle-right text-accent-blue mr-2 mt-1" data-id="ozfey3ywf" data-path="pages/Services.js"></i>
                                                <span data-id="z9olnz5ln" data-path="pages/Services.js">Resource allocation</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Step 3 */}
                            <div className="md:flex items-center justify-between mb-16" data-id="qnmfau1vh" data-path="pages/Services.js">
                                <div className="md:w-5/12 text-right mb-8 md:mb-0" data-id="8ma7g1gu9" data-path="pages/Services.js">
                                    <h3 className="text-xl font-bold text-primary mb-3" data-id="uy51fxmef" data-path="pages/Services.js">Design & Development</h3>
                                    <p className="text-gray-600" data-id="sg37knr3k" data-path="pages/Services.js">
                                        Our team brings your project to life through creative design and expert development.
                                    </p>
                                </div>
                                
                                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-accent-blue text-white text-center leading-10 font-bold z-10" data-id="u1oqaa5kk" data-path="pages/Services.js">
                                    3
                                </div>
                                
                                <div className="md:w-5/12" data-id="sdmril5xr" data-path="pages/Services.js">
                                    <div className="bg-white p-6 rounded-lg shadow-md" data-id="hbkiyyd14" data-path="pages/Services.js">
                                        <ul className="text-gray-600 space-y-2" data-id="nbcoitzae" data-path="pages/Services.js">
                                            <li className="flex items-start" data-id="v06450f5w" data-path="pages/Services.js">
                                                <i className="fas fa-angle-right text-accent-blue mr-2 mt-1" data-id="umifaqesu" data-path="pages/Services.js"></i>
                                                <span data-id="6v0nijpe7" data-path="pages/Services.js">Wireframing & prototyping</span>
                                            </li>
                                            <li className="flex items-start" data-id="38q8f9obk" data-path="pages/Services.js">
                                                <i className="fas fa-angle-right text-accent-blue mr-2 mt-1" data-id="g14593vea" data-path="pages/Services.js"></i>
                                                <span data-id="nlktlqghe" data-path="pages/Services.js">Visual design</span>
                                            </li>
                                            <li className="flex items-start" data-id="4xjz4mo5k" data-path="pages/Services.js">
                                                <i className="fas fa-angle-right text-accent-blue mr-2 mt-1" data-id="pw8r4ti0e" data-path="pages/Services.js"></i>
                                                <span data-id="sx89nusii" data-path="pages/Services.js">Development & coding</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Step 4 */}
                            <div className="md:flex items-center justify-between mb-16 flex-row-reverse" data-id="p6awiuslw" data-path="pages/Services.js">
                                <div className="md:w-5/12 mb-8 md:mb-0" data-id="l9wrxor9j" data-path="pages/Services.js">
                                    <h3 className="text-xl font-bold text-primary mb-3" data-id="8ykfbsro3" data-path="pages/Services.js">Testing & Quality Assurance</h3>
                                    <p className="text-gray-600" data-id="ta1zfpwz0" data-path="pages/Services.js">
                                        We thoroughly test all aspects of your project to ensure optimal performance and user experience.
                                    </p>
                                </div>
                                
                                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-accent-blue text-white text-center leading-10 font-bold z-10" data-id="82tg2byc0" data-path="pages/Services.js">
                                    4
                                </div>
                                
                                <div className="md:w-5/12" data-id="09gv0ser7" data-path="pages/Services.js">
                                    <div className="bg-white p-6 rounded-lg shadow-md" data-id="l89qox5ic" data-path="pages/Services.js">
                                        <ul className="text-gray-600 space-y-2" data-id="r0qjy29pj" data-path="pages/Services.js">
                                            <li className="flex items-start" data-id="r98mto19k" data-path="pages/Services.js">
                                                <i className="fas fa-angle-right text-accent-blue mr-2 mt-1" data-id="3d5lba8ls" data-path="pages/Services.js"></i>
                                                <span data-id="o86pzuiro" data-path="pages/Services.js">Functionality testing</span>
                                            </li>
                                            <li className="flex items-start" data-id="ma55qtta9" data-path="pages/Services.js">
                                                <i className="fas fa-angle-right text-accent-blue mr-2 mt-1" data-id="sqqwx2nab" data-path="pages/Services.js"></i>
                                                <span data-id="ct0vhz6jz" data-path="pages/Services.js">Compatibility testing</span>
                                            </li>
                                            <li className="flex items-start" data-id="27qxaeni9" data-path="pages/Services.js">
                                                <i className="fas fa-angle-right text-accent-blue mr-2 mt-1" data-id="zu5rsopci" data-path="pages/Services.js"></i>
                                                <span data-id="s1fw66qa3" data-path="pages/Services.js">Performance optimization</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Step 5 */}
                            <div className="md:flex items-center justify-between" data-id="47xeb3aij" data-path="pages/Services.js">
                                <div className="md:w-5/12 text-right mb-8 md:mb-0" data-id="db7zsqzlk" data-path="pages/Services.js">
                                    <h3 className="text-xl font-bold text-primary mb-3" data-id="iozlhaaob" data-path="pages/Services.js">Deployment & Support</h3>
                                    <p className="text-gray-600" data-id="53qo6ecki" data-path="pages/Services.js">
                                        We launch your project and provide ongoing support to ensure continued success.
                                    </p>
                                </div>
                                
                                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-accent-blue text-white text-center leading-10 font-bold z-10" data-id="15hwsflr9" data-path="pages/Services.js">
                                    5
                                </div>
                                
                                <div className="md:w-5/12" data-id="im901z3am" data-path="pages/Services.js">
                                    <div className="bg-white p-6 rounded-lg shadow-md" data-id="ko54cvqba" data-path="pages/Services.js">
                                        <ul className="text-gray-600 space-y-2" data-id="8sj747nbh" data-path="pages/Services.js">
                                            <li className="flex items-start" data-id="l6mt0bp7m" data-path="pages/Services.js">
                                                <i className="fas fa-angle-right text-accent-blue mr-2 mt-1" data-id="tnwuw70rp" data-path="pages/Services.js"></i>
                                                <span data-id="7x4vor6a8" data-path="pages/Services.js">Implementation & launch</span>
                                            </li>
                                            <li className="flex items-start" data-id="7s2zs1gy2" data-path="pages/Services.js">
                                                <i className="fas fa-angle-right text-accent-blue mr-2 mt-1" data-id="jjyvbb1g9" data-path="pages/Services.js"></i>
                                                <span data-id="yq6yp99vx" data-path="pages/Services.js">Training & documentation</span>
                                            </li>
                                            <li className="flex items-start" data-id="eoqn3a5f5" data-path="pages/Services.js">
                                                <i className="fas fa-angle-right text-accent-blue mr-2 mt-1" data-id="01qqo6ej3" data-path="pages/Services.js"></i>
                                                <span data-id="fikuw9s9y" data-path="pages/Services.js">Ongoing maintenance & support</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Call to Action */}
            <section className="gradient-primary py-16 md:py-20 text-white" data-id="epu6mepd3" data-path="pages/Services.js">
                <div className="container mx-auto px-4" data-id="tq51coqi8" data-path="pages/Services.js">
                    <div className="max-w-3xl mx-auto text-center" data-id="6xc4kk0q3" data-path="pages/Services.js">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6" data-id="128ooeemw" data-path="pages/Services.js">Ready to Start Your Project?</h2>
                        <p className="text-xl text-gray-200 mb-8" data-id="jrkg9j7k0" data-path="pages/Services.js">
                            Contact us today for a free consultation and take the first step towards transforming your business.
                        </p>
                        <a
              href="/contact"
              className="btn bg-white text-primary font-bold py-3 px-8 rounded-full hover:bg-accent-blue hover:text-white inline-block" data-id="9ovs4u4gf" data-path="pages/Services.js">

                            Get a Free Consultation
                        </a>
                    </div>
                </div>
            </section>
        </div>);

}
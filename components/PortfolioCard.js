function PortfolioCard({ image, title, category, description }) {
  const { useState } = React;

  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className="portfolio-card bg-white rounded-lg shadow-md overflow-hidden"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)} data-id="pq1moccik" data-path="components/PortfolioCard.js">

            <div className="relative overflow-hidden" style={{ height: '240px' }} data-id="by7qjnsyu" data-path="components/PortfolioCard.js">
                <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110" data-id="nmlz7wcib" data-path="components/PortfolioCard.js" />

                
                {showDetails &&
        <div className="absolute inset-0 bg-primary bg-opacity-80 flex items-center justify-center p-6 transition-opacity duration-300" data-id="ir16eqrnn" data-path="components/PortfolioCard.js">
                        <div className="text-center text-white" data-id="ir7f3kkrn" data-path="components/PortfolioCard.js">
                            <h3 className="text-xl font-bold mb-2" data-id="owu9vjp60" data-path="components/PortfolioCard.js">{title}</h3>
                            <span className="inline-block bg-accent-blue text-white text-sm px-3 py-1 rounded-full mb-3" data-id="39k4o0k38" data-path="components/PortfolioCard.js">
                                {category}
                            </span>
                            <p className="text-gray-200 text-sm" data-id="o7l1mls6l" data-path="components/PortfolioCard.js">{description}</p>
                            <button className="mt-4 border border-white text-white hover:bg-white hover:text-primary py-2 px-4 rounded-full text-sm transition-colors duration-300" data-id="8fweiwbba" data-path="components/PortfolioCard.js">
                                View Project
                            </button>
                        </div>
                    </div>
        }
            </div>
            
            <div className="p-5" data-id="gjnagbkxl" data-path="components/PortfolioCard.js">
                <h3 className="text-lg font-bold text-primary" data-id="g2unkjful" data-path="components/PortfolioCard.js">{title}</h3>
                <p className="text-gray-500 text-sm" data-id="em6y0xxk9" data-path="components/PortfolioCard.js">{category}</p>
            </div>
        </div>);

}
function ServiceCard({ icon, title, description }) {
  return (
    <div className="service-card bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl" data-id="szuiuf6t0" data-path="components/ServiceCard.js">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl mb-4" data-id="9ej7n7p1e" data-path="components/ServiceCard.js">
                <i className={icon} data-id="00upygqj5" data-path="components/ServiceCard.js"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-primary" data-id="93mo3v7r1" data-path="components/ServiceCard.js">{title}</h3>
            <p className="text-gray-600" data-id="uypujcfat" data-path="components/ServiceCard.js">{description}</p>
        </div>);

}
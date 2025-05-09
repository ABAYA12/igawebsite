function TestimonialCard({ content, name, role, company, image }) {
  return (
    <div className="testimonial-card bg-white rounded-lg shadow-md p-8 relative" data-id="6blru17dj" data-path="components/TestimonialCard.js">
            <div className="mb-6" data-id="7xbet97zf" data-path="components/TestimonialCard.js">
                <div className="flex mb-2" data-id="ju02zwr64" data-path="components/TestimonialCard.js">
                    {[1, 2, 3, 4, 5].map((star) =>
          <i key={star} className="fas fa-star text-yellow-400" data-id="62678cz3o" data-path="components/TestimonialCard.js"></i>
          )}
                </div>
                <p className="text-gray-600 italic" data-id="vzsvh532w" data-path="components/TestimonialCard.js">"{content}"</p>
            </div>
            <div className="flex items-center" data-id="6o3bxixzt" data-path="components/TestimonialCard.js">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4" data-id="do5jbx0in" data-path="components/TestimonialCard.js">
                    <img
            src={image || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
            alt={name}
            className="w-full h-full object-cover" data-id="dok8884g6" data-path="components/TestimonialCard.js" />

                </div>
                <div data-id="1xi508gqt" data-path="components/TestimonialCard.js">
                    <h4 className="font-bold text-primary" data-id="hlnf1edfp" data-path="components/TestimonialCard.js">{name}</h4>
                    <p className="text-sm text-gray-500" data-id="7q6e9wnve" data-path="components/TestimonialCard.js">{role}, {company}</p>
                </div>
            </div>
        </div>);

}
function ContactForm() {
  const { useState } = React;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      submitted: false,
      submitting: true,
      info: { error: false, msg: null }
    });

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Success response
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: 'Message sent successfully!' }
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });

      setTimeout(() => {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: false, msg: null }
        });
      }, 5000);

    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'Something went wrong. Please try again later.' }
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 md:p-8" data-id="jk6f2g4ae" data-path="components/ContactForm.js">
            <h3 className="text-2xl font-bold text-primary mb-6" data-id="1mwi8qc86" data-path="components/ContactForm.js">Get in Touch</h3>
            
            {status.info.msg &&
      <div className={`p-4 rounded mb-6 ${status.info.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`} data-id="67o9325g8" data-path="components/ContactForm.js">
                    {status.info.msg}
                </div>
      }
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-id="7h3tdha0l" data-path="components/ContactForm.js">
                <div data-id="pj58oc36e" data-path="components/ContactForm.js">
                    <label htmlFor="name" className="block text-gray-700 mb-2" data-id="unz6dvrdd" data-path="components/ContactForm.js">Full Name *</label>
                    <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input w-full rounded border-gray-300 focus:ring-0 focus:outline-none"
            placeholder="John Doe" data-id="pefr8b4jk" data-path="components/ContactForm.js" />

                </div>
                
                <div data-id="k4laxkmwz" data-path="components/ContactForm.js">
                    <label htmlFor="email" className="block text-gray-700 mb-2" data-id="gok1wtbws" data-path="components/ContactForm.js">Email Address *</label>
                    <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input w-full rounded border-gray-300 focus:ring-0 focus:outline-none"
            placeholder="john@example.com" data-id="fp8f4vxk1" data-path="components/ContactForm.js" />

                </div>
                
                <div data-id="lax14wuul" data-path="components/ContactForm.js">
                    <label htmlFor="phone" className="block text-gray-700 mb-2" data-id="6shw7apui" data-path="components/ContactForm.js">Phone Number *</label>
                    <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="form-input w-full rounded border-gray-300 focus:ring-0 focus:outline-none"
            placeholder="0249999000" data-id="orb9ab65j" data-path="components/ContactForm.js" />

                </div>
                
                <div data-id="j5qtmk2i6" data-path="components/ContactForm.js">
                    <label htmlFor="company" className="block text-gray-700 mb-2" data-id="nkyg9ou04" data-path="components/ContactForm.js">Company Name</label>
                    <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="form-input w-full rounded border-gray-300 focus:ring-0 focus:outline-none"
            placeholder="Your Company" data-id="h3629y6px" data-path="components/ContactForm.js" />

                </div>
                
                <div className="md:col-span-2" data-id="xfq2rb85n" data-path="components/ContactForm.js">
                    <label htmlFor="service" className="block text-gray-700 mb-2" data-id="r8vv1yh8b" data-path="components/ContactForm.js">Service Interest *</label>
                    <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="form-select w-full rounded border-gray-300 focus:ring-0 focus:outline-none" data-id="0yka5lv64" data-path="components/ContactForm.js">

                        <option value="" data-id="3yk25fyfq" data-path="components/ContactForm.js">Select a service</option>
                        <option value="Business Intelligence Dashboards" data-id="biz-intel" data-path="components/ContactForm.js">Business Intelligence Dashboards</option>
                        <option value="Data Engineering & Automation" data-id="data-eng" data-path="components/ContactForm.js">Data Engineering & Automation</option>
                        <option value="Analytics Strategy & Consulting" data-id="analytics-strategy" data-path="components/ContactForm.js">Analytics Strategy & Consulting</option>
                        <option value="Predictive Insights & Modeling" data-id="predictive-modeling" data-path="components/ContactForm.js">Predictive Insights & Modeling</option>
                        <option value="Data Quality Audits" data-id="data-quality" data-path="components/ContactForm.js">Data Quality Audits</option>
                        <option value="ETL Pipeline Development" data-id="etl-dev" data-path="components/ContactForm.js">ETL Pipeline Development</option>
                        <option value="Custom Dashboard Projects" data-id="custom-dash" data-path="components/ContactForm.js">Custom Dashboard Projects</option>
                        <option value="Other" data-id="other-service" data-path="components/ContactForm.js">Other</option>
                    </select>
                </div>
                
                <div className="md:col-span-2" data-id="br2w18bu0" data-path="components/ContactForm.js">
                    <label htmlFor="message" className="block text-gray-700 mb-2" data-id="1b2yk4jol" data-path="components/ContactForm.js">Message *</label>
                    <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="form-textarea w-full rounded border-gray-300 focus:ring-0 focus:outline-none"
            placeholder="Tell us about your project or inquiry..." data-id="bdoy9ncr4" data-path="components/ContactForm.js">
          </textarea>
                </div>
            </div>
            
            <div className="mt-6" data-id="qpbfrhssa" data-path="components/ContactForm.js">
                <button
          type="submit"
          disabled={status.submitting}
          className="btn bg-primary text-white py-3 px-8 rounded-full hover:bg-accent-blue w-full md:w-auto" data-id="vj1ej1nj3" data-path="components/ContactForm.js">

                    {status.submitting ? 'Sending...' : 'Send Message'}
                </button>
            </div>
        </form>);

}
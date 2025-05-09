function NewsletterForm() {
  const { useState } = React;

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) return;

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
        info: { error: false, msg: 'Subscribed successfully!' }
      });

      setEmail('');

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
    <div className="bg-white shadow-md rounded-lg p-6" data-id="vebj4fsvs" data-path="components/NewsletterForm.js">
            <h3 className="text-xl font-bold text-primary mb-4" data-id="32lxii1mr" data-path="components/NewsletterForm.js">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600 mb-6" data-id="ojdr55wqc" data-path="components/NewsletterForm.js">Stay updated with the latest news, tips, and insights from KabuTech.</p>
            
            {status.info.msg &&
      <div className={`p-3 rounded mb-4 ${status.info.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`} data-id="y16ec1nj1" data-path="components/NewsletterForm.js">
                    {status.info.msg}
                </div>
      }
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3" data-id="azz6misdf" data-path="components/NewsletterForm.js">
                <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          required
          className="form-input flex-grow rounded-full border-gray-300 focus:ring-0 focus:outline-none focus:border-accent-blue py-2 px-4" data-id="3ori70bkk" data-path="components/NewsletterForm.js" />

                <button
          type="submit"
          disabled={status.submitting}
          className="btn bg-primary text-white py-2 px-6 rounded-full hover:bg-accent-blue" data-id="krt28wcjo" data-path="components/NewsletterForm.js">

                    {status.submitting ? 'Subscribing...' : 'Subscribe'}
                </button>
            </form>
        </div>);

}
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        console.error('Error sending email:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black to-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-gold-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to start your next project? Contact us today and let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gold-500/20 rounded-lg">
                <Mail size={24} className="text-gold-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Email</h3>
                <a href="mailto:Info@awareprogramming.online" className="text-gray-400 hover:text-gold-400 transition-colors" data-testid="link-email">
                  Info@awareprogramming.online
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-gold-500/20 rounded-lg">
                <MapPin size={24} className="text-gold-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Address</h3>
                <p className="text-gray-400" data-testid="text-address">
                  Krude Mollevej 20<br />
                  8654 Bryrup<br />
                  Denmark
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-gold-500/20 rounded-lg">
                <Phone size={24} className="text-gold-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">CVR Number</h3>
                <p className="text-gray-400" data-testid="text-cvr-contact">39150514</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-gold-500/20 rounded-lg">
                <Phone size={24} className="text-gold-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Phone Number</h3>
                <a href="tel:201280059860" className="text-gray-400 hover:text-gold-400 transition-colors" data-testid="link-phone">
                  201280059860
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div>
              <label htmlFor="name" className="block text-white font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-900 border border-gold-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-400 transition-colors"
                placeholder="Your name"
                data-testid="input-name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-900 border border-gold-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-400 transition-colors"
                placeholder="your@email.com"
                data-testid="input-email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-slate-900 border border-gold-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-400 transition-colors resize-none"
                placeholder="Your message..."
                data-testid="input-message"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gold-500 hover:bg-gold-600 disabled:bg-gold-400 text-black font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
              data-testid="button-submit-contact"
            >
              {loading ? 'Sending...' : 'Send Message'}
              <Send size={18} />
            </button>

            {submitted && (
              <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 animate-slide-up" data-testid="text-success-message">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

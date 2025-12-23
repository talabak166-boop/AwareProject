import { Mail, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <span className="text-black font-bold">A</span>
              </div>
              <span className="text-white font-bold">Aware Programming</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional programming and business consulting services since 2018.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:vincent.bremer.vuarnoz@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-gold-400 transition-colors text-sm"
                data-testid="link-footer-email"
              >
                <Mail size={16} />
                vincent.bremer.vuarnoz@gmail.com
              </a>
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <div>
                  Krude Mollevej 20<br />
                  8654 Bryrup, Denmark
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gold-500/10 hover:bg-gold-500/20 text-gold-400 transition-colors"
                aria-label="LinkedIn"
                data-testid="link-linkedin"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gold-500/10 hover:bg-gold-500/20 text-gold-400 transition-colors"
                aria-label="GitHub"
                data-testid="link-github"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gold-500/10 hover:bg-gold-500/20 text-gold-400 transition-colors"
                aria-label="Twitter"
                data-testid="link-twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gold-500/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm" data-testid="text-copyright">
              2018-2025 Aware Programming. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-4 md:mt-0" data-testid="text-footer-cvr">
              CVR: 39150514 | Denmark
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}


import { Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-motion-red/20 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* File a Tip */}
          <div>
            <h4 className="font-garamond font-bold text-white text-lg mb-4">
              File a Tip
            </h4>
            <p className="text-motion-light-gray text-sm mb-4">
              Have information about institutional corruption, censorship, or systemic abuse?
            </p>
            <a 
              href="#" 
              className="text-motion-red hover:text-motion-red/80 font-medium transition-colors inline-flex items-center"
            >
              Submit Anonymously →
            </a>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-garamond font-bold text-white text-lg mb-4">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-motion-light-gray hover:text-white transition-colors p-2 hover:bg-motion-gray/10 rounded"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-motion-light-gray hover:text-white transition-colors p-2 hover:bg-motion-gray/10 rounded"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-garamond font-bold text-white text-lg mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Mail size={16} className="text-motion-light-gray mt-1 flex-shrink-0" />
                <a 
                  href="mailto:collective@motiontoindict.org" 
                  className="text-motion-light-gray hover:text-white transition-colors text-sm"
                >
                  collective@motiontoindict.org
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-motion-light-gray mt-1 flex-shrink-0" />
                <p className="text-motion-light-gray text-sm">
                  Various locations across<br />the United States
                </p>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-garamond font-bold text-white text-lg mb-4">
              Legal
            </h4>
            <div className="space-y-2 text-xs text-motion-light-gray">
              <p>
                © 2024 MOTION TO INDICT Collective
              </p>
              <p>
                All research published under Creative Commons Attribution 4.0
              </p>
              <div className="space-y-1 mt-4">
                <a href="#" className="block hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="block hover:text-white transition-colors">
                  Terms of Use
                </a>
                <a href="#" className="block hover:text-white transition-colors">
                  Editorial Standards
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom disclaimer */}
        <div className="border-t border-motion-gray/20 mt-12 pt-8">
          <p className="text-xs text-motion-light-gray text-center max-w-4xl mx-auto leading-relaxed">
            MOTION TO INDICT is an independent research collective. Our work is supported by reader contributions and operates free from institutional funding to maintain editorial independence. Views expressed are those of the research team and do not necessarily reflect those of any affiliated organizations or institutions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


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
              Have a lead, a story, or evidence the public should see?
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
                href="https://www.instagram.com/motion2indict" 
                  target="_blank"
  rel="noopener noreferrer"
                className="text-motion-light-gray hover:text-white transition-colors p-2 hover:bg-motion-gray/10 rounded"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
  href="https://www.linkedin.com/company/motion-to-indict"
  target="_blank"
  rel="noopener noreferrer"
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
                  href="mailto:motiontoindict@gmail.com" 
                  className="text-motion-light-gray hover:text-white transition-colors text-sm"
                >
                  motiontoindict@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-motion-light-gray mt-1 flex-shrink-0" />
                <p className="text-motion-light-gray text-sm">
                  Boston, MA
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
                © 2025 MOTION TO INDICT
              </p>
              <p className="text-[8px] leading-snug">
                MOTION TO INDICT is a student-led research collective committed to critical, impartial analysis. 
                Our findings rely on public records, and all sources are vetted to the best of our ability. 
                This non-commercial work exists to inform public understanding and foster open dialogue, not to defame.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom quote */}
        <div className="border-t border-motion-gray/20 mt-12 pt-8">
          <p className="text-xs text-motion-light-gray text-center max-w-4xl mx-auto leading-relaxed">
            "The truth will set you free, but first it will piss you off." <em> — Gloria Steinem </em>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

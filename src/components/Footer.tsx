const Footer = () => {


  return (
    <footer id="contact" className="bg-white border-t border-gray-200 py-8 text-gray-600 text-sm">
      <div className="container px-3 md:px-12">
        <div className="grid md:grid-cols-4 gap-6 items-center">
          <div className="flex justify-center">
            <img 
              className="h-24 md:h-32 w-auto" 
              src="/Copie de LOGOTYPE [Récupéré]-18.png" 
              alt="DMPLUS ACADEMY"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="leading-relaxed">
              Ce site ne fait pas partie du site web Facebook ou de Facebook, Inc. ni de Google Inc. En outre, ce site n'est pas endossé par Facebook en aucune façon ni par Google Inc. Facebook est une marque déposée de Facebook, Inc.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-gray-800 mb-3">Contact</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2 justify-center md:justify-start">
                <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@dmplus-academy.com</span>
              </p>
              <p className="flex items-center gap-2 justify-center md:justify-start">
                <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+242 XXX XXX XXX</span>
              </p>
            </div>
          </div>
          <div className="text-center">
            <p className="leading-relaxed">&copy; CONFIDENTIALITÉS | MENTIONS LÉGALES</p>
            <p className="mt-2">Copyright  2025 DIGITAL MIND PLUS ACADEMY Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

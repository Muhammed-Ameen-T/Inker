const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="text-white-500 text-2xl font-bold">Inker</div>
          </div>
          <p className="text-gray-400">
            Your gateway to professional growth and connections
          </p>
        </div>

        {["Company", "Resources", "Legal"].map((section, index) => (
          <div key={index}>
            <h3 className="font-semibold mb-4">{section}</h3>
            <ul className="space-y-2">
              {["About", "Blog", "Careers", "Contact"].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-400 hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
const FeaturesSection = () => {
  return (
    <section className="py-20 px-6 ">
      <h2 className="text-3xl font-bold text-center mb-16">
        What Makes Inker Your Professional Power-suite?
      </h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-6 lg:ml-30 lg:mr-30">
        {[
          {
            icon: "🎯",
            title: "Perfect Leads Match",
            description:
              "Find your ideal business connections with our advanced matching system",
          },
          {
            icon: "🤝",
            title: "Connect with Experts",
            description:
              "Direct access to industry leaders and specialists in your field",
          },
          {
            icon: "💡",
            title: "Job Tech Support",
            description:
              "Get technical support and guidance for your career growth",
          },
          {
            icon: "📊",
            title: "One-on-One Chat",
            description:
              "Personal communication channels for better collaboration",
          },
        ].map((feature, index) => (
          <div key={index} className="p-6 text-center">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};


export default FeaturesSection;
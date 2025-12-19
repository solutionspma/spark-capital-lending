export default function Home() {
  const loanProducts = [
    {
      name: "Personal Loans",
      rate: "6.99% APR",
      amount: "$5K - $50K",
      image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Quick approval", "No collateral needed", "Flexible terms"]
    },
    {
      name: "Business Loans",
      rate: "7.49% APR",
      amount: "$25K - $500K",
      image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Growth capital", "Equipment financing", "Working capital"]
    },
    {
      name: "Home Equity Lines",
      rate: "5.99% APR",
      amount: "$10K - $250K",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Low interest rates", "Tax deductible", "Revolving credit"]
    },
    {
      name: "Auto Loans",
      rate: "4.99% APR",
      amount: "$5K - $100K",
      image: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["New & used cars", "Quick funding", "Refinancing available"]
    },
    {
      name: "Student Loan Refinancing",
      rate: "5.49% APR",
      amount: "$10K - $300K",
      image: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Lower your rate", "Flexible repayment", "No fees"]
    },
    {
      name: "Debt Consolidation",
      rate: "8.49% APR",
      amount: "$5K - $100K",
      image: "https://images.pexels.com/photos/6289034/pexels-photo-6289034.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Simplify payments", "Lower monthly costs", "Improve credit"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">💰</span>
            <div>
              <h1 className="text-2xl font-bold">Spark Capital Lending</h1>
              <p className="text-xs text-white/80">Your Financial Growth Partner</p>
            </div>
          </div>
          <div className="flex gap-6">
            <a href="#loans" className="hover:text-emerald-100 transition">Loan Products</a>
            <a href="#about" className="hover:text-emerald-100 transition">About</a>
            <a href="#calculator" className="hover:text-emerald-100 transition">Calculator</a>
            <a href="#contact" className="hover:text-emerald-100 transition">Contact</a>
            <button className="bg-white text-emerald-600 px-6 py-2 rounded-full font-semibold hover:bg-emerald-50 transition">
              Apply Now
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Financial Growth"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-teal-900/60 flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl text-white">
              <h2 className="text-6xl font-bold mb-6">Fuel Your Dreams with Smart Lending</h2>
              <p className="text-xl mb-8">Competitive rates, fast approval, and personalized service to help you achieve your financial goals</p>
              <div className="flex gap-4">
                <button className="bg-emerald-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-600 transition shadow-lg">
                  Get Pre-Qualified
                </button>
                <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition shadow-lg">
                  Calculate Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-emerald-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">$2.5B+</div>
              <div className="text-gray-600">Loans Funded</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">50K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">4.99%</div>
              <div className="text-gray-600">Starting APR</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">24 Hours</div>
              <div className="text-gray-600">Average Approval</div>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Products */}
      <section id="loans" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Loan Products</h2>
            <p className="text-xl text-gray-600">Flexible financing solutions tailored to your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {loanProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-gray-100">
                <div className="relative h-48">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{product.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
                    <div>
                      <div className="text-sm text-gray-600">Starting at</div>
                      <div className="text-2xl font-bold text-emerald-600">{product.rate}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Amount</div>
                      <div className="text-lg font-bold text-gray-900">{product.amount}</div>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <span className="text-emerald-500">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-full font-semibold hover:from-emerald-600 hover:to-teal-600 transition">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Spark Capital?</h2>
            <p className="text-xl text-gray-600">We make borrowing simple, fast, and transparent</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-gray-600">Get approved in as little as 24 hours with our streamlined application process</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-xl font-bold mb-3">Competitive Rates</h3>
              <p className="text-gray-600">Enjoy some of the lowest rates in the industry with no hidden fees</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Personal Service</h3>
              <p className="text-gray-600">Dedicated loan specialists guide you through every step of the process</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-500 to-teal-500 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-12 text-white/90">See how much you qualify for in just 2 minutes</p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <div>
                <div className="text-3xl mb-2">📞</div>
                <h3 className="font-semibold mb-1">Call Us</h3>
                <p>(555) 987-6543</p>
              </div>
              <div>
                <div className="text-3xl mb-2">📧</div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p>loans@sparkcapital.com</p>
              </div>
              <div>
                <div className="text-3xl mb-2">📍</div>
                <h3 className="font-semibold mb-1">Visit</h3>
                <p>456 Finance Blvd, Suite 100</p>
              </div>
            </div>
          </div>
          
          <button className="bg-white text-emerald-600 px-12 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition shadow-2xl">
            Apply Now - Free Quote
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Spark Capital Lending</h3>
              <p className="text-sm">Your trusted partner for personal and business financing solutions.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Loan Products</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Personal Loans</a></li>
                <li><a href="#" className="hover:text-white transition">Business Loans</a></li>
                <li><a href="#" className="hover:text-white transition">Home Equity</a></li>
                <li><a href="#" className="hover:text-white transition">Auto Loans</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Loan Calculator</a></li>
                <li><a href="#" className="hover:text-white transition">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-sm">
            <p>&copy; 2025 Spark Capital Lending. All rights reserved. NMLS #123456 | Powered by <a href="https://pitchmarketing.agency" className="text-emerald-400 hover:text-emerald-300">Pitch Marketing Agency</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

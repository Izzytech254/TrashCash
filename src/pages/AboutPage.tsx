import { Link } from 'react-router-dom';
import { Trash2, Users, Building2, Landmark, MapPin, DollarSign, Leaf, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 px-4 bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About TrashCash
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Revolutionizing waste management through technology, transparency, and incentives
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                The Waste Problem
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  Every day, millions of garbage bins across cities become overflowing, creating health hazards 
                  and environmental concerns. Traditional waste management systems often fail to respond quickly 
                  enough to these overflow situations.
                </p>
                <p>
                  <strong className="text-gray-900 dark:text-white">The consequences are significant:</strong>
                </p>
                <ul className="space-y-3">
                  {[
                    'Health hazards from exposed waste',
                    'Environmental pollution and contamination',
                    'Unpleasant odors and visual pollution',
                    'Increased costs for municipalities',
                    'Poor quality of life in urban areas',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-red-100 dark:bg-red-900/20 rounded-2xl p-6 text-center">
                <p className="text-4xl font-bold text-red-600 mb-2">67%</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Of bins overflow before collection</p>
              </div>
              <div className="bg-orange-100 dark:bg-orange-900/20 rounded-2xl p-6 text-center">
                <p className="text-4xl font-bold text-orange-600 mb-2">48hrs</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Average response time</p>
              </div>
              <div className="bg-yellow-100 dark:bg-yellow-900/20 rounded-2xl p-6 text-center">
                <p className="text-4xl font-bold text-yellow-600 mb-2">$2.5B</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Annual cleanup costs</p>
              </div>
              <div className="bg-primary-100 dark:bg-primary-900/20 rounded-2xl p-6 text-center">
                <p className="text-4xl font-bold text-primary-600 mb-2">85%</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Citizen complaints about waste</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How TrashCash Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our platform creates a seamless connection between all stakeholders in waste management
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Report', description: 'Anyone reports a full bin via app or website', icon: MapPin },
              { step: 2, title: 'Notify', description: 'Nearby cleaners receive instant notifications', icon: Trash2 },
              { step: 3, title: 'Collect', description: 'Cleaner accepts and completes the job', icon: Users },
              { step: 4, title: 'Get Paid', description: 'Secure payment after verification', icon: DollarSign },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute top-4 right-4 text-4xl font-bold text-primary-200 dark:text-primary-800">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
                {index < 3 && (
                  <ArrowRight className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-primary-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Benefits for Everyone
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              TrashCash creates value for all stakeholders in the waste management ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Vendors & Businesses</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500">✓</span>
                  <span>Private bin collection services</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500">✓</span>
                  <span>Scheduled pickups on demand</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500">✓</span>
                  <span>Real-time bin status tracking</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500">✓</span>
                  <span>Transparent pricing</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Cleaners</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500">✓</span>
                  <span>Earn money for each collection</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500">✓</span>
                  <span>Flexible working hours</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500">✓</span>
                  <span>Instant payments to mobile wallet</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500">✓</span>
                  <span>Grow your cleaning business</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mb-6">
                <Landmark className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Government</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500">✓</span>
                  <span>Reduced public waste complaints</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500">✓</span>
                  <span>Cost-effective bin management</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500">✓</span>
                  <span>Data-driven decision making</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500">✓</span>
                  <span>Cleaner cities, happier citizens</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Leaf className="w-8 h-8 text-white" />
            <span className="text-xl font-semibold text-white">Our Mission</span>
          </div>
          <p className="text-2xl text-white font-medium mb-8">
            "To create a sustainable waste management ecosystem that incentivizes participation, 
            ensures cleanliness, and improves the quality of life in urban areas."
          </p>
          <Link to="/signup" className="inline-block bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
            Join the Movement
          </Link>
        </div>
      </section>
    </div>
  );
}

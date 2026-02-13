import { Link } from 'react-router-dom';
import { Building2, Calendar, BarChart3, CreditCard, CheckCircle, ArrowRight, Star, Shield } from 'lucide-react';

export default function BusinessPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            For Businesses & Vendors
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Streamline your waste management with on-demand collection services and smart tracking
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Smart Private Bin Management
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Whether you run a restaurant, office building, or retail store, TrashCash provides 
                reliable private bin collection that adapts to your schedule and needs.
              </p>
              <div className="space-y-4">
                {[
                  'On-demand collection when you need it',
                  'Real-time bin level monitoring',
                  'Fixed monthly pricing or pay-per-collection',
                  'Digital invoices and payment history',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-100 dark:bg-blue-900/20 rounded-2xl p-6 text-center">
                <Building2 className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <p className="font-bold text-gray-900 dark:text-white">Restaurants</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">High-volume waste needs</p>
              </div>
              <div className="bg-primary-100 dark:bg-primary-900/20 rounded-2xl p-6 text-center">
                <Building2 className="w-10 h-10 text-primary-600 mx-auto mb-3" />
                <p className="font-bold text-gray-900 dark:text-white">Offices</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Daily office waste</p>
              </div>
              <div className="bg-purple-100 dark:bg-purple-900/20 rounded-2xl p-6 text-center">
                <Building2 className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                <p className="font-bold text-gray-900 dark:text-white">Retail Stores</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Flexible schedules</p>
              </div>
              <div className="bg-orange-100 dark:bg-orange-900/20 rounded-2xl p-6 text-center">
                <Building2 className="w-10 h-10 text-orange-600 mx-auto mb-3" />
                <p className="font-bold text-gray-900 dark:text-white">Hotels</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">24/7 operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works for Vendors
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Get started in minutes with our simple onboarding process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: 'Register Your Business',
                description: 'Sign up and add your business locations. Each location gets unique bin IDs for tracking.',
              },
              {
                icon: Calendar,
                title: 'Choose Your Plan',
                description: 'Select from flexible plans: pay-per-collection, weekly, or monthly subscriptions.',
              },
              {
                icon: BarChart3,
                title: 'Monitor & Manage',
                description: 'Track bin levels, schedule pickups, and view analytics from your dashboard.',
              },
            ].map((step, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Features Built for Business
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: BarChart3,
                    title: 'Analytics Dashboard',
                    description: 'Track waste volume, collection frequency, and costs over time. Make data-driven decisions.',
                  },
                  {
                    icon: Calendar,
                    title: 'Smart Scheduling',
                    description: 'Set up recurring pickups or request on-demand collection when bins are full.',
                  },
                  {
                    icon: CreditCard,
                    title: 'Easy Payments',
                    description: 'Multiple payment options including PayHero. Automatic billing or manual payment.',
                  },
                  {
                    icon: Shield,
                    title: 'Compliance & Reports',
                    description: 'Generate reports for environmental compliance and sustainability tracking.',
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg">Pricing Plans</h3>
                <div className="flex items-center space-x-1 text-yellow-500">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">4.9/5 rating</span>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Starter', price: '$49', features: ['Up to 3 bins', 'Monthly billing', 'Basic analytics'] },
                  { name: 'Professional', price: '$149', features: ['Up to 10 bins', 'On-demand pickups', 'Advanced analytics', 'Priority support'], popular: true },
                  { name: 'Enterprise', price: 'Custom', features: ['Unlimited bins', 'Custom scheduling', 'Dedicated account manager', 'API access'] },
                ].map((plan, index) => (
                  <div key={index} className={`border rounded-xl p-4 ${plan.popular ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20' : 'border-gray-200 dark:border-gray-700'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900 dark:text-white">{plan.name}</span>
                      <span className="text-2xl font-bold text-primary-600">{plan.price}</span>
                    </div>
                    <ul className="space-y-1">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-primary-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Streamline Your Waste Management?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of businesses already using TrashCash
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup" className="inline-flex items-center justify-center space-x-2 bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
              <span>Register Your Business</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

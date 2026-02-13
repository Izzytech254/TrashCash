import { Link } from 'react-router-dom';
import { Trash2, MapPin, Users, Wallet, ArrowRight, CheckCircle, Zap, Shield, Globe } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 -z-10" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-200/20 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                <span>Smart Waste Management</span>
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Trash2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">TrashCash</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-200 mb-8 leading-tight">
                "Turning Waste Into Opportunities"
              </h2>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                Get Paid to Keep
                <span className="text-primary-500"> Cities Clean</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
                TrashCash connects vendors, street bins, cleaners, and government through technology and payments. Report full bins, earn money, and make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/report" className="btn-primary inline-flex items-center justify-center space-x-2">
                  <span>Report Full Bin</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/cleaners" className="btn-outline inline-flex items-center justify-center">
                  Become a Cleaner
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-square bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Trash2 className="w-12 h-12 text-white" />
                    </div>
                    <p className="text-white font-bold text-2xl">BIN #TC-2847</p>
                    <p className="text-white/80 text-sm">Status: Full - Needs Collection</p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-primary-500">$15</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Collection Reward</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-primary-500">2.3km</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Distance Away</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-primary-300/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How TrashCash Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Simple, efficient, and rewarding waste management for everyone
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: 'Report a Full Bin',
                description: 'Anyone can report a full bin using our mobile app or website. Just enter the bin ID or scan the QR code.',
                color: 'bg-blue-500',
              },
              {
                icon: Users,
                title: 'Cleaners Accept Jobs',
                description: 'Nearby cleaners receive notifications and can accept collection jobs. The first to accept gets the job.',
                color: 'bg-primary-500',
              },
              {
                icon: Wallet,
                title: 'Get Paid',
                description: 'After collection, cleaners upload confirmation photos and receive payment directly to their mobile wallet.',
                color: 'bg-purple-500',
              },
            ].map((step, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
                  <div className={`w-14 h-14 ${step.color} rounded-xl flex items-center justify-center mb-6`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute top-8 right-8 text-6xl font-bold text-gray-200 dark:text-gray-800">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose TrashCash?
              </h2>
              <div className="space-y-6">
                {[
                  { icon: CheckCircle, title: 'Real-time Tracking', description: 'Monitor bin status and collection progress in real-time' },
                  { icon: Wallet, title: 'Instant Payments', description: 'Get paid immediately after completing collection jobs' },
                  { icon: Shield, title: 'Secure & Reliable', description: 'Verified payments and transparent transaction history' },
                  { icon: Globe, title: 'Impact Analytics', description: 'Track your contribution to city cleanliness' },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center">
                <p className="text-4xl font-bold text-primary-500 mb-2">10K+</p>
                <p className="text-gray-600 dark:text-gray-400">Bins Monitored</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center">
                <p className="text-4xl font-bold text-primary-500 mb-2">500+</p>
                <p className="text-gray-600 dark:text-gray-400">Active Cleaners</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center">
                <p className="text-4xl font-bold text-primary-500 mb-2">50K+</p>
                <p className="text-gray-600 dark:text-gray-400">Collections</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center">
                <p className="text-4xl font-bold text-primary-500 mb-2">$2M+</p>
                <p className="text-gray-600 dark:text-gray-400">Paid to Cleaners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of cleaners and businesses already using TrashCash
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
              Sign Up Now
            </Link>
            <Link to="/about" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

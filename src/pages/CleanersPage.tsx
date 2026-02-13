import { Link } from 'react-router-dom';
import { Users, DollarSign, MapPin, Clock, Star, ArrowRight, Smartphone, TrendingUp, Shield, Briefcase } from 'lucide-react';

export default function CleanersPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 px-4 bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Earn Money as a Cleaner
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Turn your neighborhood into opportunity. Get paid for keeping your city clean
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Be Your Own Boss
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                TrashCash connects you with collection jobs in your area. Accept jobs that fit your 
                schedule, complete them, and get paid instantly. It's that simple.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary-100 dark:bg-primary-900/20 rounded-xl p-4">
                  <DollarSign className="w-8 h-8 text-primary-600 mb-2" />
                  <p className="font-bold text-gray-900 dark:text-white">$15-30</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Per collection</p>
                </div>
                <div className="bg-blue-100 dark:bg-blue-900/20 rounded-xl p-4">
                  <Clock className="w-8 h-8 text-blue-600 mb-2" />
                  <p className="font-bold text-gray-900 dark:text-white">Flexible</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Work anytime</p>
                </div>
                <div className="bg-purple-100 dark:bg-purple-900/20 rounded-xl p-4">
                  <MapPin className="w-8 h-8 text-purple-600 mb-2" />
                  <p className="font-bold text-gray-900 dark:text-white">Local</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Near you</p>
                </div>
                <div className="bg-orange-100 dark:bg-orange-900/20 rounded-xl p-4">
                  <TrendingUp className="w-8 h-8 text-orange-600 mb-2" />
                  <p className="font-bold text-gray-900 dark:text-white">Grow</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Build reputation</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8">
                <div className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white/80 text-sm">Today's Earnings</span>
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs">Active</span>
                  </div>
                  <p className="text-4xl font-bold text-white">$127.50</p>
                  <p className="text-white/80 text-sm mt-2">8 collections completed</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-primary-500" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">BIN #TC-2847</span>
                    </div>
                    <span className="text-primary-600 font-semibold">$15.00</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-primary-500" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">BIN #TC-1923</span>
                    </div>
                    <span className="text-primary-600 font-semibold">$20.00</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-primary-500" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">BIN #TC-3456</span>
                    </div>
                    <span className="text-primary-600 font-semibold">$18.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How to Start Earning
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: '1. Sign Up',
                description: 'Download the app and create your cleaner profile. Verify your identity and you are ready to go.',
              },
              {
                icon: MapPin,
                title: '2. Accept Jobs',
                description: 'Browse available collection jobs in your area. Accept jobs that are convenient for you.',
              },
              {
                icon: DollarSign,
                title: '3. Get Paid',
                description: 'Complete the collection, upload proof, and receive instant payment to your mobile wallet.',
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
                {index < 2 && (
                  <ArrowRight className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-primary-300 -z-10" />
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
              Why Cleaners Love TrashCash
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: DollarSign,
                title: 'Instant Payments',
                description: 'Get paid immediately after completing each job. No waiting, no delays.',
              },
              {
                icon: Clock,
                title: 'Flexible Schedule',
                description: 'Work when you want. Accept jobs that fit your availability.',
              },
              {
                icon: MapPin,
                title: 'Local Jobs',
                description: 'Find jobs in your neighborhood. Save time on travel.',
              },
              {
                icon: TrendingUp,
                title: 'Build Your Rating',
                description: 'Earn badges and increase your rating to unlock premium jobs.',
              },
              {
                icon: Shield,
                title: 'Secure Platform',
                description: 'Verified jobs and secure payments through PayHero integration.',
              },
              {
                icon: Briefcase,
                title: 'Grow Your Business',
                description: 'Take on more jobs, build a team, and increase your earnings.',
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Users className="w-8 h-8" />
                <span className="text-xl font-semibold">Top Cleaner Review</span>
              </div>
              <blockquote className="text-xl md:text-2xl font-medium mb-6">
                "TrashCash changed my life. I was able to earn a steady income while helping keep my neighborhood clean. 
                The app is easy to use and payments are always on time!"
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-white/80">- Michael T., Cleaner since 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Earning Today
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join 500+ cleaners already making money with TrashCash
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup" className="inline-flex items-center justify-center space-x-2 bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
              <span>Sign Up as Cleaner</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

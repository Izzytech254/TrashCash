import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { DollarSign, CreditCard, Building2, Smartphone, CheckCircle, Clock, ArrowUpRight, ArrowDownLeft, Send, Wallet, TrendingUp } from 'lucide-react';

export default function PaymentsPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'transactions' | 'pay' | 'wallet'>('transactions');

  const mockTransactions = [
    { id: '1', type: 'received', amount: 15, from: 'BIN-2847 Collection', date: 'Today, 2:30 PM', status: 'completed' },
    { id: '2', type: 'received', amount: 20, from: 'BIN-1923 Collection', date: 'Today, 11:15 AM', status: 'completed' },
    { id: '3', type: 'sent', amount: 45, from: 'Weekly Collection Service', date: 'Yesterday', status: 'completed' },
    { id: '4', type: 'received', amount: 18, from: 'BIN-3456 Collection', date: 'Yesterday', status: 'completed' },
    { id: '5', type: 'sent', amount: 120, from: 'Monthly Subscription', date: 'Jan 10', status: 'completed' },
    { id: '6', type: 'received', amount: 22, from: 'BIN-4521 Collection', date: 'Jan 9', status: 'completed' },
  ];

  const stats = user?.role === 'cleaner' 
    ? [
        { label: 'Total Earned', value: '$1,247', icon: TrendingUp, color: 'bg-green-500' },
        { label: 'This Month', value: '$342', icon: DollarSign, color: 'bg-blue-500' },
        { label: 'Pending', value: '$65', icon: Clock, color: 'bg-orange-500' },
        { label: 'Wallet Balance', value: '$156', icon: Wallet, color: 'bg-primary-500' },
      ]
    : [
        { label: 'Total Spent', value: '$720', icon: TrendingUp, color: 'bg-red-500' },
        { label: 'This Month', value: '$165', icon: DollarSign, color: 'bg-blue-500' },
        { label: 'Pending', value: '$45', icon: Clock, color: 'bg-orange-500' },
        { label: 'Wallet Balance', value: '$280', icon: Wallet, color: 'bg-primary-500' },
      ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Payments</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {user?.role === 'cleaner' ? 'Track your earnings and withdrawals' : 'Manage your payments and subscriptions'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm mb-8">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'transactions', label: 'Transactions', icon: ArrowUpRight },
                { id: 'pay', label: user?.role === 'cleaner' ? 'Withdraw' : 'Make Payment', icon: Send },
                { id: 'wallet', label: 'Wallet', icon: Wallet },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'transactions' && (
              <div className="space-y-4">
                {mockTransactions.map((tx) => (
                  <div key={tx.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        tx.type === 'received' ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'
                      }`}>
                        {tx.type === 'received' ? (
                          <ArrowDownLeft className="w-5 h-5 text-green-600" />
                        ) : (
                          <ArrowUpRight className="w-5 h-5 text-red-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{tx.from}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{tx.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${
                        tx.type === 'received' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {tx.type === 'received' ? '+' : '-'}${tx.amount}
                      </p>
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span>{tx.status}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'pay' && (
              <div className="max-w-md mx-auto">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {user?.role === 'cleaner' ? 'Withdraw to Mobile Money' : 'Pay for Services'}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {user?.role === 'cleaner' 
                      ? 'Instant transfer to your PayHero account' 
                      : 'Pay via PayHero or card'}
                  </p>
                </div>

                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Amount
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="number"
                        className="input-field pl-10"
                        placeholder="Enter amount"
                      />
                    </div>
                  </div>

                  {user?.role === 'cleaner' ? (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          className="input-field pl-10"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Card Number
                        </label>
                        <div className="relative">
                          <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            className="input-field pl-10"
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Expiry
                          </label>
                          <input
                            type="text"
                            className="input-field"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            CVV
                          </label>
                          <input
                            type="text"
                            className="input-field"
                            placeholder="123"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                  >
                    {user?.role === 'cleaner' ? (
                      <>
                        <ArrowUpRight className="w-4 h-4" />
                        <span>Withdraw Funds</span>
                      </>
                    ) : (
                      <>
                        <CreditCard className="w-4 h-4" />
                        <span>Pay Now</span>
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                    Powered by <span className="font-semibold text-primary-500">PayHero</span>
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'wallet' && (
              <div className="text-center py-8">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 text-white max-w-sm mx-auto">
                  <p className="text-sm text-white/80 mb-2">Available Balance</p>
                  <p className="text-4xl font-bold mb-6">$156.00</p>
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-white text-primary-600 py-2 px-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                      Withdraw
                    </button>
                    <button className="flex-1 bg-white/20 text-white py-2 px-4 rounded-lg font-medium hover:bg-white/30 transition-colors">
                      Top Up
                    </button>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <Building2 className="w-4 h-4" />
                  <span>Secured by PayHero</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

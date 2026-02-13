import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { 
  Trash2, 
  DollarSign, 
  MapPin, 
  Users, 
  TrendingUp, 
  AlertCircle,
  CheckCircle,
  Clock,
  ArrowRight,
  BarChart3
} from 'lucide-react';

export default function DashboardPage() {
  const { user } = useAuth();

  const getRoleSpecificContent = () => {
    switch (user?.role) {
      case 'vendor':
        return {
          title: 'Vendor Dashboard',
          subtitle: 'Manage your private bin collections',
          stats: [
            { label: 'Active Bins', value: '12', icon: Trash2, color: 'bg-blue-500' },
            { label: 'Collections This Month', value: '48', icon: TrendingUp, color: 'bg-primary-500' },
            { label: 'Total Spent', value: '$720', icon: DollarSign, color: 'bg-purple-500' },
            { label: 'Pending Jobs', value: '3', icon: Clock, color: 'bg-orange-500' },
          ],
          recentJobs: [
            { id: '1', bin: 'BIN-V-001', location: 'Main Street Restaurant', status: 'completed', amount: '$15' },
            { id: '2', bin: 'BIN-V-002', location: 'Office Building A', status: 'pending', amount: '$20' },
            { id: '3', bin: 'BIN-V-003', location: 'Shopping Center', status: 'completed', amount: '$18' },
          ],
        };
      case 'cleaner':
        return {
          title: 'Cleaner Dashboard',
          subtitle: 'Your earnings and available jobs',
          stats: [
            { label: 'Today\'s Earnings', value: '$127', icon: DollarSign, color: 'bg-primary-500' },
            { label: 'Jobs Completed', value: '8', icon: CheckCircle, color: 'bg-blue-500' },
            { label: 'Available Jobs', value: '5', icon: AlertCircle, color: 'bg-orange-500' },
            { label: 'Rating', value: '4.9', icon: TrendingUp, color: 'bg-purple-500' },
          ],
          recentJobs: [
            { id: '1', bin: 'BIN-2847', location: 'Central Park Area', status: 'pending', distance: '0.5km', amount: '$15' },
            { id: '2', bin: 'BIN-1923', location: 'Main Street', status: 'accepted', distance: '1.2km', amount: '$20' },
            { id: '3', bin: 'BIN-3456', location: 'Market Square', status: 'pending', distance: '0.8km', amount: '$18' },
          ],
        };
      case 'government':
        return {
          title: 'Government Dashboard',
          subtitle: 'Overview of public waste management',
          stats: [
            { label: 'Public Bins', value: '1,247', icon: Trash2, color: 'bg-blue-500' },
            { label: 'Collections Today', value: '342', icon: TrendingUp, color: 'bg-primary-500' },
            { label: 'Total Paid', value: '$5,130', icon: DollarSign, color: 'bg-purple-500' },
            { label: 'Active Cleaners', value: '89', icon: Users, color: 'bg-orange-500' },
          ],
          recentJobs: [
            { id: '1', bin: 'BIN-P-001', location: 'Downtown Plaza', status: 'completed', amount: '$25' },
            { id: '2', bin: 'BIN-P-002', location: 'Bus Station', status: 'completed', amount: '$22' },
            { id: '3', bin: 'BIN-P-003', location: 'City Park', status: 'pending', amount: '$28' },
          ],
        };
      default:
        return null;
    }
  };

  const content = getRoleSpecificContent();

  if (!content) return null;

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{content.title}</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">{content.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {content.stats.map((stat, index) => (
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

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {user?.role === 'cleaner' ? 'Available Jobs' : 'Recent Collections'}
                </h2>
                <Link to="/report" className="text-primary-500 hover:text-primary-600 text-sm font-medium flex items-center space-x-1">
                  <span>View All</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="space-y-4">
                {content.recentJobs.map((job) => (
                  <div key={job.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{job.bin}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{job.location}</p>
                        {'distance' in job && (
                          <p className="text-xs text-gray-400 dark:text-gray-500">{(job as { distance: string }).distance} away</p>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-primary-600">{job.amount}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        job.status === 'completed' 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                          : job.status === 'accepted'
                          ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                          : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
                      }`}>
                        {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Link
                  to="/report"
                  className="flex items-center space-x-3 p-3 rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
                >
                  <AlertCircle className="w-5 h-5" />
                  <span className="font-medium">Report Full Bin</span>
                </Link>
                <Link
                  to="/payments"
                  className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <DollarSign className="w-5 h-5" />
                  <span className="font-medium">View Payments</span>
                </Link>
                {user?.role === 'cleaner' && (
                  <Link
                    to="/dashboard"
                    className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    <BarChart3 className="w-5 h-5" />
                    <span className="font-medium">View Analytics</span>
                  </Link>
                )}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2">Need Help?</h3>
              <p className="text-sm text-white/80 mb-4">
                Have questions about TrashCash? Our support team is here to help.
              </p>
              <button className="w-full bg-white text-primary-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

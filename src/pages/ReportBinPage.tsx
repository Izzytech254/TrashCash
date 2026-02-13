import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, MapPin, Camera, CheckCircle, AlertCircle, Navigation } from 'lucide-react';

export default function ReportBinPage() {
  const [binId, setBinId] = useState('');
  const [location, setLocation] = useState('');
  const [useCurrentLocation, setUseCurrentLocation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const handleDetectLocation = () => {
    setUseCurrentLocation(true);
    setLocation('Detecting location...');
    setTimeout(() => {
      setLocation('123 Main Street, Downtown');
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-20 pb-12 px-4 flex items-center justify-center">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Bin Reported Successfully!
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Nearby cleaners have been notified. A cleaner will collect the bin soon.
          </p>
          <div className="space-y-3">
            <Link to="/report" className="block w-full btn-primary">
              Report Another Bin
            </Link>
            <Link to="/dashboard" className="block w-full btn-outline">
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Report a Full Bin</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Help keep your city clean by reporting overflowing bins
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Bin ID
              </label>
              <div className="relative">
                <Trash2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={binId}
                  onChange={(e) => setBinId(e.target.value)}
                  className="input-field pl-10"
                  placeholder="e.g., BIN-2847 or TC-1234"
                  required
                />
              </div>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Enter the unique bin ID found on the bin label or QR code
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Location
              </label>
              <div className="flex space-x-3">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="input-field pl-10"
                    placeholder="Enter bin location"
                    required
                  />
                </div>
                <button
                  type="button"
                  onClick={handleDetectLocation}
                  className={`px-4 py-3 rounded-lg border transition-colors flex items-center space-x-2 ${
                    useCurrentLocation
                      ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-600'
                      : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-500'
                  }`}
                >
                  <Navigation className="w-5 h-5" />
                  <span className="hidden sm:inline">Detect</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Upload Photo (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center hover:border-primary-500 transition-colors cursor-pointer">
                <Camera className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  PNG, JPG up to 10MB
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-blue-700 dark:text-blue-300">
                <p className="font-medium">What happens next?</p>
                <p className="mt-1">
                  Nearby cleaners will receive a notification. The first available cleaner will accept the job 
                  and collect the bin. You'll be able to track the status from your dashboard.
                </p>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <CheckCircle className="w-5 h-5" />
                  <span>Report Full Bin</span>
                </>
              )}
            </button>
          </form>
        </div>

        <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recent Reports
          </h2>
          <div className="space-y-3">
            {[
              { id: 'BIN-2847', location: 'Central Park', status: 'collected', time: '2 hours ago' },
              { id: 'BIN-1923', location: 'Main Street', status: 'pending', time: '30 min ago' },
              { id: 'BIN-3456', location: 'Market Square', status: 'accepted', time: '15 min ago' },
            ].map((report, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Trash2 className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{report.id}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{report.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    report.status === 'collected'
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                      : report.status === 'accepted'
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                      : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
                  }`}>
                    {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                  </span>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{report.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

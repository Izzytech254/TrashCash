export type UserRole = 'vendor' | 'cleaner' | 'government';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Bin {
  id: string;
  location: {
    address: string;
    lat: number;
    lng: number;
  };
  status: 'empty' | 'half' | 'full';
  type: 'public' | 'private';
  vendorId?: string;
}

export interface CollectionJob {
  id: string;
  binId: string;
  binLocation: string;
  reportedAt: Date;
  acceptedAt?: Date;
  completedAt?: Date;
  status: 'pending' | 'accepted' | 'completed' | 'cancelled';
  payment: number;
  cleanerId?: string;
  cleanerName?: string;
}

export interface Payment {
  id: string;
  amount: number;
  type: 'vendor' | 'government';
  status: 'pending' | 'completed' | 'failed';
  createdAt: Date;
  to?: string;
  from?: string;
}

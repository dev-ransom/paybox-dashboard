import Card from '@/app/components/Card';
import Header from '@/app/components/Header';
import Sidebar from '@/app/components/SidebarMenu';
import React from 'react';


interface User {
  name: string;
  email: string;
  avatar: string;
}

const user: User = {
  name: 'Dexter Olaniyi',
  email: 'Dexterola@gmail.com',
  avatar: 'path_to_avatar_image', // replace with actual path
};

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />
      <div className="flex-1">
        <Header title="Analytics dashboard" user={user} />
        <main className="p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Card title="Wallet Balance" value="₦50,000.00" className="col-span-1 " textColor='text-[#CDCDCD]' valueColor='text-white'>
              <div className="flex space-x-2 mt-2">
                <button className="bg-white text-blue-500 px-4 py-2 rounded">Add Fund</button>
                <button className="bg-white text-blue-500 px-4 py-2 rounded">Withdraw</button>
              </div>
            </Card>
            <Card title="Total savings balance" value="₦194,000" details="View details" />
            <Card title="Total customers" value="919" details="View details" />
            <Card title="Total POS" value="0" details="View details" />
            <Card title="Total transfer" value="₦500" details="Today" actions={<button className="text-blue-500">More</button>} />
            <Card title="Total inflow" value="₦2,000,000" details="Today" actions={<button className="text-blue-500">More</button>} />
            <Card title="Total transactions" value="₦2,000,000" details="Today" actions={<button className="text-blue-500">More</button>} />
            <Card title="Transaction count" value="422" details="Successful" actions={<button className="text-blue-500">More</button>} />
            <Card title="Average transaction" value="₦20,400" details="Today" actions={<button className="text-blue-500">More</button>} />
            <Card title="Total commission" value="₦87,000" details="POS commission" actions={<button className="text-blue-500">More</button>} />
            {/* Add more cards here */}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card title="Transaction Comparative" value="₦105,000,000">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">Send money</p>
                <p className="text-sm text-gray-500">Cashout</p>
              </div>
              {/* Insert chart here */}
            </Card>
            <Card title="Transaction status" value="Successful - 8,400 vs Failed - 114">
              {/* Insert chart here */}
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

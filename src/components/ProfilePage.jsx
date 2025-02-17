import React from 'react';

const profileOptions = [
  "Account details(Personal+Business)",
  "Address Details",
  "My Orders",
  "My Bills",
  "My Products",
  "Order Summary and Stats",
  "Seller Support",
  "Log Out",
  "Privacy Policy",
  "Terms and Condition",
  "Preferences",
  "Refer App",
  "My Statements",
  "Seller Score"
];

export default function ProfilePage() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-lg font-bold mb-4">Seller Profile</h2>
      <div className="space-y-2">
        {profileOptions.map((option, index) => (
          <button
            key={index}
            className="block w-full p-3 text-left bg-white rounded-md shadow-sm hover:bg-agri-gray"
            onClick={() => alert(`Clicked: ${option}`)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

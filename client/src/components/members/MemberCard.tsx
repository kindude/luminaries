import React from 'react';

interface Props {
  username: string;
  photo: string;
  email: string;
}

const MemberCard: React.FC<Props> = ({ username, photo, email }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md">
      <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${photo})` }}></div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{username}</h2>
        <p className="text-gray-700 mt-2">{email}</p>
      </div>
    </div>
  );
};

export default MemberCard;

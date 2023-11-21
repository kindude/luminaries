import React, { useEffect, useState } from 'react';
import MemberCard from '../../components/members/MemberCard';
import { User } from '../../types/User';
import axios from 'axios';
import { ExtendedUser } from '../../types/ExtenededUser';

const fakeUrls = [
  {
    fullname: 'John Doe',
    photo: 'https://placekitten.com/200/200',
    role: 'Developer',
    description: 'Passionate about coding and creating amazing web applications.',
  },
  {
    fullname: 'Jane Smith',
    photo: 'https://placekitten.com/201/201',
    role: 'Designer',
    description: 'Bringing creativity to life through beautiful and functional designs.',
  },
  
];

const Members: React.FC = () => {

  const [members, setMembers] = useState<ExtendedUser[]>([]);

  useEffect(() => {
    axios.get<ExtendedUser[]>('http://localhost:3001/members/') 
      .then((response) => {
        if (response.status === 200) {
          setMembers(response.data); 
        }
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  }, []);

members.forEach(element => {
    const photoId = element.id + 200
    element.photo = 'https://placekitten.com/' + photoId + '/' + photoId;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {members.map((member, index) => (
        <MemberCard key={index} {...member} />
      ))}
    </div>
  );
};

export default Members;

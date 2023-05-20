import React, { useState } from 'react';

const TabbedConversation = () => {
  const [activeTab, setActiveTab] = useState('conversations');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-gray-100 p-4">
      <div className="flex">
        <button
          className={`px-4 py-2 rounded-tl-lg ${
            activeTab === 'conversations' ? 'bg-white text-blue-500' : 'bg-gray-300'
          }`}
          onClick={() => handleTabChange('conversations')}
        >
          Conversations
        </button>
        <button
          className={`px-4 py-2 rounded-tr-lg ${
            activeTab === 'friends' ? 'bg-white text-blue-500' : 'bg-gray-300'
          }`}
          onClick={() => handleTabChange('friends')}
        >
          Friends
        </button>
      </div>
      <div className="mt-4 p-4 bg-white">
        {activeTab === 'conversations' && (
          <div>
            {/* Conversation list */}
            <h2 className="text-xl font-bold mb-4">Conversations</h2>
            {/* Your conversation list goes here */}
          </div>
        )}
        {activeTab === 'friends' && (
          <div>
            {/* Friend list */}
            <h2 className="text-xl font-bold mb-4">Friends</h2>
            {/* Your friend list goes here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default TabbedConversation;

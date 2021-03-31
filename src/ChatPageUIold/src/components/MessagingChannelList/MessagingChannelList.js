import React, { useContext, useEffect } from 'react';
import { Avatar, ChatContext } from 'stream-chat-react';

import './MessagingChannelList.css';
import { SkeletonLoader } from './SkeletonLoader';

import { CreateChannelIcon } from '../../assets';

const MessagingChannelList = ({ children, error = false, loading, onCreateChannel }) => {
  const { client, setActiveChannel } = useContext(ChatContext);
  const { id, image = require('../../assets/stream.png'), name = 'Example User' } = client.user || {};

  useEffect(() => {
    const getDemoChannel = async (client) => {
      const channel = client.channel('messaging', 'first', {
        name: 'Classwide Channel',
        image: "https://i.pinimg.com/originals/9e/ef/54/9eef54b8786e4d43a332e7cd28683d55.png"
      });
      await channel.watch();
      await channel.addMembers([client.user.id]);
      setActiveChannel(channel);
    };

    if (!loading && !children?.props?.children?.length) {
      getDemoChannel(client);
    }
  }, [loading]); // eslint-disable-line

  const ListHeaderWrapper = ({ children }) => {
    return (
      <div className='messaging__channel-list'>
        <div className='messaging__channel-list__header'>
          <Avatar image={image} name={name} size={40} />
          <div className='messaging__channel-list__header__name'>{name || id}</div>
          <button className='messaging__channel-list__header__button' onClick={onCreateChannel}>
            <CreateChannelIcon />
          </button>
        </div>
        {children}
      </div>
    );
  };

  if (error) {
    return (
      <ListHeaderWrapper>
        <div className='messaging__channel-list__message'>Error loading conversations, please try again momentarily.</div>
      </ListHeaderWrapper>
    );
  }

  if (loading) {
    return (
      <ListHeaderWrapper>
        <div className='messaging__channel-list__message'>
          <SkeletonLoader />
        </div>
      </ListHeaderWrapper>
    );
  }

  return <ListHeaderWrapper>{children}</ListHeaderWrapper>;
};

export default React.memo(MessagingChannelList);

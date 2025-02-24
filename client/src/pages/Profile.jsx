import { Avatar, Button, Container, Text } from '@mantine/core';
import React from 'react';
import { Tabs } from '@mantine/core';
import { Bookmark, Heart, Cog, Bot } from 'lucide-react';
import { getCookie } from '../utils/utils';

function Profile() {
  return (
    <Container className="max-w-2xl mx-auto">
      <div>
        <Avatar size="xl" />
        <Text>{getCookie('name')}</Text>
        <Text>{getCookie('email')}</Text>
        <Button variant="outline">Edit Profile</Button>
      </div>
      <Tabs defaultValue="gallery">
        <Tabs.List>
          <Tabs.Tab
            value="Bookmarks"
            leftSection={<Bookmark size={16} color="orange" />}
          >
            Bookmarks
          </Tabs.Tab>
          <Tabs.Tab
            value="messages"
            leftSection={<Heart size={16} color="red" />}
          >
            Liked News
          </Tabs.Tab>
          <Tabs.Tab value="preferences" leftSection={<Cog size={16} />}>
            Preferences
          </Tabs.Tab>
          <Tabs.Tab value="ai-recommandations" leftSection={<Bot size={16} />}>
            AI Recommandations
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>

        <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>

        <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
      </Tabs>
    </Container>
  );
}

export default Profile;

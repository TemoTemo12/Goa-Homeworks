import React from 'react';
import SocialLinksProfile from './components/SocialLinksProfile';
import QrCodeComponent from './components/QrCodeComponent';
import ArticlePreview from './components/ArticlePreview';
import HuddleLanding from './components/HuddleLanding';
import ProfileCard from './components/ProfileCard';

const App = () => {
  return (
    <div className="space-y-10 p-6">
      <SocialLinksProfile />
      <QrCodeComponent />
      <ArticlePreview />
      <HuddleLanding />
      <ProfileCard />
    </div>
  );
};

export default App;

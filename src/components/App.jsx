import { Profile } from "./profile/Profile";
import user from "../data/user.json";

const { username, tag, location, avatar, stats } = user

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={stats.followers}
        views={stats.views}
        likes={ stats.likes }
      />
      {/* React homework template */}
    </div>
  );
};

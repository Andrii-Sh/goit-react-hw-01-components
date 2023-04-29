import { Profile } from "./profile/Profile";
import { Statistics } from "./statistics/Statistics";
import user from "../data/user.json";
import statistics from "../data/statistics.json";

const { username, tag, location, avatar, stats } = user

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
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
      <Statistics
        title="upload stats"
        stats={ statistics }
      />
      {/* React homework template */}
    </div>
  );
};

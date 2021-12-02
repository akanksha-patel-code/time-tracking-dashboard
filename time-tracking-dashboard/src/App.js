import "./App.css";
import { UserProfile, UserDetails, UserProfilePicture, UserName,
  IntervalTypeFilter, IntervalTypeFilterItem} from "./components";

  import { Cards, Card, CardIcon, CardDetails, CardTitle, CardOptionsIcon,
    CardCurrentTrackedTime, CardPreviousTrackedTime } from "./components";

function App() {
  return (
    <div className="h-screen w-screen bg-gray-900 p-20 grid grid-cols-2">
      <UserProfile >
        <UserDetails>
          <UserProfilePicture />
          <UserName />
        </UserDetails>
        <IntervalTypeFilter>
          <IntervalTypeFilterItem />
        </IntervalTypeFilter>
      </UserProfile>

      <Cards>
        <Card>
          <CardIcon />
          <CardDetails>
            <CardTitle />
            <CardOptionsIcon />
            <CardCurrentTrackedTime />
            <CardPreviousTrackedTime />
          </CardDetails>
        </Card>
      </Cards>

    </div>
  );
}

export default App;

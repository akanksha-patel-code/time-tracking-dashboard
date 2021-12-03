import "./App.css";
import {
  UserProfile,
  UserDetails,
  UserProfilePicture,
  UserName,
  IntervalTypeFilter,
  IntervalTypeFilterItem,
  Cards,
  Card,
  CardIcon,
  CardDetails,
  CardTitle,
  CardOptionsIcon,
  CardCurrentTrackedTime,
  CardPreviousTrackedTime,
} from "./components";

function App() {
  return (
    <div className="h-screen w-screen bg-gray-900 py-20 sm:grid sm:grid-cols-2 flex">
      <UserProfile>
        <UserDetails>
          <UserProfilePicture />
          <UserName />
        </UserDetails>
        <IntervalTypeFilter>
          <IntervalTypeFilterItem />
        </IntervalTypeFilter>
      </UserProfile>

      <Cards>
        {[...Array(6)].map((x, i) => (
          <Card>
            <CardIcon />
            <CardDetails>
              <CardTitle />
              <CardOptionsIcon />
              <CardCurrentTrackedTime />
              <CardPreviousTrackedTime />
            </CardDetails>
          </Card>
        ))}
      </Cards>
    </div>
  );
}

export default App;

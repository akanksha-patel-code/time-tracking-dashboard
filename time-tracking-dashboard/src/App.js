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
    <div className="h-full lg:h-screen w-screen bg-gray-900 py-20 lg:py-48 lg:px-20 lg:grid lg:grid-cols-2">
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

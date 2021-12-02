import {
  Cards,
  UserProfile,
  CardTitle,
  CardOptionsIcon,
  CardCurrentTrackedTime,
  CardPreviousTrackedTime,
  CardIcon,
  UserProfilePicture,
  UserName,
  IntervalTypeFilterItem,
  CardDetails,
  Card,
  UserDetails,
  IntervalTypeFilter,
} from "./components";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;

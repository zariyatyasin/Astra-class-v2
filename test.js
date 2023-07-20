const handleTaskComplete = (index) => {
  const updatedHomeworkList = [...homeworkList];
  updatedHomeworkList[index].completed = !updatedHomeworkList[index].completed;
  setHomeworkList(updatedHomeworkList);
};
const [filter, setFilter] = useState("all");

<Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
  <h2>Student View</h2>
  {homeworkList.length > 0 ? (
    <StudentHomeworkList
      homeworkList={homeworkList}
      onTaskComplete={handleTaskComplete}
      filter={filter}
      setFilter={setFilter}
    />
  ) : (
    <Typography variant="body1">No homework tasks assigned.</Typography>
  )}
</Paper>;

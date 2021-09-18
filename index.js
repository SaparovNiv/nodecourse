const topNStudentsAttendees = (students, attendees, N) => {
  const allStudentsAttendess = {};
  attendees.map((attendeesPerLecture) => {
    [...new Set(attendeesPerLecture)].forEach((student) => {
      allStudentsAttendess[student] = (allStudentsAttendess[student] || 0) + 1;
    });
  });

  const ourStudentAttendees = students.map((student) => {
    return { name: student, attendess: allStudentsAttendess[student] };
  });
  return ourStudentAttendees
    .sort(
      (
        { name: nameA, attendess: attendessA },
        { name: nameB, attendess: attendessB }
      ) => attendessB - attendessA
    )
    .slice(0, N)
    .map(({ name }) => name);
};

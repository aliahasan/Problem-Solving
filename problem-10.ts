//Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.

type Student = {
  name: string;
  grades: number[];
};

const students: Student[] = [
  { name: "Alice", grades: [85, 90, 78] },
  { name: "Bob", grades: [70, 80, 65] },
  { name: "Charlie", grades: [95, 100, 92] },
  { name: "David", grades: [60, 75, 70] },
];

function sortStudentsByAverageGrade(studentsArray: Student[]): Student[] {
  return studentsArray.sort((a, b) => {
    const avgA =
      a.grades.reduce((sum, grade) => sum + grade, 0) / a.grades.length;
    const avgB =
      b.grades.reduce((sum, grade) => sum + grade, 0) / b.grades.length;
    return avgB - avgA;
  });
}

const sortedStudents = sortStudentsByAverageGrade(students);

console.log(sortedStudents);

export const gradesTypeDef = `
type Grade {
    id: Int!
    student_id: Int!
    course_code: Int!
    grad: Float!
}

input GradeInput {
    student_id: Int!
    course_code: Int!
    grad: Float!
}
`;

export const gradesQueries = `
    allGrades: [Grade]!
    gradeById(id: Int!): Grade!
`;

export const gradesMutations = `
    createGrade(grade: GradeInput!): Grade!
    deleteGrade(id: Int!): Grade!
    updateGrade(id: Int!, grade: GradeInput!): Grade!
`;

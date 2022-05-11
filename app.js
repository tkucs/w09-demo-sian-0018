const updateStudents = students.map( (student) => {

    student.role = 'student';
    //console.log(student);
    return student;
})

console.log('updateStudents', updateStudents);

const highScores = students.filter((student) => {
//    if(student.score > 85) {
//        return student;
//    }

//    if(student.score > 85) return student;
    return student.score > 85;
})
console.log('highScores',highScores);

const specificId = students.find( (student) => {
    return student.id === 1;
});
console.log('specificId',specificId);

const averageScore = students.reduce( (scoreTotal, student) => {
    //console.log('student', student);
    //console.log('scoreTotal', scoreTotal);
    return scoreTotal + student.score;
}, 0) / students.length;
console.log('averageScore',averageScore);

const survey = students.reduce((survey, student) => {
    //console.log('favoriteAnimal',student.favoriteAnimal);
    const favCourse = student.favoriteAnimal;
    if(survey[favCourse]) {
        survey[favCourse] = survey[favCourse] + 1;
    } else {
        survey[favCourse] = 1;
    }
    return survey;
},{});
console.log('survey', survey);
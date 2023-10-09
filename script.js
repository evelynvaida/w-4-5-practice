const data = [
    {
        name: "kovacs janos",
        age: 29,
        subjects: [
            {
                subjectName: "Maths",
                subjectGrade: 5
            },
            {
                subjectName: "Physics",
                subjectGrade: 3
            },
            {
                subjectName: "English",
                subjectGrade: 2
            }
        ]
    },
    {
        name: "kis peter",
        age: 16,
        subjects: [
            {
                subjectName: "Maths",
                subjectGrade: 2
            },
            {
                subjectName: "Physics",
                subjectGrade: 5
            },
            {
                subjectName: "English",
                subjectGrade: 4
            }
        ]
    },    {
        name: "lefold elek",
        age: 65,
        subjects: [
            {
                subjectName: "Maths",
                subjectGrade: 4
            },
            {
                subjectName: "Physics",
                subjectGrade: 2
            },
            {
                subjectName: "English",
                subjectGrade: 5
            }
        ]
    }
]

/* for(let i=0;i<data.length;i++) {
    console.log(data[i].name)
} */

//data.forEach(student => console.log(student.name))

data.forEach(student => {
    console.log(student.name)
    student.subjects.forEach(subject => console.log(`${subject.subjectName}: ${subject.subjectGrade}`))
})
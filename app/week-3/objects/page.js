
export default function ObjectsPage() {

    let studentOne = {
        studentName: "John Doe",
        studentAge: 25,
        hasGraduated: false,
        schedule: ["CPRG123", "CPRG456", "CPRG789", "CPRG306"],
        address: {
            line1: "123 Main St",
            city: "Calgary",
            province: "AB",
        },
    };

    let {
        studentName: personName,
        studentAge,
        // schedule: [,,,webdev2],
        schedule: {3: webdev2}, // target specific index
        address: {city}
    } = studentOne;

    return (
        <main>
            <h1>Objects</h1>
            <h2>Dot Notation</h2>
            <p>Name: {studentOne.studentName}</p>
            <p>Age: {studentOne.studentAge}</p>
            <p>Graduated: {studentOne.hasGraduated ? "Yes" : "No"}</p>
            <p>Web Dev 2: {studentOne.schedule[3]}</p>
            <p>City: {studentOne.address.city}</p>
            <h2>Destructuring</h2>
            <p>Name: {personName}</p>
            <p>Age: {studentAge}</p>
            <p>Web Dev 2: {webdev2}</p>
            <p>City: {city}</p>
        </main>
    );
}
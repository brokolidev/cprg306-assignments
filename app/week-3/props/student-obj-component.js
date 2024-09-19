export default function StudentObjComp({studentObj}) {

    let {
        studentName,
        studentAge,
        address: {
            city,
            province
        }
    } = studentObj;

    return (
        <div>
            <h3>{studentName}</h3>
            <p>Age: {studentAge}</p>
            <p>{city}, {province}</p>
        </div>
    );
}
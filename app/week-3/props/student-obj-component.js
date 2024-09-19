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
        <div className="bg-green-800 mb-10 text-white p-10">
            <h3>{studentName}</h3>
            <p>Age: {studentAge}</p>
            <p>{city}, {province}</p>
        </div>
    );
}
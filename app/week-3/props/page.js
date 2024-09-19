import StudentComp from "@/app/week-3/props/student-component";
import StudentObjComp from "@/app/week-3/props/student-obj-component";

export default function PropsPage() {

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

    let studentTwo = {
        studentName: "Jane Doe",
        studentAge: 30,
        address: {
            city: "Edmonton",
            province: "AB",
        },
    };

    return (
        <main>
            <StudentComp
                sName="Keven"
                sAge="32"
                sCity="Lethbridge"
                sProvince="AB" />

            <StudentComp
                sName={studentOne.studentName}
                sAge={studentOne.studentAge}
                sCity={studentOne.address.city}
                sProvince={studentOne.address.province} />

            <StudentObjComp studentObj={studentOne} />
            <StudentObjComp studentObj={studentTwo} />
        </main>
    );
}
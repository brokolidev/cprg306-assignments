import Link from "next/link";

export default function StudentInfo() {
    return(
        <div>
            <p>My Name : Hyun Seung Choi</p>
            <Link href="https://github.com/brokolidev/cprg306-assignments">
                Click to go the Github repository
            </Link>
        </div>
    );
}
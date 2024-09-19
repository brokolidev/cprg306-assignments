export default function StudentComp({sName, sAge, sCity, sProvince}) {

    return (
        <div>
            <h3>{sName}</h3>
            <p>Age: {sAge}</p>
            <p>{sCity}, {sProvince}</p>
        </div>
    );
}
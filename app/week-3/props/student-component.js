export default function StudentComp({sName, sAge, sCity, sProvince}) {

    return (
        <div className="inline-block border border-emerald-600 bg-amber-400 mx-10 my-5 p-5">
            <h3>{sName}</h3>
            <p>Age: {sAge}</p>
            <p>{sCity}, {sProvince}</p>
        </div>
    );
}
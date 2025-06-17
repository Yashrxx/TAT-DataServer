import './Card.css'

function Card({ data }) {

    return (
        // <div className="container">
        //     <ul>
        //     <li>shoulderShoulder : {data.shoulderShoulder}</li>
        //     <li>shoulderApex : {data.shoulderApex}</li>
        //     <li>shoulderUnderBurst : {data.shoulderUnderBurst}</li>
        //     <li>apexApex : {data.apexApex}</li>
        //     <li>chestCircumference : {data.chestCircumference}</li>
        //     <li>waistCircumference : {data.waistCircumference}</li>
        //     <li>waistLength : {data.waistLength}</li>
        //     <li>hipLength : {data.hipLength}</li>
        //     <li>hipRound : {data.hipRound}</li>
        //     <li>armHole : {data.armHole}</li>
        //     <li>neckDeepFront : {data.neckDeepFront}</li>
        //     <li>neckDeepBack : {data.neckDeepBack}</li>
        //     <li>shoulderNavel : {data.shoulderNavel}</li>
        //     </ul>
        // </div>
        <div className="container">
            <ul>
                {Object.entries(data).map(([key, value]) => {
                    // Skip internal Mongo fields
                    if (key === '_id' || key === '__v') return null;

                    // Format createdAt field
                    if (key === 'createdAt') {
                        const formattedDate = new Date(value).toLocaleDateString('en-IN', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        });
                        return (
                            <li key={key}>
                                <strong>{key}</strong>: {formattedDate}
                            </li>
                        );
                    }

                    return (
                        <li key={key}>
                            <strong>{key}</strong>: {value}
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}
export default Card;
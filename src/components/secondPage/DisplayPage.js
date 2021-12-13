import Calculations from "./Calculations"

// displays page with given calculations
const DisplayPage = ({ data }) => {
    return (
        <div>
            <Calculations data={data} />
        </div>

    )
}

export default DisplayPage
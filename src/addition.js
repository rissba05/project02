const Addition = ({numberOne, numberTwo}) => {

    const sumOfNumbers = numberOne + numberTwo;

    return (
        <p>{numberOne} + {numberTwo} = {sumOfNumbers}</p>
    )
}

export default Addition;
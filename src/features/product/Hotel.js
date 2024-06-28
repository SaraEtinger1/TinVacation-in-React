const Hotel = ({one}) => {
    return (  <>
      <h2>{one.hotelName}</h2>
            <h3>{one.adress}</h3>
            <h3>{one.roomType}</h3>
            <h3>{one.price}</h3>
            <h3>{one.opinion}</h3>
    </>);
}
 
export default Hotel;
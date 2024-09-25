const Card = ({ usreData, searchName }) => {
  return (
    <>
      <div className="cards">
        {usreData
          .filter((name) => {
            if (searchName === "") {
              return name;
            } else if (
              name.first_name
                .toLocaleLowerCase()
                .includes(searchName.toLocaleLowerCase())
            ) {
              return name;
            }
          })
          .map((user) => (
            <div key={user.mobileNumber} className="card">
              <h2>{user.first_name}</h2>
              <h3>{user.last_name}</h3>
              <p>{user.email}</p>
              <p>{user.mobileNumber}</p>
              <p>{user.gender}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Card;

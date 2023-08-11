import styles from "./styling.css"

const Table = ({ sat }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {sat.map((data, id) => {
          let isActive;
          if (data.operational === true) {
            isActive = "Active"
          }  else {
            isActive = "Inactive"
          }
                
          return (
            <tr key={id}>
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.launchDate}</td>           
              <td>{isActive}</td>
            </tr>
          )

        })}

      </tbody>
    </table>
  );
};

export default Table;



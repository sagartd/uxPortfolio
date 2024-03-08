import "./styles/journeyMap.css";

const JourneyMap = ({ projectJourneyMap }) => {
  const {
    slideIcon,
    slideTitle,
    slideStatement,
    slidePersonaName,
    slidePersonaAbout,
    slideTable,
  } = projectJourneyMap;
  return (
    <div className="journeyMap-container">
      <div className="journeyMap-info">
        <div className="journeyMap-info-heading">
          <img src={slideIcon} alt="" />
          <h3>{slideTitle}</h3>
        </div>
        <div className="journeyMap-info-statement">
          <p>{slideStatement}</p>
        </div>
        <div className="journeyMap-info-persona">
          <h5>{slidePersonaName}</h5>
          <p>{slidePersonaAbout}</p>
        </div>
      </div>
      <div className="journeyMap-table">
        <div className="table-container">
          <table>
            {slideTable.map((elm) => {
              return elm.id === 1 ? (
                <thead key={elm.id}>
                  <tr>
                    {elm.tableHeadTitle.map((thElm) => (
                      <th key={thElm.id}>{thElm.title}</th>
                    ))}
                  </tr>
                </thead>
              ) : (
                <tbody key={elm.id}>
                  {elm.tableBodyTitle &&
                    elm.tableBodyTitle.map((tbElm) => (
                      <tr key={tbElm.id}>
                        {tbElm.tableRowData.map((trElm) => (
                          <td key={trElm.id}>
                            {trElm.rowData.map((e) => (
                              <p key={e.id}>{e.rowDataInfo}</p>
                            ))}
                          </td>
                        ))}
                      </tr>
                    ))}
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default JourneyMap;

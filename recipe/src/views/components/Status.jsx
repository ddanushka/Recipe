

function Status(params) {
  return (
    <div className="status">
      {params.data == null ? (
        <span>data not found</span>
      ) : params.error ? (
        <span>{params.error}</span>
      ) : (
        <span className="status__text">Loading...</span>
      )}
    </div>
  );
}

export default Status;

function Status(params) {
  return (
    <div>
      {params.data == null ? (
        <span>data not found</span>
      ) : params.error ? (
        <span>{params.error}</span>
      ) : (
        <span>Loadingss</span>
      )}
    </div>
  );
}

export default Status;

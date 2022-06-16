function Status(params) {
  return (
    <div className="status">
      <span className="status__text">
        {params.data == null
          ? "Oops! That's not available, try something else..."
          : params.error
          ? params.error
          : "Loading..."}
      </span>
    </div>
  );
}

export default Status;

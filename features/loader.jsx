export default function Loader({ loading, success, error }) {
  return (
    <>
      {loading && <div className="text-gray-500">loading...</div>}
      {success && !loading && (
        <div className="text-green-500">data has added to db</div>
      )}
      {error && <div className="text-red-500">{error}</div>}
    </>
  );
}

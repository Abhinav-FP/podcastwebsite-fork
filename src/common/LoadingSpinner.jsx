export default function LoadingSpinner({ count = 4 }) {
  return (
    <>
      {[...Array(count)].map((_, i) => (
        <div key={i} className="rounded-lg p-3 animate-pulse">
          <div className="w-full h-[223px] bg-gray-700 rounded-lg" />
          <div className="h-5 bg-gray-700 rounded mt-4 w-3/4 mx-auto" />
          <div className="h-4 bg-gray-700 rounded mt-2 w-5/6 mx-auto" />
          <div className="h-10 bg-gray-700 rounded-full mt-4 w-1/2 mx-auto" />
        </div>
      ))}
    </>
  );
}

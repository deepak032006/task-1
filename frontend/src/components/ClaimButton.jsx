export default function ClaimButton({ handleClaim, claimedPoints }) {
  return (
    <div className="mb-4">
      <button onClick={handleClaim} className="bg-green-500 text-white px-4 py-2 rounded">
        Claim Points
      </button>
      {claimedPoints && (
        <p className="mt-2">You claimed <strong>{claimedPoints}</strong> points!</p>
      )}
    </div>
  );
}

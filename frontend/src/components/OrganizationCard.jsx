function OrganizationCard({ org }) {
  return (
    <div className="card">
      <h3>{org.name}</h3>

      <p>{org._id}</p>
    </div>
  );
}

export default OrganizationCard;
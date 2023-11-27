const ProfileDetails = ({ title, children }) => {
  return (
    <div className="profile_details">
      <div className="title">{title}</div>
      {children}
    </div>
  );
};

export default ProfileDetails;

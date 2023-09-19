import { useRouter } from "next/router";
import type { NextPage } from "next";

const Profile: NextPage = () => {
  const router = useRouter();
  const { address } = router.query;

  const styles = {
    profileContainer: {
      fontFamily: "Arial, sans-serif",
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      borderRadius: "8px",
    },
    linksContainer: {
      marginTop: "20px",
    },
    link: {
      marginRight: "15px",
      textDecoration: "none",
      color: "#0070f3",
      fontWeight: "bold",
      border: "1px solid #0070f3",
      padding: "5px 15px",
      borderRadius: "5px",
      transition: "background-color 0.3s",
    },
    githubLink: {
      backgroundColor: "#24292e",
      color: "#ffffff",
    },
  };

  return (
    <div style={styles.profileContainer}>
      <h1>User Profile</h1>
      <p>Address: {address}</p>
      <div style={styles.linksContainer}>
        <a
          href="https://github.com/mockup-user"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...styles.link, ...styles.githubLink }}
        >
          GitHub Profile
        </a>
        <a
          href="https://mockup-substack-user.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          Substack Profile
        </a>
      </div>
    </div>
  );
};

export default Profile;

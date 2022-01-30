import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
const axios = require("axios").default;
import Router, { useRouter } from "next/router";

function EachHero({ heros }) {
  const router = useRouter();
  const heroId = router.query.id;

  const deleteHero = async () => {
    try {
      const deleteHero = await axios(
        `http://localhost:3000/api/hero/${heroId}`,
        {
          method: "DELETE",
        }
      );
      Router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1 className="display-3">Identity of Hero</h1>
      <MDBCard className="border border-2 my-2" style={{ maxWidth: "22rem" }}>
        <MDBCardBody>
          <MDBCardTitle>{heros.superHero}</MDBCardTitle>
          <MDBCardText>{heros.realName}</MDBCardText>
          <MDBBtn onClick={deleteHero} className="btn btn-danger">
            Delete Hero
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const id = params.id;
  const res = await axios.get(`http://localhost:3000/api/hero/${id}`);
  const { hero } = res.data;
  //console.log(hero);
  return {
    props: { heros: hero },
  };
}

export default EachHero;

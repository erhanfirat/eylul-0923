/*

props = {
  userName: "asdasd",
  language: "tr"
}

*/

function Greeting({ userName, language }) {
  // console.log("Greeting props:", props);
  // const { userName, language } = props;

  return (
    <div title={"dil " + language}>
      <h1>Merhaba Sayın {userName}</h1>
    </div>
  );
}

export default Greeting;

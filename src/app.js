import "./style.css";
window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    let randomNumber = Math.random() * 10;
    document.querySelector("#mt-5").innerHTML = generateLovePhrase();
  });
  console.log("POOKIE");
};

let generateLovePhrase = () => {
  let pronoun = ["My", "My"];
  let subject = ["Pookie", "Roob"];
  let action = ["has", "has"];
  let adjective = ["handsome", "smart", "pretty", "gorgeous", "cute", "nice", "adorable", "great",
  "insane", "gek","beautiful", "abnormal","baby"];
  let noun = ["eyes", "face","body", "smile", "hair", "brows", "nose", "eyelashes", "cheeks" ]


  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let adjectiveIndex = Math.floor(Math.random() * adjective.length);
  let nounIndex = Math.floor(Math.random() * noun.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    adjective[adjectiveIndex] +
    " " +
    noun[nounIndex] +
    " "
  );
};

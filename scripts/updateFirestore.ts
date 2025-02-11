import { firestoreDb } from "./../firebaseConfig";
import { collection, doc, setDoc } from "firebase/firestore";
import * as fs from "fs";
import * as path from "path";


const DATA_DIR = path.join(__dirname, "../data");

const readJSONFile = (filePath: string) => {
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
};

const updateCollections = async () => {
  try {
    const files = fs.readdirSync(DATA_DIR);
    for (const file of files) {
      if (file.endsWith(".json")) {
        const collectionName = path.basename(file, ".json");
        const jsonData = readJSONFile(path.join(DATA_DIR, file));

        console.log(`Mise à jour de la collection: ${collectionName}`);

        const collectionRef = collection(firestoreDb, collectionName);

        for (const [docId, docData] of Object.entries(jsonData)) {
          await setDoc(doc(collectionRef, docId), docData);
        }
      }
    }

    console.log("Mise à jour terminée !");
  } catch (error) {
    console.error("Erreur lors de la mise à jour des collections :", error);
  }
};


updateCollections();

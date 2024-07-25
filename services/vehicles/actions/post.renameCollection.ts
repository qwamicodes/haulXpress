import {
  collection,
  getDocs,
  setDoc,
  deleteDoc,
  DocumentData,
  doc,
} from 'firebase/firestore';
import { db } from '../../../config/firebase';
import { AppDispatch } from '../../../store';
import { togglePending } from '../../../store/slices/authSlice';

const renameCollection =
  (originalCollection: string, newCollection: string) =>
  async (dispatch: AppDispatch) => {
    dispatch(togglePending(true));

    try {
      // Retrieve documents from the original collection
      const originalCollectionRef = collection(db, originalCollection);
      const querySnapshot = await getDocs(originalCollectionRef);

      // Create a new collection
      const newCollectionRef = collection(db, newCollection);

      // Iterate through the documents and move them to the new collection
      querySnapshot.forEach(async docu => {
        const documentData = docu.data() as DocumentData;

        // Create a new document in the new collection
        const newDocumentRef = doc(db, `${newCollection}/${docu.id}`);
        await setDoc(newDocumentRef, documentData);

        // Delete the original document
        const originalDocumentRef = doc(db, `${originalCollection}/${docu.id}`);
        await deleteDoc(originalDocumentRef);
      });
    } finally {
      dispatch(togglePending(false));
    }
  };

export default renameCollection;

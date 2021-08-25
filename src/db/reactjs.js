import firebase from './../config/firebase';
const REACTJS_COLLECTION = 'reactjs';

export const getReactProjects = async ()=> {
    const snapshots = await firebase
    .firestore()
    .collection(REACTJS_COLLECTION)
    .get()

    if (snapshots.empty){
        return [];
    }

    const results = snapshots.docs.map((doc)=> {
        return {
            id: doc.id,
            ...doc.data(),
        }
    });
    return results;
}

export const getReactById = async (id)=> {
 
    const reactjs = await firebase
    .firestore()
    .collection(REACTJS_COLLECTION)
    .doc(id)
    .get();

    if (!reactjs.exists) {
      return null;
    }
  
    const reactDoc = {
      id: reactjs.id,
      ...reactjs.data()
    }
    return reactDoc;
};
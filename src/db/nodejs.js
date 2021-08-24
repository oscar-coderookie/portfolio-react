import firebase from './../config/firebase';
const NODEJS_COLLECTION = 'nodejs';

export const getNodejsProjects = async (id)=> {
    const snapshots = await firebase
    .firestore()
    .collection(NODEJS_COLLECTION)
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

export const getNodejsById = async (id)=> {
 
    const nodejs = await firebase
    .firestore()
    .collection(NODEJS_COLLECTION)
    .doc(id)
    .get();

    if (!nodejs.exists) {
      return null;
    }
  
    const nodeDoc = {
      id: nodejs.id,
      ...nodejs.data()
    }
    return nodeDoc;
};
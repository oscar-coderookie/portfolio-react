import firebase from './../config/firebase';
const ANGULAR_COLLECTION = 'angular';

export const getAngularProjects = async (id)=> {
    const snapshots = await firebase
    .firestore()
    .collection(ANGULAR_COLLECTION)
    .onSnapshot();

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

export const getAngularById = async (id)=> {
 
    const angular = await firebase
    .firestore()
    .collection(ANGULAR_COLLECTION)
    .doc(id)
    .get();

    if (!angular.exists) {
      return null;
    }
  
    const angularDoc = {
      id: angular.id,
      ...angular.data()
    }
    return angularDoc;
};
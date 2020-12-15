import { firestore } from "./config"

export const createUserDocument = async (user) => {
    //get the reference to the Firestore document

    const docRef = firestore.doc(`/user/${user.uid}`)

    const userProfile = {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        address: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        specialty: '',
        ip: '',
    }
    //write to cloud firestore

    return docRef.set(userProfile)
}
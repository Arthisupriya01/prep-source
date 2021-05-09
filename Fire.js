import  firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDKs52qFVamisLXcD-aEiDA_wTMxj5VCmk",
    authDomain: "prep-source.firebaseapp.com",
    databaseURL: "https://prep-source.firebaseio.com",
    projectId: "prep-source",
    storageBucket: "prep-source.appspot.com",
    messagingSenderId: "784516121403",
    appId: "1:784516121403:web:8966141bb7587c8c2d2d1e",
    measurementId: "G-RDSGZK4G0S"
};

class Fire {
    constructor(props) {
        firebase.initializeApp(firebaseConfig);
    }

    createUser = async user => {
        try {
            await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
            let db = this.Firestore.collection('users').doc(this.uid)
            db.set({
                name: user.name,
                email: user.email,




            })

        } catch (error) {
            alert(error)
        }
    }
    login = async user => {
        try {
            await firebase.auth().signInWithEmailAndPassword(user.email, user.password);

        } catch (error) {
            alert(error);

        }
    }

    signOutMethod = async () => {
        await firebase.auth().signOut();
    }

    get Firestore() {
        return firebase.firestore();
    }
    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }
    get timestamp() {
        return Date.now();
    }
}

Fire.shared = new Fire();
export default Fire;

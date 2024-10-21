import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
import {
    getFirestore,
    doc,
    getDoc,
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCeZJXEzkXjw6ippXFlyFac68BpMYH4xyc",
    authDomain: "jkhugyftdrfc.firebaseapp.com",
    projectId: "jkhugyftdrfc",
    storageBucket: "jkhugyftdrfc.appspot.com",
    messagingSenderId: "995345481907",
    appId: "1:995345481907:web:ef9d901abe951eba7270c6",
    measurementId: "G-GZ58WMVL7V",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export async function fetchKey() {
    try {
        const docRef = doc(db, "vertex_sso", "WF1wzmy3gyRzJCBOC0Dt");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists) {
            const data = docSnap.data();
            console.log(data);
            return data.vertex_sso;
        } else {
            console.log("No such document!");
            return null;
        }
    } catch (error) {
        console.error("Error fetching document:", error);
        return null;
    }
}

async function displaySSOKey() {
    const ssoKeyElement = document.getElementById('ssoKey');
    const loader = document.getElementById('loader');
    
    // Show the loader
    loader.style.display = 'block';
    
    const ssoKey = await fetchKey();
    
    // Hide the loader
    loader.style.display = 'none';
    
    if (ssoKey) {
        ssoKeyElement.textContent = ssoKey; // Display the key
    } else {
        ssoKeyElement.textContent = 'No SSO key found.'; // Handle case where key is not found
    }
}

// Run displaySSOKey when the window loads
window.onload = displaySSOKey;

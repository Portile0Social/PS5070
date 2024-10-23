import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
import {
    getFirestore,
    doc,
    getDoc,
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

// Firebase config and initialization
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

// Fetch the SSO key from Firestore
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

// Fetch the password:hotdog from GitHub
export async function fetchPassword() {
    const url = "https://raw.githubusercontent.com/Eminence5070/Eminence5070.github.io/refs/heads/master/data/%24password";
    try {
        const response = await fetch(url);
        if (response.ok) {
            const text = await response.text();
            return text.trim();  // Ensure we remove any extra spaces or newlines
        } else {
            console.error("Error fetching password:", response.statusText);
            return null;
        }
    } catch (error) {
        console.error("Error fetching password:", error);
        return null;
    }
}

// Display the SSO key and password in the HTML
async function displayInfo() {
    const ssoKeyElement = document.getElementById('ssoKey');
    const passwordElement = document.getElementById('password');
    const loader = document.getElementById('loader');
    const loadingText = document.getElementById('loadingText');

    // Show the loader
    loader.style.display = 'block';
    loadingText.textContent = 'Fetching SSO key and password...';

    const ssoKey = await fetchKey();
    const password = await fetchPassword();

    // Hide the loader and show success message
    loader.style.display = 'none';
    loadingText.textContent = 'Fetch successful!';

    // Display the SSO key and password
    if (ssoKey) {
        ssoKeyElement.textContent = `SSO Key: ${ssoKey}`;
    } else {
        ssoKeyElement.textContent = 'No SSO key found.';
    }

    if (password) {
        passwordElement.textContent = `Password: ${password}`;
        passwordElement.style.color = 'green';
    } else {
        passwordElement.textContent = 'No password found.';
    }
}

// Run displayInfo when the window loads
window.onload = displayInfo;


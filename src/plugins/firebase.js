import Firebase from 'firebase'

// Initialize Firebase
let config = {
  apiKey: 'AIzaSyBiYHYZ7Leb7Sk5P4jcnP76kBzpA2vgbgA',
  authDomain: 'fbstudy-ricardoamb.firebaseapp.com',
  databaseURL: 'https://fbstudy-ricardoamb.firebaseio.com',
  projectId: 'fbstudy-ricardoamb',
  storageBucket: 'fbstudy-ricardoamb.appspot.com',
  messagingSenderId: '221697304895'
}

const conn = Firebase.initializeApp(config)
const db = conn.database()
const auth = conn.auth()

export default function install (Vue, { router }) {
  auth.onAuthStateChanged(user => {
    if (!user) {
      router.push({ path: 'auth' })
    }
  })
  Object.defineProperties(Vue.prototype, {
    $db: {
      get () {
        return db
      }
    },
    $auth: {
      get () {
        return auth
      }
    }
  })
}

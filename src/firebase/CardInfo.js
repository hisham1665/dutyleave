import { collection, getDocs } from "firebase/firestore";
import  {useState , useEffect} from 'react'
import { db } from "./cofig";
export default function CardInfo() {
    const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "Application"));
          const items = [];
          querySnapshot.forEach((doc) => {
            items.push({ id: doc.id, ...doc.data() }); // Combine doc id with data
          });
          setData(items);

        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      };
  
      fetchData();
    }, []);
    return data;
}

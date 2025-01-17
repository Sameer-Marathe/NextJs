import axios from "axios";

const getUserdetails = async()=>{
  // await new Promise((r)=>{setTimeout(r,5000)})
  const response = await axios.get("http://localhost:3000/api/user")
    return response.data
}

//async component
export default async function Home() {
  const userData = await getUserdetails()
  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userData?.name}
                </div>
                
                {userData?.email}
            </div>
        </div>
    </div>
  );
}

import Navbar from "~/components/navbar"
import Main from "~/components/main"
import Contacts from "~/components/contacts";

export default function Home(){
  return(
    <>
      <title>WELBEX</title>
      <Navbar/>
      <Main/>
      <Contacts/>
    </>
  )
}
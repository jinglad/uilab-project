import { styled } from '@material-ui/styles';
import Head from 'next/head'
import Header from '../components/Header';
import Sidebar from "../components/Sidebar";


export default function Home() {
  return (
    <>
      <Head>
        <title>UILab Task</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeConatiner>
        <Sidebar />
        <div style={{ width: "85%" }}>
          <Header />
        </div>
      </HomeConatiner>
    </>
  )
}

const HomeConatiner = styled("div")({
  display: "flex",
});
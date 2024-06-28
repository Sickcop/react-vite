import FollowCard from "./components/followCard"

export function App() {

  const users = [
    {
      userName:'sickcop',
      isFollowing:true,
      name:'Juan Manuel'
    },
    {
      userName:'victoria_brave',
      isFollowing:true,
      name:'Victoria Sanchez'
    },
    {
      userName:'utppereira',
      isFollowing:false,
      name:'UTP'
    }
  ]

  return (
    <>
    {
      users.map((data) => (<FollowCard userName={data.userName} isFollow={data.isFollowing} name={data.name}/>))
    }
    </>
  )
}
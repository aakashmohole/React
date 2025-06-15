import React from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    // const [data, setData] = React.useState(null);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/aakashmohole')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data);
    //         })
    //         .catch(error => console.error('Error fetching data:', error));
    // },[])

   const data = useLoaderData();

  return (
  <>
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      <p>Followers: {data?.followers || 0}</p>
      {data?.avatar_url ? (
        <img src={data.avatar_url} alt="Git Picture" width={300} />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  </>
);

}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/aakashmohole')
    return response.json();
}

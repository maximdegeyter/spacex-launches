import Image from 'next/image'

export default function Launch({ launch }) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <div key={launch.id} className="flex flex-col bg-white rounded-bl-md rounded-br-md shadow-2xl">
      <h2 className="text-gray-700 text-lg font-semibold font-mono my-2 mx-4">{launch.mission_name}</h2>
      {launch.links.flickr_images[0] ? (
        <div className="order-first">
          <Image
            src={launch.links.flickr_images[0]}
            alt={launch.rocket.rocket_name}
            width="100%"
            height="40%"
            layout="responsive"
            objectFit="cover"
            className="rounded-tl-md rounded-tr-md"
          />
        </div>

    ) : (
        <div className="order-first">
          <Image
            src="/rocket.jpg"
            alt="pic of rocket"
            width="100%"
            height="40%"
            layout="responsive"
            objectFit="cover"
            className="rounded-tl-md rounded-tr-md"
          />
        </div>
    )}
    <div className="flex mx-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 mr-1" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
      </svg>
      <p className="text-gray-600">{launch.launch_site.site_name_long}</p>
    </div>
    <div className="flex justify-between justify-self-end text-sm m-4">
      <p className="text-gray-500"> {new Date(launch.launch_date_local).toLocaleDateString('en-US', options)}</p>
      <a className="text-blue-700 font-bold hover:underline" href={launch.links.video_link} target="_blank" rel="noreferrer">Watch it &gt;</a>
    </div>
    </div>
  )
}
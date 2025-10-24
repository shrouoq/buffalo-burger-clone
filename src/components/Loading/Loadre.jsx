import { BounceLoader } from 'react-loadly';

function Loader() {
  return (
    <div className='fixed w-full h-full bg-[rgba(0,0,0,.5)] flex justify-center items-center top-0 left-0'>
        <BounceLoader
            color="rgb(255 95 0)"
            size={50}
            speed={1}
            loadingText="Loading..."
            count={3}
            borderWidth={4}
            className='loader'
      />
    </div>
  );
}

export default Loader;
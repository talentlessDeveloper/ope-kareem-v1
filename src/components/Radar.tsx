const Radar = () => {
  return (
    <div className='outer-circle w-full h-full rounded-full shadow-md relative'>
      <div className='green-scanner absolute w-full h-full rounded-full  animate-scan'></div>
    </div>
  );
};

export default Radar;

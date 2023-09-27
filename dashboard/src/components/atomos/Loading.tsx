const Loading = () => {
  return (
    <div className="flex gap-2 bg-transparent h-full justify-center items-center">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;

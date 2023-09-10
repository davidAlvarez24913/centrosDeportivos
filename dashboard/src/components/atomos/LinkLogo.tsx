const LinkLogo = () => {
  return (
    <div className="mx-auto">
      <a
        href="/reservaciones"
        className="flex no-underline items-end px-3 py-3 pointer-events-none"
      >
        <img
          src="/icons/logo.svg"
          alt="logo"
          width={52}
          height={56}
          className="text-customText md:pt-10 pb-1"
        />
        <p className=" text-customText -left-1 font-semibold text-2xl">asTas</p>
      </a>
    </div>
  );
};

export default LinkLogo;

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <h1 className="text-[50px] font-bold my-3">Our Works</h1>
      {children}
    </div>
  );
};

export default layout;

export const metadata = {
  title: "DesignX - Portfolio",
  description: "This is the portfolio page of DesignX.",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-17">
      <h1 className="text-[50px] font-bold my-3">Our Works</h1>
      {children}
    </div>
  );
};

export default layout;

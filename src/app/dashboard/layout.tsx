export const metadata = {
  title: "DesignX - dashboard",
  description: "This is the dashboard page.",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>This is the auth layout page.</h1>
      {children}
    </div>
  );
};

export default layout;

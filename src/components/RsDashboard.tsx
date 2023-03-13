import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import LargeHeading from "./ui/LargeHeading";
import Paragraph from "./ui/Paragraph";

const RsDashboard = async ({}) => {
  const user = await getServerSession(authOptions);
  if (!user) return notFound();

  return (
    <div className="container flex flex-col gap-6">
      <LargeHeading>Welcome back, {user.user.name}</LargeHeading>
      <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center">
        <Paragraph>Your API key:</Paragraph>
      </div>

      <Paragraph className="text-center md:text-left mt-4 -mb-4">
        Your API history:
      </Paragraph>
    </div>
  );
};

export default RsDashboard;

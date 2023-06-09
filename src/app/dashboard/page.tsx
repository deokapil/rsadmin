import RsDashboard from "@/components/RsDashboard";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";

import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Similarity API | Dashboard",
  description: "Free & open-source text similarity API",
};

const page = async () => {
  const user = await getServerSession(authOptions);
  if (!user) return notFound();

  return (
    <div className="max-w-7xl mx-auto mt-16">
      {
        // @ts-expect-error Server Component
        <RsDashboard />
      }
    </div>
  );
};

export default page;

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import CompanyView from "@/components/Partners/AVOD";

export const metadata: Metadata = {
  title: "Next.js Profile | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Profile page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const Profile = () => {
  return (
    <DefaultLayout>
      < CompanyView />     
    </DefaultLayout>
  );
};

export default Profile;

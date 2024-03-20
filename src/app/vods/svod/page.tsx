import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import SVOD from "@/components/Vods/SVOD";
// import TableThree from "@/components/Tables/TableThree";
// import TableTwo from "@/components/Tables/TableTwo";
// import FormElements from "@/components/FormElements";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const SvodPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="SVOD" />

      <div className="flex flex-col gap-10">
        <SVOD />
    
      </div>
    </DefaultLayout>
  );
};

export default SvodPage;

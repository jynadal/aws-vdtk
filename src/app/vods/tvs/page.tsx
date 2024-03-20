import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import FilmsAtTV from "@/components/Vods/FilmsAtTV";
// import TableThree from "@/components/Tables/TableThree";
// import TableTwo from "@/components/Tables/TableTwo";
//import FormElements from "@/components/FormElements";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Planifier, enregistrer votre films préferé depuis une seul plateforme | Free, SFR, Orange",
  description:
    "Tous vos films à la télèvision sur une seul plateforme. Avec Enregistrement. TF1, France Télésion, M6, RTL9, .",
};

const TvsPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Chaines" />

      <div className="flex flex-col gap-10">
        <FilmsAtTV />
    
      </div>
    </DefaultLayout>
  );
};

export default TvsPage;

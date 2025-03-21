import React from "react";
export default function UserConditions() {
  return (
    <>
      <div className="container mx-auto p-6 mt-[70px]">
        <h1 className="text-3xl font-bold mb-4">
          Conditions d&apos;Utilisation
        </h1>

        <h2 className="text-2xl font-semibold mt-6">1. Introduction</h2>
        <p className="mb-4">
          Bienvenue sur notre site. En accédant à ce site, vous acceptez ces
          conditions d&apos;utilisation.
        </p>

        <h2 className="text-2xl font-semibold mt-6">2. Utilisation du Site</h2>
        <p className="mb-4">
          Vous vous engagez à ne pas utiliser le site à des fins illégales ou
          interdites par ces conditions.
        </p>

        <h2 className="text-2xl font-semibold mt-6">
          3. Propriété Intellectuelle
        </h2>
        <p className="mb-4">
          Tous les contenus de ce site sont protégés par des droits
          d&apos;auteur et ne peuvent être utilisés sans autorisation.
        </p>

        <h2 className="text-2xl font-semibold mt-6">
          4. Limitation de Responsabilité
        </h2>
        <p className="mb-4">
          Nous ne garantissons pas l&apos;exactitude des informations et
          déclinons toute responsabilité pour leur utilisation.
        </p>

        <h2 className="text-2xl font-semibold mt-6">
          5. Modifications des Conditions
        </h2>
        <p className="mb-4">
          Nous nous réservons le droit de modifier ces conditions à tout moment.
        </p>

        <h2 className="text-2xl font-semibold mt-6">6. Contact</h2>
        <p className="mb-4">
          Pour toute question, contactez-nous à{" "}
          <a
            href="mailto:contact@monsite.com"
            className="text-blue-600 underline"
          >
            contact@monsite.com
          </a>
          .
        </p>
      </div>
    </>
  );
}

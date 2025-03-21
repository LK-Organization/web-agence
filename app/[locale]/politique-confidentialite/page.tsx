import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Politique de Confidentialité</title>
        <meta
          name="description"
          content="Politique de confidentialité du site."
        />
      </Head>
      <div className="container mx-auto p-6 mt-[70px]">
        <h1 className="text-3xl font-bold mb-4">
          Politique de Confidentialité
        </h1>

        <h2 className="text-2xl font-semibold mt-6">1. Introduction</h2>
        <p className="mb-4">
          Nous accordons une grande importance à la confidentialité de vos
          données. Cette politique explique comment nous collectons, utilisons
          et protégeons vos informations personnelles.
        </p>

        <h2 className="text-2xl font-semibold mt-6">2. Données Collectées</h2>
        <p className="mb-4">
          Nous pouvons collecter des informations comme votre nom, adresse
          e-mail et autres données fournies volontairement.
        </p>

        <h2 className="text-2xl font-semibold mt-6">
          3. Utilisation des Données
        </h2>
        <p className="mb-4">
          Vos données sont utilisées pour améliorer notre site, vous fournir un
          meilleur service et assurer la sécurité de nos utilisateurs.
        </p>

        <h2 className="text-2xl font-semibold mt-6">4. Partage des Données</h2>
        <p className="mb-4">
          Nous ne vendons ni ne partageons vos données personnelles avec des
          tiers sans votre consentement, sauf si requis par la loi.
        </p>

        <h2 className="text-2xl font-semibold mt-6">5. Sécurité des Données</h2>
        <p className="mb-4">
          Nous mettons en place des mesures de sécurité pour protéger vos
          informations contre tout accès non autorisé.
        </p>

        <h2 className="text-2xl font-semibold mt-6">6. Vos Droits</h2>
        <p className="mb-4">
          Vous avez le droit d&apos;accéder, de modifier ou de supprimer vos
          données personnelles en nous contactant.
        </p>

        <h2 className="text-2xl font-semibold mt-6">
          7. Modifications de cette Politique
        </h2>
        <p className="mb-4">
          Nous nous réservons le droit de modifier cette politique de
          confidentialité à tout moment.
        </p>

        <h2 className="text-2xl font-semibold mt-6">8. Contact</h2>
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

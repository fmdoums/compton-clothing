import CategoriesMenu from "../../components/menu/categories-menu.component";
const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Femmes",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 2,
      title: "Homme",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
    {
      id: 3,
      title: "Enfants",
      imageUrl:
        "https://media.istockphoto.com/id/1152823474/fr/photo/des-enfants-branch%C3%A9s-%C3%A9coutant-de-la-musique.jpg?s=1024x1024&w=is&k=20&c=scv_jbJH4bzyp7SM_R6NomNv0h2YYO9fGaa87Z7p4BU=",
    },
    {
      id: 4,
      title: "Chaussures",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 5,
      title: "Nouveautés",
      imageUrl:
        "https://media.istockphoto.com/id/1265973789/fr/photo/fille-heureuse-d%C3%A9ballant-des-v%C3%AAtements-apr%C3%A8s-le-magasinage-en-ligne.jpg?s=1024x1024&w=is&k=20&c=176lD075hBntsx3Ac9DoOX9kwK5cvcRYumBMZwVdCaI=",
    },
  ];
  return <CategoriesMenu categories={categories} />;
};

export default Home;

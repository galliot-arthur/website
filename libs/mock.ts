export type MockedData = {
  name: string;
  path: string | string[];
  date: string;
  subtitle?: string;
  ratio?: string;
};

const mockedData: MockedData[] = [
  {
    name: "Shifting With Prisms",
    path: "AASCTAPE002-2018.jpg",
    date: "2018",
    subtitle: "Noxin - AASCTAPE002",
  },
  {
    name: "La Jeunesse",
    path: "birthday-2019.jpg",
    date: "2018",
    subtitle: "César & Jason",
  },
  {
    name: "Buena Onda",
    path: "buena-onda-2023.jpg",
    date: "2023",
    subtitle: "House Of The Gypsies - César & Jason",
  },
  {
    name: "Enter The Dojo 2",
    path: [
      "enter-the-dojo-2-2023/enter2_insta.jpg",
      "enter-the-dojo-2-2023/enter2_story.jpg",
    ],
    date: "2023",

    ratio: "1080/1350",
  },
  {
    name: "Enter The Dojo 3",
    path: [
      "enter-the-dojo-3-2023/dojo3.jpg",
      "enter-the-dojo-3-2023/dojo3_story.jpg",
    ],
    date: "2023",
    ratio: "5/7",
  },
  {
    name: "Enter The Dojo 4",
    path: [
      "enter-the-dojo-4-2024/insta.jpg",
      "enter-the-dojo-4-2024/story.jpg",
      "enter-the-dojo-4-2024/facebook.jpg",
    ],
    date: "2024",
    ratio: "4/5",
  },
  {
    name: "Vivance - Étoile d'Alaï",
    path: [
      "etoile-d-alai-2018/LIGHTON003_FACEA_WEB.jpg",
      "etoile-d-alai-2018/LIGHTON003_FACEB_WEB.jpg",
    ],
    date: "2018",
    subtitle: "Lighton003",
  },
  {
    name: "Fun 1",
    path: "fun-bis-2019.jpg",
    date: "2019",
    subtitle: "Keep practiting in 2019",
  },
  {
    name: "Fun 2",
    path: "fun-3-2019.jpg",
    date: "2019",
    subtitle: "Keep practiting in 2019",
  },
  {
    name: "Fun 3",
    path: "fun-2019.jpg",
    date: "2019",
    subtitle: "Keep practiting in 2019",
  },
  {
    name: "Hyas & Sentiments - Only B-Sides",
    path: "lighton005-2020/LIGHTON005_COVER-20002000.jpg",
    date: "2020",
    subtitle: "Lighton005",
  },
  {
    name: "Light On Earth Label Night",
    path: "lightonearth-larotonde-2018.jpg",
    date: "2020",
  },
  {
    name: "Martin Texier - Wine Label",
    path: [
      "martin-texier-2024/IMG_1765.jpg",
      "martin-texier-2024/martin_labelPreview_A.jpg",
    ],
    date: "2020",
    subtitle: "Reissued from 2016",
  },
  {
    name: "MONTÉE DE LA HESSSSS",
    path: "montee-de-la-hessss-2018.jpg",
    date: "2018",
    subtitle: "GROOVEDGE",
  },
  {
    name: "Ondes Rouges",
    path: "ondes-rouges-2019.jpg",
    date: "2019",
  },
  {
    name: "Studiolo - The 90'S Airo Cosmic Era",
    path: "studiolo-2019.jpg",
    date: "2019",
    subtitle: "Selected by Ygal Ohayon - Released on Antinote",
  },
  {
    name: "Sun RSA",
    path: "sun-rsa-2018.jpg",
    date: "2018",
    subtitle: "Free Party in Lyon",
  },
  {
    name: "Sunset x Gypsies",
    path: "sunset-x-gypsies-2019/SUNSET-x-GIPSIES-1-2.jpg",
    date: "2019",
    subtitle: "House Of The Gypsies - César & Jason",
  },
  {
    name: "The Last Trance",
    path: "the-last-trance-2019.jpg",
    date: "2019",
    subtitle: "House Of The Gypsies - César & Jason",
  },
  {
    name: "DJ SPINELLI - Third Optics",
    path: [
      "third-optics-2019/GRVDG005_FRONT_WEB.jpg",
      "third-optics-2019/GRVDG005_BACK_WEB.jpg",
      "third-optics-2019/GRVDG005_A_WEB.jpg",
      "third-optics-2019/GRVDG005_B_WEB.jpg",
    ],
    date: "2019",
    subtitle: "Grdg005 - Vinyl",
  },
  /* {
    name: "ENS DUBS 4",
    path: [
      "tweak-ens-4-2023/ens4-insta.jpg",
      "tweak-ens-4-2023/ens4-insta-stories.jpg",
    ],
    date: "2023",
    subtitle: "Tweak Soundsystem",
  },
  {
    name: "ENS DUBS 5",
    path: [
      "tweak-ens-5-2023/ens5-3-6.jpg",
      "tweak-ens-5-2023/ens5-3-insta-2.jpg",
    ],
    date: "2023",
    subtitle: "Tweak Soundsystem",
  }, */
  {
    name: "ENS DUBS 6",
    path: [
      "tweak-ens-6-2024/v2.jpg",
      "tweak-ens-6-2024/stories_annoucement.jpg",
      "tweak-ens-6-2024/conf.jpg",
      "tweak-ens-6-2024/carin.jpg",
    ],
    date: "2024",
    subtitle: "Tweak Soundsystem",
    ratio: "10/14",
  },
];

export const mock = mockedData.sort((a, b) => {
  return Number(b.date) - Number(a.date);
});

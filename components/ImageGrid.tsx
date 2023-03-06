import Image from "next/image";

export enum difficulty {
  EASY = "Very easy",
  MODERATE_EASY = "Moderate-easy",
  MODERATE = "Moderate",
  MODERATE_DIFFICULT = "Moderate-difficult",
  DIFFICULT = "Difficult",
  VERY_DIFFICULT = "Very difficult",
  EXPERT = "Expert",
}
export enum lighting {
  SUN = "Full sun, no shade",
  BRIGHT = "Bright direct light, no shade",
  BRIGHT_SHADY = "Bright direct light, some shade",
  IN_BRIGHT = "Bright indirect light, no shade",
  IN_BRIGHT_SHADY = "Bright indirect light, some shade",
  SHADE = "Partial shade, mostly shady",
  DARK = "Full shade, no direct light",
}

export interface Plant {
  Name: string;
  Description: string;
  DaysToWater: number;
  Difficulty: difficulty;
  Lighting: lighting;
  ImageURL: string;
}

export default function ImageGrid() {
  const plants: Plant[] = [
    {
      Name: "Spider plant",
      Description: "No arachnophobia here",
      DaysToWater: 2,
      Difficulty: difficulty.EXPERT,
      Lighting: lighting.IN_BRIGHT_SHADY,
      ImageURL: "/images/00018-2713224236.png",
    },
    {
      Name: "Peace lily",
      Description: "Chillax bro",
      DaysToWater: 5,
      Difficulty: difficulty.MODERATE_EASY,
      Lighting: lighting.BRIGHT,
      ImageURL: "/images/00072-3933292009.png",
    },
    {
      Name: "Devils Ivy",
      Description: "Don't you dare!",
      DaysToWater: 7,
      Difficulty: difficulty.MODERATE_DIFFICULT,
      Lighting: lighting.IN_BRIGHT_SHADY,
      ImageURL: "/images/plants/00065-2713224283.png",
    },
  ];

  const calulateDifficultyColor = (dif: difficulty): string => {
    if (dif === difficulty.EASY) {
      return "text-[#005C0C]";
    } else if (
      dif === difficulty.MODERATE_EASY ||
      dif === difficulty.MODERATE ||
      dif === difficulty.MODERATE_DIFFICULT
    ) {
      return "text-[#FFD700]";
    } else if (
      dif === difficulty.DIFFICULT ||
      dif === difficulty.VERY_DIFFICULT
    ) {
      return "text-[#FFA500]";
    } else {
      return "text-[#FF0000]";
    }
  };

  return (
    <section className="relative w-full">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-3xl lg:text-5xl md:text-4xl text-center">
            Recent generations
          </h1>
          <p className="my-4 max-w-xl text-sm lg:text-lg md:text-base text-center">
            Here are some impressions of the last generated plants
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 place-items-center">
          {plants.map((plant) => {
            return (
              <div
                key={plant.Name}
                className="flex flex-col items-center justify-center max-w-sm p-4 rounded-lg shadow-md bg-gray-100 dark:bg-gray-900"
              >
                <Image
                  className="w-full h-64 bg-gray-300 dark:bg-gray-700 object-cover rounded-lg shadow"
                  src={plant.ImageURL}
                  alt=""
                  height={512}
                  width={512}
                />
                <div className="w-full text-center overflow-hidden py-2">
                  <h3 className="my-2 font-medium text-lg tracking-wide text-gray-800 dark:text-gray-200">
                    {plant.Name}
                  </h3>
                  <p className="px-3 text-base">
                    Description: {plant.Description}
                  </p>
                  <p className="px-3 text-base">
                    Water needed every {plant.DaysToWater} days.
                  </p>
                  <p className="px-3 text-base">
                    Difficulty:{" "}
                    {/* <p className={calulateDifficultyColor(plant.Difficulty)}>
                      {plant.Difficulty}
                    </p> */}
                  </p>
                  <p className="px-3 text-base">Best for: {plant.Lighting}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { faker } from "@faker-js/faker";

export const generateRandomPolygons = () => {
  const polygons = Array.from({ length: 800000 }, () => {
    const lat = faker.location.latitude();
    const lng = faker.location.longitude();
    if (lat < 50.8 || lat > 58.0 || lng < -4.0 || lng > 0.2) return null;

    const numPoints = faker.datatype.number({ min: 3, max: 6 });
    const points = Array.from({ length: numPoints }, () => {
      const radius = faker.number.float({ min: 0.03, max: 0.05 });
      const angle = faker.number.float({ min: 0, max: 360 });
      const crookedness = faker.number.float({ min: 0.3, max: 1.5 }); // Adjust the range based on the desired crookedness

      const pointLat = lat + radius * Math.cos(angle) * crookedness;
      const pointLng = lng + radius * Math.sin(angle) * crookedness;

      return [pointLng, pointLat];
    });

    const ukBoroughs = [
      "Westminster",
      "Kensington and Chelsea",
      "Camden",
      "Islington",
      "Hackney",
      "Sussex",
      "West",
    ];

    const boroughName =
      ukBoroughs[Math.floor(Math.random() * ukBoroughs.length)];

    return {
      type: "Feature",
      properties: {
        title: boroughName,
        size: faker.datatype.number({ min: 10, max: 30 }),
      },
      geometry: {
        type: "Polygon",
        coordinates: [points],
      },
    };
  }).filter((p) => p);

  return polygons;
};
